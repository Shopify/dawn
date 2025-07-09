const postcss = require('postcss');

// Regex to find {% stylesheet %} blocks in Liquid files
const STYLESHEET_REGEX = /\{%[\s-]*stylesheet[\s-]*%\}([\s\S]*?)\{%[\s-]*endstylesheet[\s-]*%\}/g;
const EMPTY_FILE_COMMENT = '/* Liquid file with no stylesheet blocks */';
const BLOCK_SEPARATOR = '\n\n';

const createSkippedLiquidRoot = (originalCSS, filename, opts) => {
  const root = postcss.parse(EMPTY_FILE_COMMENT, { ...opts, from: filename });
  root._liquidSkipped = true;
  root._liquidOriginalCSS = originalCSS;
  return root;
};

const findMappingForLine = (lineMapping, generatedLine) => {
  return lineMapping.find((mapping) => mapping.generatedLine === generatedLine);
};

const mapSourcePosition = (sourcePosition, lineMapping) => {
  if (!sourcePosition || !sourcePosition.start) return;

  const startMapping = findMappingForLine(lineMapping, sourcePosition.start.line);
  if (startMapping) {
    sourcePosition.start.line = startMapping.originalLine;
    if (!sourcePosition.start.column) {
      sourcePosition.start.column = startMapping.column || 1;
    }
  }

  if (sourcePosition.end) {
    const endMapping = findMappingForLine(lineMapping, sourcePosition.end.line);
    if (endMapping) {
      sourcePosition.end.line = endMapping.originalLine;
      if (!sourcePosition.end.column) {
        sourcePosition.end.column = endMapping.column || 1;
      }
    }
  }
};

const mapAllSourcePositions = (root, lineMapping) => {
  const mapNodeSource = (node) => {
    if (node.source) {
      mapSourcePosition(node.source, lineMapping);
    }
  };

  root.walkDecls(mapNodeSource);
  root.walkRules(mapNodeSource);
  root.walkAtRules(mapNodeSource);
  root.walkComments(mapNodeSource);
};

const createMappedErrorFunction = (originalError, lineMapping) => {
  return function (message, node, opts = {}) {
    if (node && node.source) {
      mapSourcePosition(node.source, lineMapping);
    }
    return originalError(message, node, opts);
  };
};

const extractBaseIndentation = (cssContent) => {
  const lines = cssContent.split('\n');

  for (const line of lines) {
    if (line.trim()) {
      const match = line.match(/^(\s*)/);
      return match ? match[1] : '';
    }
  }

  return '';
};

const applyIndentationToCSS = (cssContent, baseIndent) => {
  if (!cssContent.trim()) return '';

  const lines = cssContent.split('\n');
  const baseIndentLength = baseIndent.length;

  return lines
    .map((line) => {
      if (!line.trim()) return line;

      const currentIndent = line.match(/^(\s*)/)?.[1] || '';
      const trimmedLine = line.trim();

      let relativeIndent = '';
      if (currentIndent.length > baseIndentLength) {
        relativeIndent = currentIndent.substring(baseIndentLength);
      }

      return baseIndent + relativeIndent + trimmedLine;
    })
    .join('\n');
};

const splitCSSIntoBlocks = (cssContent, blockCount) => {
  if (blockCount === 1) {
    return [cssContent];
  }

  const parts = cssContent.split(/\n\s*\n/);

  if (parts.length === blockCount) {
    return parts;
  }

  const lines = cssContent.split('\n');
  const linesPerBlock = Math.ceil(lines.length / blockCount);
  const blocks = [];

  for (let i = 0; i < blockCount; i++) {
    const start = i * linesPerBlock;
    const end = Math.min((i + 1) * linesPerBlock, lines.length);
    blocks.push(lines.slice(start, end).join('\n').trim());
  }

  return blocks;
};

const reconstructLiquidBlock = (originalBlock, fixedCSS, originalContent) => {
  const openTagMatch = originalContent.match(/(\{%[\s-]*stylesheet[\s-]*%\})/);
  const closeTagMatch = originalContent.match(/(\{%[\s-]*endstylesheet[\s-]*%\})/);

  if (!openTagMatch || !closeTagMatch) {
    return originalContent;
  }

  const openTag = openTagMatch[0];
  const closeTag = closeTagMatch[0];
  const baseIndent = extractBaseIndentation(originalBlock.content);
  const indentedCSS = applyIndentationToCSS(fixedCSS, baseIndent);

  return `${openTag}\n${indentedCSS}\n${closeTag}`;
};

module.exports = {
  parse(css, opts) {
    const filename = opts.from || 'input.liquid';

    if (!filename.endsWith('.liquid')) {
      return postcss.parse(css, opts);
    }

    // Extract stylesheet blocks
    const blocks = [];
    let match;
    STYLESHEET_REGEX.lastIndex = 0;

    while ((match = STYLESHEET_REGEX.exec(css)) !== null) {
      const cssContent = match[1];
      const startOffset = match.index + match[0].indexOf(match[1]);
      const linesBefore = css.substring(0, startOffset).split('\n').length;

      blocks.push({
        content: cssContent,
        startLine: linesBefore,
        startOffset,
        fullMatch: match[0],
        matchStart: match.index,
        matchEnd: match.index + match[0].length,
      });
    }

    if (blocks.length === 0) {
      return createSkippedLiquidRoot(css, filename, opts);
    }

    // Create line mapping
    const lineMapping = [];
    let currentLine = 1;

    blocks.forEach((block, blockIndex) => {
      if (blockIndex > 0) {
        currentLine += 2;
      }

      const lines = block.content.split('\n');
      lines.forEach((line, lineIndex) => {
        lineMapping.push({
          generatedLine: currentLine + lineIndex,
          originalLine: block.startLine + lineIndex,
          block: blockIndex,
          column: 1,
        });
      });

      currentLine += lines.length;
    });

    // Combine CSS blocks
    const combinedCSS = blocks.map((block) => block.content).join(BLOCK_SEPARATOR);

    // Create liquid-aware root
    const root = postcss.parse(combinedCSS, { ...opts, from: filename });

    root._liquidLineMapping = lineMapping;
    root._liquidOriginalCSS = css;
    root._liquidBlocks = blocks;
    root._isLiquidFile = true;

    root.error = createMappedErrorFunction(root.error.bind(root), lineMapping);
    mapAllSourcePositions(root, lineMapping);

    return root;
  },

  stringify(root, builder) {
    if (root._liquidSkipped && root._liquidOriginalCSS) {
      builder(root._liquidOriginalCSS);
      return;
    }

    if (root._isLiquidFile && root._liquidBlocks && root._liquidOriginalCSS) {
      // Stringify liquid file
      const cleanRoot = root.clone();
      ['_isLiquidFile', '_liquidBlocks', '_liquidOriginalCSS', '_liquidLineMapping'].forEach(
        (prop) => delete cleanRoot[prop]
      );

      const stringifiedCSS = cleanRoot.toString();
      const cssBlocks = splitCSSIntoBlocks(stringifiedCSS.trim(), root._liquidBlocks.length);

      let liquidResult = root._liquidOriginalCSS;

      for (let i = root._liquidBlocks.length - 1; i >= 0; i--) {
        const block = root._liquidBlocks[i];
        const fixedCSS = cssBlocks[i] || '';
        const originalBlockContent = root._liquidOriginalCSS.substring(block.matchStart, block.matchEnd);
        const newBlock = reconstructLiquidBlock(block, fixedCSS, originalBlockContent);

        liquidResult = liquidResult.substring(0, block.matchStart) + newBlock + liquidResult.substring(block.matchEnd);
      }

      builder(liquidResult);
      return;
    }

    return postcss.stringify(root, builder);
  },
};

module.exports.postcss = true;
