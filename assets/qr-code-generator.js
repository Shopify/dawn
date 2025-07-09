/**
 * @fileoverview
 * - Using the 'QRCode for Javascript library'
 * - Fixed dataset of 'QRCode for Javascript library' for support full-spec.
 * - this library has no dependencies.
 *
 * @author davidshimjs
 * @see http://www.d-project.com/
 * @see http://jeromeetienne.github.com/jquery-qrcode/
 */

const QRMode = { MODE_NUMBER: 1 << 0, MODE_ALPHA_NUM: 1 << 1, MODE_8BIT_BYTE: 1 << 2, MODE_KANJI: 1 << 3 };
const QRErrorCorrectLevel = {
  L: 1,
  M: 0,
  Q: 3,
  H: 2,
};

const QRMaskPattern = {
  PATTERN000: 0,
  PATTERN001: 1,
  PATTERN010: 2,
  PATTERN011: 3,
  PATTERN100: 4,
  PATTERN101: 5,
  PATTERN110: 6,
  PATTERN111: 7,
};

//---------------------------------------------------------------------
// QRCode for JavaScript
//
// Copyright (c) 2009 Kazuhiko Arase
//
// URL: http://www.d-project.com/
//
// Licensed under the MIT license:
//   http://www.opensource.org/licenses/mit-license.php
//
// The word "QR Code" is registered trademark of
// DENSO WAVE INCORPORATED
//   http://www.denso-wave.com/qrcode/faqpatent-e.html
//
//---------------------------------------------------------------------

/**
 * QR8bitByte constructor
 *
 * @param {string} data
 */
function QR8bitByte(data) {
  this.mode = QRMode.MODE_8BIT_BYTE;
  this.data = data;
  this.parsedData = [];

  // Added to support UTF-8 Characters
  for (var i = 0, l = this.data.length; i < l; i++) {
    var byteArray = [];
    var code = this.data.charCodeAt(i);

    if (code > 0x10000) {
      byteArray[0] = 0xf0 | ((code & 0x1c0000) >>> 18);
      byteArray[1] = 0x80 | ((code & 0x3f000) >>> 12);
      byteArray[2] = 0x80 | ((code & 0xfc0) >>> 6);
      byteArray[3] = 0x80 | (code & 0x3f);
    } else if (code > 0x800) {
      byteArray[0] = 0xe0 | ((code & 0xf000) >>> 12);
      byteArray[1] = 0x80 | ((code & 0xfc0) >>> 6);
      byteArray[2] = 0x80 | (code & 0x3f);
    } else if (code > 0x80) {
      byteArray[0] = 0xc0 | ((code & 0x7c0) >>> 6);
      byteArray[1] = 0x80 | (code & 0x3f);
    } else {
      byteArray[0] = code;
    }

    this.parsedData.push(byteArray);
  }

  this.parsedData = Array.prototype.concat.apply([], this.parsedData);

  if (this.parsedData.length != this.data.length) {
    this.parsedData.unshift(191);
    this.parsedData.unshift(187);
    this.parsedData.unshift(239);
  }
}

QR8bitByte.prototype = {
  /**
   * @returns {number}
   */
  getLength: function () {
    return this.parsedData.length;
  },

  /**
   * @param {QRBitBuffer} buffer
   */
  write: function (buffer) {
    for (var i = 0, l = this.parsedData.length; i < l; i++) {
      buffer.put(this.parsedData[i], 8);
    }
  },
};

/**
 * @param {number} typeNumber
 * @param {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} errorCorrectLevel
 */
function QRCodeModel(typeNumber, errorCorrectLevel) {
  this.typeNumber = typeNumber;
  this.errorCorrectLevel = errorCorrectLevel;
  /** @type {(boolean|null)[][]|null} */
  this.modules = null;
  this.moduleCount = 0;
  /** @type {number[]|null} */
  this.dataCache = null;
  /** @type {QR8bitByte[]} */
  this.dataList = [];
}

QRCodeModel.prototype = {
  /**
   * Add data
   *
   * @param {string} data
   */
  addData: function (data) {
    var newData = new QR8bitByte(data);
    this.dataList.push(newData);
    this.dataCache = null;
  },

  /**
   * Check if a module is dark
   *
   * @param {number} row
   * @param {number} col
   * @returns {boolean}
   */
  isDark: function (row, col) {
    if (row < 0 || this.moduleCount <= row || col < 0 || this.moduleCount <= col) {
      throw new Error(row + ',' + col);
    }
    if (this.modules == null) {
      return false;
    }
    return this.modules[row]?.[col] ?? false;
  },
  getModuleCount: function () {
    return this.moduleCount;
  },
  make: function () {
    this.makeImpl(false, this.getBestMaskPattern());
  },

  /**
   * @param {boolean} test
   * @param {number} maskPattern
   */
  makeImpl: function (test, maskPattern) {
    this.moduleCount = this.typeNumber * 4 + 17;
    this.modules = Array.from({ length: this.moduleCount }, () => Array.from({ length: this.moduleCount }, () => null));

    this.setupPositionProbePattern(0, 0);
    this.setupPositionProbePattern(this.moduleCount - 7, 0);
    this.setupPositionProbePattern(0, this.moduleCount - 7);
    this.setupPositionAdjustPattern();
    this.setupTimingPattern();
    this.setupTypeInfo(test, maskPattern);
    if (this.typeNumber >= 7) {
      this.setupTypeNumber(test);
    }
    if (this.dataCache == null) {
      this.dataCache = QRCodeModel.createData(this.typeNumber, this.errorCorrectLevel, this.dataList);
    }
    this.mapData(this.dataCache, maskPattern);
  },

  /**
   * @param {number} row
   * @param {number} col
   */
  setupPositionProbePattern: function (row, col) {
    if (this.modules == null) {
      return;
    }
    for (var r = -1; r <= 7; r++) {
      if (row + r <= -1 || this.moduleCount <= row + r) continue;
      const rowR = this.modules[row + r];
      if (rowR === undefined) continue;
      for (var c = -1; c <= 7; c++) {
        if (col + c <= -1 || this.moduleCount <= col + c) continue;
        if (
          (0 <= r && r <= 6 && (c == 0 || c == 6)) ||
          (0 <= c && c <= 6 && (r == 0 || r == 6)) ||
          (2 <= r && r <= 4 && 2 <= c && c <= 4)
        ) {
          rowR[col + c] = true;
        } else {
          rowR[col + c] = false;
        }
      }
    }
  },
  getBestMaskPattern: function () {
    var minLostPoint = 0;
    var pattern = 0;
    for (var i = 0; i < 8; i++) {
      this.makeImpl(true, i);
      var lostPoint = QRUtil.getLostPoint(this);
      if (i == 0 || minLostPoint > lostPoint) {
        minLostPoint = lostPoint;
        pattern = i;
      }
    }
    return pattern;
  },
  setupTimingPattern: function () {
    if (this.modules == null) {
      return;
    }
    for (var r = 8; r < this.moduleCount - 8; r++) {
      const rowR = this.modules[r];
      if (rowR === undefined) continue;
      if (rowR[6] != null) {
        continue;
      }
      rowR[6] = r % 2 == 0;
    }
    for (var c = 8; c < this.moduleCount - 8; c++) {
      const rowN = this.modules[6];
      if (rowN === undefined) continue;
      if (rowN[c] != null) {
        continue;
      }
      rowN[c] = c % 2 == 0;
    }
  },
  setupPositionAdjustPattern: function () {
    if (this.modules == null) {
      return;
    }
    var pos = QRUtil.getPatternPosition(this.typeNumber);
    for (var i = 0; i < pos.length; i++) {
      for (var j = 0; j < pos.length; j++) {
        var row = pos[i];
        var col = pos[j];
        if (row === undefined || col === undefined) continue;
        if (this.modules[row]?.[col] != null) {
          continue;
        }
        for (var r = -2; r <= 2; r++) {
          const rowR = this.modules[row + r];
          if (rowR === undefined) continue;
          for (var c = -2; c <= 2; c++) {
            if (r == -2 || r == 2 || c == -2 || c == 2 || (r == 0 && c == 0)) {
              rowR[col + c] = true;
            } else {
              rowR[col + c] = false;
            }
          }
        }
      }
    }
  },

  /**
   * @param {boolean} test
   */
  setupTypeNumber: function (test) {
    if (this.modules == null) {
      return;
    }
    var bits = QRUtil.getBCHTypeNumber(this.typeNumber);
    for (var i = 0; i < 18; i++) {
      var mod = !test && ((bits >> i) & 1) == 1;
      var row = this.modules[Math.floor(i / 3)];
      if (row === undefined) continue;
      row[(i % 3) + this.moduleCount - 8 - 3] = mod;
    }
    for (var i = 0; i < 18; i++) {
      var mod = !test && ((bits >> i) & 1) == 1;
      var row = this.modules[(i % 3) + this.moduleCount - 8 - 3];
      if (row === undefined) continue;
      row[Math.floor(i / 3)] = mod;
    }
  },

  /**
   * @param {boolean} test
   * @param {number} maskPattern
   */
  setupTypeInfo: function (test, maskPattern) {
    if (this.modules == null) {
      return;
    }
    var data = (this.errorCorrectLevel << 3) | maskPattern;
    var bits = QRUtil.getBCHTypeInfo(data);
    for (var i = 0; i < 15; i++) {
      var mod = !test && ((bits >> i) & 1) == 1;
      if (i < 6) {
        var row = this.modules[i];
        if (row === undefined) continue;
        row[8] = mod;
      } else if (i < 8) {
        var row = this.modules[i + 1];
        if (row === undefined) continue;
        row[8] = mod;
      } else {
        var row = this.modules[this.moduleCount - 15 + i];
        if (row === undefined) continue;
        row[8] = mod;
      }
    }
    for (var i = 0; i < 15; i++) {
      var mod = !test && ((bits >> i) & 1) == 1;
      var row = this.modules[8];
      if (row === undefined) continue;
      if (i < 8) {
        row[this.moduleCount - i - 1] = mod;
      } else if (i < 9) {
        row[15 - i - 1 + 1] = mod;
      } else {
        row[15 - i - 1] = mod;
      }
    }
    var row = this.modules[this.moduleCount - 8];
    if (row === undefined) return;
    row[8] = !test;
  },

  /**
   * @param {number[]} data
   * @param {number} maskPattern
   */
  mapData: function (data, maskPattern) {
    if (this.modules == null) {
      return;
    }
    var inc = -1;
    var row = this.moduleCount - 1;
    var bitIndex = 7;
    var byteIndex = 0;
    for (var col = this.moduleCount - 1; col > 0; col -= 2) {
      if (col == 6) col--;
      while (true) {
        for (var c = 0; c < 2; c++) {
          if (this.modules[row]?.[col - c] == null) {
            var dark = false;
            if (byteIndex < data.length) {
              var dataR = data[byteIndex];
              if (dataR !== undefined) {
                dark = ((dataR >>> bitIndex) & 1) == 1;
              }
            }
            var mask = QRUtil.getMask(maskPattern, row, col - c);
            if (mask) {
              dark = !dark;
            }
            var rowR = this.modules[row];
            if (rowR !== undefined) {
              rowR[col - c] = dark;
            }
            bitIndex--;
            if (bitIndex == -1) {
              byteIndex++;
              bitIndex = 7;
            }
          }
        }
        row += inc;
        if (row < 0 || this.moduleCount <= row) {
          row -= inc;
          inc = -inc;
          break;
        }
      }
    }
  },
};
QRCodeModel.PAD0 = 0xec;
QRCodeModel.PAD1 = 0x11;

/**
 * @param {number} typeNumber
 * @param {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} errorCorrectLevel
 * @param {QR8bitByte[]} dataList
 */
QRCodeModel.createData = function (typeNumber, errorCorrectLevel, dataList) {
  var rsBlocks = QRRSBlock.getRSBlocks(typeNumber, errorCorrectLevel);
  var buffer = new QRBitBuffer();
  for (var i = 0; i < dataList.length; i++) {
    var data = dataList[i];
    if (data === undefined) continue;
    buffer.put(data.mode, 4);
    buffer.put(data.getLength(), QRUtil.getLengthInBits(data.mode, typeNumber));
    data.write(buffer);
  }
  var totalDataCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    var rsBlock = rsBlocks[i];
    if (rsBlock === undefined) continue;
    totalDataCount += rsBlock.dataCount;
  }
  if (buffer.getLengthInBits() > totalDataCount * 8) {
    throw new Error('code length overflow. (' + buffer.getLengthInBits() + '>' + totalDataCount * 8 + ')');
  }
  if (buffer.getLengthInBits() + 4 <= totalDataCount * 8) {
    buffer.put(0, 4);
  }
  while (buffer.getLengthInBits() % 8 != 0) {
    buffer.putBit(false);
  }
  while (true) {
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCodeModel.PAD0, 8);
    if (buffer.getLengthInBits() >= totalDataCount * 8) {
      break;
    }
    buffer.put(QRCodeModel.PAD1, 8);
  }
  return QRCodeModel.createBytes(buffer, rsBlocks);
};

/**
 * @param {QRBitBuffer} buffer
 * @param {QRRSBlock[]} rsBlocks
 */
QRCodeModel.createBytes = function (buffer, rsBlocks) {
  var offset = 0;
  var maxDcCount = 0;
  var maxEcCount = 0;
  var dcdata = new Array(rsBlocks.length);
  var ecdata = new Array(rsBlocks.length);
  for (var r = 0; r < rsBlocks.length; r++) {
    var rsBlock = rsBlocks[r];
    if (rsBlock === undefined) continue;
    var dcCount = rsBlock.dataCount;
    var ecCount = rsBlock.totalCount - dcCount;
    maxDcCount = Math.max(maxDcCount, dcCount);
    maxEcCount = Math.max(maxEcCount, ecCount);
    dcdata[r] = new Array(dcCount);
    for (var i = 0; i < dcdata[r].length; i++) {
      var dataR = buffer.buffer[i + offset];
      if (dataR !== undefined) {
        dcdata[r][i] = 0xff & dataR;
      }
    }
    offset += dcCount;
    var rsPoly = QRUtil.getErrorCorrectPolynomial(ecCount);
    var rawPoly = new QRPolynomial(dcdata[r], rsPoly.getLength() - 1);
    var modPoly = rawPoly.mod(rsPoly);
    ecdata[r] = new Array(rsPoly.getLength() - 1);
    for (var i = 0; i < ecdata[r].length; i++) {
      var modIndex = i + modPoly.getLength() - ecdata[r].length;
      ecdata[r][i] = modIndex >= 0 ? modPoly.get(modIndex) : 0;
    }
  }
  var totalCodeCount = 0;
  for (var i = 0; i < rsBlocks.length; i++) {
    var rsBlock = rsBlocks[i];
    if (rsBlock === undefined) continue;
    totalCodeCount += rsBlock.totalCount;
  }
  var data = new Array(totalCodeCount);
  var index = 0;
  for (var i = 0; i < maxDcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < dcdata[r].length) {
        data[index++] = dcdata[r][i];
      }
    }
  }
  for (var i = 0; i < maxEcCount; i++) {
    for (var r = 0; r < rsBlocks.length; r++) {
      if (i < ecdata[r].length) {
        data[index++] = ecdata[r][i];
      }
    }
  }
  return data;
};

var QRUtil = {
  PATTERN_POSITION_TABLE: [
    [],
    [6, 18],
    [6, 22],
    [6, 26],
    [6, 30],
    [6, 34],
    [6, 22, 38],
    [6, 24, 42],
    [6, 26, 46],
    [6, 28, 50],
    [6, 30, 54],
    [6, 32, 58],
    [6, 34, 62],
    [6, 26, 46, 66],
    [6, 26, 48, 70],
    [6, 26, 50, 74],
    [6, 30, 54, 78],
    [6, 30, 56, 82],
    [6, 30, 58, 86],
    [6, 34, 62, 90],
    [6, 28, 50, 72, 94],
    [6, 26, 50, 74, 98],
    [6, 30, 54, 78, 102],
    [6, 28, 54, 80, 106],
    [6, 32, 58, 84, 110],
    [6, 30, 58, 86, 114],
    [6, 34, 62, 90, 118],
    [6, 26, 50, 74, 98, 122],
    [6, 30, 54, 78, 102, 126],
    [6, 26, 52, 78, 104, 130],
    [6, 30, 56, 82, 108, 134],
    [6, 34, 60, 86, 112, 138],
    [6, 30, 58, 86, 114, 142],
    [6, 34, 62, 90, 118, 146],
    [6, 30, 54, 78, 102, 126, 150],
    [6, 24, 50, 76, 102, 128, 154],
    [6, 28, 54, 80, 106, 132, 158],
    [6, 32, 58, 84, 110, 136, 162],
    [6, 26, 54, 82, 110, 138, 166],
    [6, 30, 58, 86, 114, 142, 170],
  ],
  G15: (1 << 10) | (1 << 8) | (1 << 5) | (1 << 4) | (1 << 2) | (1 << 1) | (1 << 0),
  G18: (1 << 12) | (1 << 11) | (1 << 10) | (1 << 9) | (1 << 8) | (1 << 5) | (1 << 2) | (1 << 0),
  G15_MASK: (1 << 14) | (1 << 12) | (1 << 10) | (1 << 4) | (1 << 1),

  /**
   * @param {number} data
   * @returns {number}
   */
  getBCHTypeInfo: function (data) {
    var d = data << 10;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15) >= 0) {
      d ^= QRUtil.G15 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G15));
    }
    return ((data << 10) | d) ^ QRUtil.G15_MASK;
  },

  /**
   * @param {number} data
   * @returns {number}
   */
  getBCHTypeNumber: function (data) {
    var d = data << 12;
    while (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18) >= 0) {
      d ^= QRUtil.G18 << (QRUtil.getBCHDigit(d) - QRUtil.getBCHDigit(QRUtil.G18));
    }
    return (data << 12) | d;
  },

  /**
   * @param {number} data
   * @returns {number}
   */
  getBCHDigit: function (data) {
    var digit = 0;
    while (data != 0) {
      digit++;
      data >>>= 1;
    }
    return digit;
  },

  /**
   * @param {number} typeNumber
   * @returns {number[]}
   */
  getPatternPosition: function (typeNumber) {
    return QRUtil.PATTERN_POSITION_TABLE[typeNumber - 1] ?? [];
  },

  /**
   * @param {number} maskPattern
   * @param {number} i
   * @param {number} j
   * @returns {boolean}
   */
  getMask: function (maskPattern, i, j) {
    switch (maskPattern) {
      case QRMaskPattern.PATTERN000:
        return (i + j) % 2 == 0;
      case QRMaskPattern.PATTERN001:
        return i % 2 == 0;
      case QRMaskPattern.PATTERN010:
        return j % 3 == 0;
      case QRMaskPattern.PATTERN011:
        return (i + j) % 3 == 0;
      case QRMaskPattern.PATTERN100:
        return (Math.floor(i / 2) + Math.floor(j / 3)) % 2 == 0;
      case QRMaskPattern.PATTERN101:
        return ((i * j) % 2) + ((i * j) % 3) == 0;
      case QRMaskPattern.PATTERN110:
        return (((i * j) % 2) + ((i * j) % 3)) % 2 == 0;
      case QRMaskPattern.PATTERN111:
        return (((i * j) % 3) + ((i + j) % 2)) % 2 == 0;
      default:
        throw new Error('bad maskPattern:' + maskPattern);
    }
  },

  /**
   * @param {number} errorCorrectLength
   * @returns {QRPolynomial}
   */
  getErrorCorrectPolynomial: function (errorCorrectLength) {
    var a = new QRPolynomial([1], 0);
    for (var i = 0; i < errorCorrectLength; i++) {
      a = a.multiply(new QRPolynomial([1, QRMath.gexp(i)], 0));
    }
    return a;
  },

  /**
   * @param {typeof QRMode[keyof typeof QRMode]} mode
   * @param {number} type
   * @returns {number}
   */
  getLengthInBits: function (mode, type) {
    if (1 <= type && type < 10) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 10;
        case QRMode.MODE_ALPHA_NUM:
          return 9;
        case QRMode.MODE_8BIT_BYTE:
          return 8;
        case QRMode.MODE_KANJI:
          return 8;
        default:
          throw new Error('mode:' + mode);
      }
    } else if (type < 27) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 12;
        case QRMode.MODE_ALPHA_NUM:
          return 11;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 10;
        default:
          throw new Error('mode:' + mode);
      }
    } else if (type < 41) {
      switch (mode) {
        case QRMode.MODE_NUMBER:
          return 14;
        case QRMode.MODE_ALPHA_NUM:
          return 13;
        case QRMode.MODE_8BIT_BYTE:
          return 16;
        case QRMode.MODE_KANJI:
          return 12;
        default:
          throw new Error('mode:' + mode);
      }
    } else {
      throw new Error('type:' + type);
    }
  },

  /**
   * @param {QRCodeModel} qrCode
   * @returns {number}
   */
  getLostPoint: function (qrCode) {
    var moduleCount = qrCode.getModuleCount();
    var lostPoint = 0;
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount; col++) {
        var sameCount = 0;
        var dark = qrCode.isDark(row, col);
        for (var r = -1; r <= 1; r++) {
          if (row + r < 0 || moduleCount <= row + r) {
            continue;
          }
          for (var c = -1; c <= 1; c++) {
            if (col + c < 0 || moduleCount <= col + c) {
              continue;
            }
            if (r == 0 && c == 0) {
              continue;
            }
            if (dark == qrCode.isDark(row + r, col + c)) {
              sameCount++;
            }
          }
        }
        if (sameCount > 5) {
          lostPoint += 3 + sameCount - 5;
        }
      }
    }
    for (var row = 0; row < moduleCount - 1; row++) {
      for (var col = 0; col < moduleCount - 1; col++) {
        var count = 0;
        if (qrCode.isDark(row, col)) count++;
        if (qrCode.isDark(row + 1, col)) count++;
        if (qrCode.isDark(row, col + 1)) count++;
        if (qrCode.isDark(row + 1, col + 1)) count++;
        if (count == 0 || count == 4) {
          lostPoint += 3;
        }
      }
    }
    for (var row = 0; row < moduleCount; row++) {
      for (var col = 0; col < moduleCount - 6; col++) {
        if (
          qrCode.isDark(row, col) &&
          !qrCode.isDark(row, col + 1) &&
          qrCode.isDark(row, col + 2) &&
          qrCode.isDark(row, col + 3) &&
          qrCode.isDark(row, col + 4) &&
          !qrCode.isDark(row, col + 5) &&
          qrCode.isDark(row, col + 6)
        ) {
          lostPoint += 40;
        }
      }
    }
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount - 6; row++) {
        if (
          qrCode.isDark(row, col) &&
          !qrCode.isDark(row + 1, col) &&
          qrCode.isDark(row + 2, col) &&
          qrCode.isDark(row + 3, col) &&
          qrCode.isDark(row + 4, col) &&
          !qrCode.isDark(row + 5, col) &&
          qrCode.isDark(row + 6, col)
        ) {
          lostPoint += 40;
        }
      }
    }
    var darkCount = 0;
    for (var col = 0; col < moduleCount; col++) {
      for (var row = 0; row < moduleCount; row++) {
        if (qrCode.isDark(row, col)) {
          darkCount++;
        }
      }
    }
    var ratio = Math.abs((100 * darkCount) / moduleCount / moduleCount - 50) / 5;
    lostPoint += ratio * 10;
    return lostPoint;
  },
};
var QRMath = {
  /**
   * Get the log
   *
   * @param {number} n
   * @returns {number}
   */
  glog: function (n) {
    if (n < 1) {
      throw new Error('glog(' + n + ')');
    }
    return QRMath.LOG_TABLE[n];
  },

  /**
   * Get the exp
   *
   * @param {number} n
   * @returns {number}
   */
  gexp: function (n) {
    while (n < 0) {
      n += 255;
    }
    while (n >= 256) {
      n -= 255;
    }
    return QRMath.EXP_TABLE[n];
  },
  EXP_TABLE: new Array(256),
  LOG_TABLE: new Array(256),
};
for (var i = 0; i < 8; i++) {
  QRMath.EXP_TABLE[i] = 1 << i;
}
for (var i = 8; i < 256; i++) {
  QRMath.EXP_TABLE[i] =
    QRMath.EXP_TABLE[i - 4] ^ QRMath.EXP_TABLE[i - 5] ^ QRMath.EXP_TABLE[i - 6] ^ QRMath.EXP_TABLE[i - 8];
}
for (var i = 0; i < 255; i++) {
  QRMath.LOG_TABLE[QRMath.EXP_TABLE[i]] = i;
}

/**
 * @param {number[]} num
 * @param {number} shift
 */
function QRPolynomial(num, shift) {
  if (num.length == undefined) {
    throw new Error(num.length + '/' + shift);
  }
  var offset = 0;
  while (offset < num.length && num[offset] == 0) {
    offset++;
  }
  this.num = new Array(num.length - offset + shift);
  for (var i = 0; i < num.length - offset; i++) {
    this.num[i] = num[i + offset];
  }
}
QRPolynomial.prototype = {
  /**
   * @param {number} index
   * @returns {number}
   */
  get: function (index) {
    return this.num[index];
  },

  getLength: function () {
    return this.num.length;
  },

  /**
   * @param {QRPolynomial} e
   * @returns {QRPolynomial}
   */
  multiply: function (e) {
    var num = new Array(this.getLength() + e.getLength() - 1);
    for (var i = 0; i < this.getLength(); i++) {
      for (var j = 0; j < e.getLength(); j++) {
        num[i + j] ^= QRMath.gexp(QRMath.glog(this.get(i)) + QRMath.glog(e.get(j)));
      }
    }
    return new QRPolynomial(num, 0);
  },

  /**
   * @param {QRPolynomial} e
   * @returns {QRPolynomial}
   */
  mod: function (e) {
    if (this.getLength() - e.getLength() < 0) {
      return this;
    }
    var ratio = QRMath.glog(this.get(0)) - QRMath.glog(e.get(0));
    var num = new Array(this.getLength());
    for (var i = 0; i < this.getLength(); i++) {
      num[i] = this.get(i);
    }
    for (var i = 0; i < e.getLength(); i++) {
      num[i] ^= QRMath.gexp(QRMath.glog(e.get(i)) + ratio);
    }
    return new QRPolynomial(num, 0).mod(e);
  },
};

/**
 * @param {number} totalCount
 * @param {number} dataCount
 */
function QRRSBlock(totalCount, dataCount) {
  this.totalCount = totalCount;
  this.dataCount = dataCount;
}
QRRSBlock.RS_BLOCK_TABLE = [
  [1, 26, 19],
  [1, 26, 16],
  [1, 26, 13],
  [1, 26, 9],
  [1, 44, 34],
  [1, 44, 28],
  [1, 44, 22],
  [1, 44, 16],
  [1, 70, 55],
  [1, 70, 44],
  [2, 35, 17],
  [2, 35, 13],
  [1, 100, 80],
  [2, 50, 32],
  [2, 50, 24],
  [4, 25, 9],
  [1, 134, 108],
  [2, 67, 43],
  [2, 33, 15, 2, 34, 16],
  [2, 33, 11, 2, 34, 12],
  [2, 86, 68],
  [4, 43, 27],
  [4, 43, 19],
  [4, 43, 15],
  [2, 98, 78],
  [4, 49, 31],
  [2, 32, 14, 4, 33, 15],
  [4, 39, 13, 1, 40, 14],
  [2, 121, 97],
  [2, 60, 38, 2, 61, 39],
  [4, 40, 18, 2, 41, 19],
  [4, 40, 14, 2, 41, 15],
  [2, 146, 116],
  [3, 58, 36, 2, 59, 37],
  [4, 36, 16, 4, 37, 17],
  [4, 36, 12, 4, 37, 13],
  [2, 86, 68, 2, 87, 69],
  [4, 69, 43, 1, 70, 44],
  [6, 43, 19, 2, 44, 20],
  [6, 43, 15, 2, 44, 16],
  [4, 101, 81],
  [1, 80, 50, 4, 81, 51],
  [4, 50, 22, 4, 51, 23],
  [3, 36, 12, 8, 37, 13],
  [2, 116, 92, 2, 117, 93],
  [6, 58, 36, 2, 59, 37],
  [4, 46, 20, 6, 47, 21],
  [7, 42, 14, 4, 43, 15],
  [4, 133, 107],
  [8, 59, 37, 1, 60, 38],
  [8, 44, 20, 4, 45, 21],
  [12, 33, 11, 4, 34, 12],
  [3, 145, 115, 1, 146, 116],
  [4, 64, 40, 5, 65, 41],
  [11, 36, 16, 5, 37, 17],
  [11, 36, 12, 5, 37, 13],
  [5, 109, 87, 1, 110, 88],
  [5, 65, 41, 5, 66, 42],
  [5, 54, 24, 7, 55, 25],
  [11, 36, 12],
  [5, 122, 98, 1, 123, 99],
  [7, 73, 45, 3, 74, 46],
  [15, 43, 19, 2, 44, 20],
  [3, 45, 15, 13, 46, 16],
  [1, 135, 107, 5, 136, 108],
  [10, 74, 46, 1, 75, 47],
  [1, 50, 22, 15, 51, 23],
  [2, 42, 14, 17, 43, 15],
  [5, 150, 120, 1, 151, 121],
  [9, 69, 43, 4, 70, 44],
  [17, 50, 22, 1, 51, 23],
  [2, 42, 14, 19, 43, 15],
  [3, 141, 113, 4, 142, 114],
  [3, 70, 44, 11, 71, 45],
  [17, 47, 21, 4, 48, 22],
  [9, 39, 13, 16, 40, 14],
  [3, 135, 107, 5, 136, 108],
  [3, 67, 41, 13, 68, 42],
  [15, 54, 24, 5, 55, 25],
  [15, 43, 15, 10, 44, 16],
  [4, 144, 116, 4, 145, 117],
  [17, 68, 42],
  [17, 50, 22, 6, 51, 23],
  [19, 46, 16, 6, 47, 17],
  [2, 139, 111, 7, 140, 112],
  [17, 74, 46],
  [7, 54, 24, 16, 55, 25],
  [34, 37, 13],
  [4, 151, 121, 5, 152, 122],
  [4, 75, 47, 14, 76, 48],
  [11, 54, 24, 14, 55, 25],
  [16, 45, 15, 14, 46, 16],
  [6, 147, 117, 4, 148, 118],
  [6, 73, 45, 14, 74, 46],
  [11, 54, 24, 16, 55, 25],
  [30, 46, 16, 2, 47, 17],
  [8, 132, 106, 4, 133, 107],
  [8, 75, 47, 13, 76, 48],
  [7, 54, 24, 22, 55, 25],
  [22, 45, 15, 13, 46, 16],
  [10, 142, 114, 2, 143, 115],
  [19, 74, 46, 4, 75, 47],
  [28, 50, 22, 6, 51, 23],
  [33, 46, 16, 4, 47, 17],
  [8, 152, 122, 4, 153, 123],
  [22, 73, 45, 3, 74, 46],
  [8, 53, 23, 26, 54, 24],
  [12, 45, 15, 28, 46, 16],
  [3, 147, 117, 10, 148, 118],
  [3, 73, 45, 23, 74, 46],
  [4, 54, 24, 31, 55, 25],
  [11, 45, 15, 31, 46, 16],
  [7, 146, 116, 7, 147, 117],
  [21, 73, 45, 7, 74, 46],
  [1, 53, 23, 37, 54, 24],
  [19, 45, 15, 26, 46, 16],
  [5, 145, 115, 10, 146, 116],
  [19, 75, 47, 10, 76, 48],
  [15, 54, 24, 25, 55, 25],
  [23, 45, 15, 25, 46, 16],
  [13, 145, 115, 3, 146, 116],
  [2, 74, 46, 29, 75, 47],
  [42, 54, 24, 1, 55, 25],
  [23, 45, 15, 28, 46, 16],
  [17, 145, 115],
  [10, 74, 46, 23, 75, 47],
  [10, 54, 24, 35, 55, 25],
  [19, 45, 15, 35, 46, 16],
  [17, 145, 115, 1, 146, 116],
  [14, 74, 46, 21, 75, 47],
  [29, 54, 24, 19, 55, 25],
  [11, 45, 15, 46, 46, 16],
  [13, 145, 115, 6, 146, 116],
  [14, 74, 46, 23, 75, 47],
  [44, 54, 24, 7, 55, 25],
  [59, 46, 16, 1, 47, 17],
  [12, 151, 121, 7, 152, 122],
  [12, 75, 47, 26, 76, 48],
  [39, 54, 24, 14, 55, 25],
  [22, 45, 15, 41, 46, 16],
  [6, 151, 121, 14, 152, 122],
  [6, 75, 47, 34, 76, 48],
  [46, 54, 24, 10, 55, 25],
  [2, 45, 15, 64, 46, 16],
  [17, 152, 122, 4, 153, 123],
  [29, 74, 46, 14, 75, 47],
  [49, 54, 24, 10, 55, 25],
  [24, 45, 15, 46, 46, 16],
  [4, 152, 122, 18, 153, 123],
  [13, 74, 46, 32, 75, 47],
  [48, 54, 24, 14, 55, 25],
  [42, 45, 15, 32, 46, 16],
  [20, 147, 117, 4, 148, 118],
  [40, 75, 47, 7, 76, 48],
  [43, 54, 24, 22, 55, 25],
  [10, 45, 15, 67, 46, 16],
  [19, 148, 118, 6, 149, 119],
  [18, 75, 47, 31, 76, 48],
  [34, 54, 24, 34, 55, 25],
  [20, 45, 15, 61, 46, 16],
];

/**
 * @param {number} typeNumber
 * @param {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} errorCorrectLevel
 * @returns {QRRSBlock[]}
 */
QRRSBlock.getRSBlocks = function (typeNumber, errorCorrectLevel) {
  var rsBlock = QRRSBlock.getRsBlockTable(typeNumber, errorCorrectLevel);
  if (rsBlock == undefined) {
    throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
  }
  var length = rsBlock.length / 3;
  var list = [];
  for (var i = 0; i < length; i++) {
    var count = rsBlock[i * 3 + 0];
    var totalCount = rsBlock[i * 3 + 1];
    var dataCount = rsBlock[i * 3 + 2];
    if (count === undefined || totalCount === undefined || dataCount === undefined) {
      throw new Error('bad rs block @ typeNumber:' + typeNumber + '/errorCorrectLevel:' + errorCorrectLevel);
    }
    for (var j = 0; j < count; j++) {
      list.push(new QRRSBlock(totalCount, dataCount));
    }
  }
  return list;
};

/**
 * @param {number} typeNumber
 * @param {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} errorCorrectLevel
 */
QRRSBlock.getRsBlockTable = function (typeNumber, errorCorrectLevel) {
  switch (errorCorrectLevel) {
    case QRErrorCorrectLevel.L:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 0];
    case QRErrorCorrectLevel.M:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 1];
    case QRErrorCorrectLevel.Q:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 2];
    case QRErrorCorrectLevel.H:
      return QRRSBlock.RS_BLOCK_TABLE[(typeNumber - 1) * 4 + 3];
    default:
      return undefined;
  }
};
function QRBitBuffer() {
  /** @type {number[]} */
  this.buffer = [];
  /** @type {number} */
  this.length = 0;
}
QRBitBuffer.prototype = {
  /**
   * @param {number} index
   * @returns {boolean}
   */
  get: function (index) {
    var bufIndex = Math.floor(index / 8);
    const bufferAtIndex = this.buffer[bufIndex];
    if (bufferAtIndex === undefined) {
      throw new Error('buffer index out of bounds');
    }
    return ((bufferAtIndex >>> (7 - (index % 8))) & 1) == 1;
  },
  /**
   * @param {number} num
   * @param {number} length
   */
  put: function (num, length) {
    for (var i = 0; i < length; i++) {
      this.putBit(((num >>> (length - i - 1)) & 1) == 1);
    }
  },
  getLengthInBits: function () {
    return this.length;
  },
  /**
   * @param {boolean} bit
   */
  putBit: function (bit) {
    var bufIndex = Math.floor(this.length / 8);
    if (this.buffer.length <= bufIndex) {
      this.buffer.push(0);
    }
    if (bit) {
      const bufferAtIndex = this.buffer[bufIndex];
      if (bufferAtIndex === undefined) {
        throw new Error('buffer index out of bounds');
      }
      this.buffer[bufIndex] = bufferAtIndex | (0x80 >>> this.length % 8);
    }
    this.length++;
  },
};
var QRCodeLimitLength = [
  [17, 14, 11, 7],
  [32, 26, 20, 14],
  [53, 42, 32, 24],
  [78, 62, 46, 34],
  [106, 84, 60, 44],
  [134, 106, 74, 58],
  [154, 122, 86, 64],
  [192, 152, 108, 84],
  [230, 180, 130, 98],
  [271, 213, 151, 119],
  [321, 251, 177, 137],
  [367, 287, 203, 155],
  [425, 331, 241, 177],
  [458, 362, 258, 194],
  [520, 412, 292, 220],
  [586, 450, 322, 250],
  [644, 504, 364, 280],
  [718, 560, 394, 310],
  [792, 624, 442, 338],
  [858, 666, 482, 382],
  [929, 711, 509, 403],
  [1003, 779, 565, 439],
  [1091, 857, 611, 461],
  [1171, 911, 661, 511],
  [1273, 997, 715, 535],
  [1367, 1059, 751, 593],
  [1465, 1125, 805, 625],
  [1528, 1190, 868, 658],
  [1628, 1264, 908, 698],
  [1732, 1370, 982, 742],
  [1840, 1452, 1030, 790],
  [1952, 1538, 1112, 842],
  [2068, 1628, 1168, 898],
  [2188, 1722, 1228, 958],
  [2303, 1809, 1283, 983],
  [2431, 1911, 1351, 1051],
  [2563, 1989, 1423, 1093],
  [2699, 2099, 1499, 1139],
  [2809, 2213, 1579, 1219],
  [2953, 2331, 1663, 1273],
];

function isSupportCanvas() {
  return typeof CanvasRenderingContext2D != 'undefined';
}

var svgDrawer = (function () {
  /**
   * @param {Element} el
   * @param {QRCodeOptions} htOption
   */
  var Drawing = function (el, htOption) {
    this._el = el;
    this._htOption = htOption;
  };

  /**
   * @param {QRCodeModel} oQRCode
   */
  Drawing.prototype.draw = function (oQRCode) {
    var _htOption = this._htOption;
    var _el = this._el;
    var nCount = oQRCode.getModuleCount();
    var nWidth = Math.floor(_htOption.width / nCount);
    var nHeight = Math.floor(_htOption.height / nCount);

    this.clear();

    /**
     * @param {string} tag
     * @param {Record<string, string>} attrs
     * @returns {SVGElement}
     */
    function makeSVG(tag, attrs) {
      var el = document.createElementNS('http://www.w3.org/2000/svg', tag);
      for (var k in attrs) {
        if (attrs.hasOwnProperty(k)) {
          const value = attrs[k];
          if (value !== undefined) {
            el.setAttribute(k, value);
          }
        }
      }
      return el;
    }

    var svg = makeSVG('svg', {
      viewBox: '0 0 ' + String(nCount) + ' ' + String(nCount),
      width: '100%',
      height: '100%',
      fill: _htOption.colorLight,
    });
    svg.setAttributeNS('http://www.w3.org/2000/xmlns/', 'xmlns:xlink', 'http://www.w3.org/1999/xlink');
    _el.appendChild(svg);

    svg.appendChild(makeSVG('rect', { fill: _htOption.colorLight, width: '100%', height: '100%' }));
    svg.appendChild(makeSVG('rect', { fill: _htOption.colorDark, width: '1', height: '1', id: 'template' }));

    for (var row = 0; row < nCount; row++) {
      for (var col = 0; col < nCount; col++) {
        if (oQRCode.isDark(row, col)) {
          var child = makeSVG('use', { x: String(col), y: String(row) });
          child.setAttributeNS('http://www.w3.org/1999/xlink', 'href', '#template');
          svg.appendChild(child);
        }
      }
    }
  };
  Drawing.prototype.clear = function () {
    while (this._el.hasChildNodes() && this._el.lastChild) this._el.removeChild(this._el.lastChild);
  };

  /**
   * @type {null|(() => void)}
   */
  Drawing.prototype.makeImage = null;
  return Drawing;
})();

var useSVG = document.documentElement.tagName.toLowerCase() === 'svg';

// Drawing in DOM by using Table tag
var Drawing = useSVG
  ? svgDrawer
  : !isSupportCanvas()
  ? (function () {
      /**
       * @param {Element} el
       * @param {QRCodeOptions} htOption
       */
      var Drawing = function (el, htOption) {
        this._el = el;
        this._htOption = htOption;
      };

      /**
       * @param {QRCodeModel} oQRCode
       */
      Drawing.prototype.draw = function (oQRCode) {
        var _htOption = this._htOption;
        var _el = this._el;
        var nCount = oQRCode.getModuleCount();
        var nWidth = Math.floor(_htOption.width / nCount);
        var nHeight = Math.floor(_htOption.height / nCount);
        var aHTML = ['<table style="border:0;border-collapse:collapse;">'];

        for (var row = 0; row < nCount; row++) {
          aHTML.push('<tr>');

          for (var col = 0; col < nCount; col++) {
            aHTML.push(
              '<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' +
                nWidth +
                'px;height:' +
                nHeight +
                'px;background-color:' +
                (oQRCode.isDark(row, col) ? _htOption.colorDark : _htOption.colorLight) +
                ';"></td>'
            );
          }

          aHTML.push('</tr>');
        }

        aHTML.push('</table>');
        _el.innerHTML = aHTML.join('');

        // Fix the margin values as real size.
        var elTable = _el.childNodes[0];
        if (elTable instanceof HTMLElement) {
          var nLeftMarginTable = (_htOption.width - elTable.offsetWidth) / 2;
          var nTopMarginTable = (_htOption.height - elTable.offsetHeight) / 2;

          if (nLeftMarginTable > 0 && nTopMarginTable > 0) {
            elTable.style.margin = nTopMarginTable + 'px ' + nLeftMarginTable + 'px';
          }
        }
      };

      Drawing.prototype.clear = function () {
        this._el.innerHTML = '';
      };

      /**
       * @type {null|(() => void)}
       */
      Drawing.prototype.makeImage = null;
      return Drawing;
    })()
  : (function () {
      // Drawing in Canvas
      function onMakeImage() {
        this._elImage.src = this._elCanvas.toDataURL('image/png');
        this._elImage.style.display = 'block';
        this._elCanvas.style.display = 'none';
      }

      /**
       * Drawing QRCode by using canvas
       *
       * @constructor
       * @param {HTMLElement} el
       * @param {QRCodeOptions} htOption
       */
      var Drawing = function (el, htOption) {
        this._bIsPainted = false;

        this._htOption = htOption;
        this._elCanvas = document.createElement('canvas');
        this._elCanvas.width = htOption.width;
        this._elCanvas.height = htOption.height;
        el.appendChild(this._elCanvas);
        this._el = el;
        this._oContext = this._elCanvas.getContext('2d');
        if (!this._oContext) {
          throw new Error('Canvas is not supported');
        }
        this._bIsPainted = false;
        this._elImage = document.createElement('img');
        this._elImage.alt = htOption.alt;
        this._elImage.style.display = 'none';
        this._el.appendChild(this._elImage);
        /** @type {boolean|null} */
        this._bSupportDataURI = null;
      };

      /**
       * Draw the QRCode
       *
       * @param {QRCodeModel} oQRCode
       */
      Drawing.prototype.draw = function (oQRCode) {
        var _elImage = this._elImage;
        var _oContext = this._oContext;
        var _htOption = this._htOption;

        var nCount = oQRCode.getModuleCount();
        var nWidth = _htOption.width / nCount;
        var nHeight = _htOption.height / nCount;
        var nRoundedWidth = Math.round(nWidth);
        var nRoundedHeight = Math.round(nHeight);

        _elImage.style.display = 'none';
        this.clear();

        for (var row = 0; row < nCount; row++) {
          for (var col = 0; col < nCount; col++) {
            var bIsDark = oQRCode.isDark(row, col);
            var nLeft = col * nWidth;
            var nTop = row * nHeight;
            _oContext.strokeStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
            _oContext.lineWidth = 1;
            _oContext.fillStyle = bIsDark ? _htOption.colorDark : _htOption.colorLight;
            _oContext.fillRect(nLeft, nTop, nWidth, nHeight);

            // Anti-aliasing prevention processing
            _oContext.strokeRect(Math.floor(nLeft) + 0.5, Math.floor(nTop) + 0.5, nRoundedWidth, nRoundedHeight);

            _oContext.strokeRect(Math.ceil(nLeft) - 0.5, Math.ceil(nTop) - 0.5, nRoundedWidth, nRoundedHeight);
          }
        }

        this._bIsPainted = true;
      };

      /**
       * Make the image from Canvas if the browser supports Data URI.
       */
      Drawing.prototype.makeImage = function () {
        if (this._bIsPainted) {
          this.safeSetDataURI.call(this, onMakeImage);
        }
      };

      /**
       * Return whether the QRCode is painted or not
       *
       * @return {Boolean}
       */
      Drawing.prototype.isPainted = function () {
        return this._bIsPainted;
      };

      Drawing.prototype.clear = function () {
        this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height);
        this._bIsPainted = false;
      };

      /**
       * @private
       * @param {Number} nNumber
       */
      Drawing.prototype.round = function (nNumber) {
        if (!nNumber) {
          return nNumber;
        }

        return Math.floor(nNumber * 1000) / 1000;
      };

      /**
       * Check whether the user's browser supports Data URI or not
       *
       * @param {Function} fSuccess Occurs if it supports Data URI
       * @param {Function} fFail Occurs if it doesn't support Data URI
       */
      Drawing.prototype.safeSetDataURI = function (fSuccess, fFail) {
        var self = this;
        self._fFail = fFail;
        self._fSuccess = fSuccess;

        // Check it just once
        if (self._bSupportDataURI === null) {
          var el = document.createElement('img');
          var fOnError = function () {
            self._bSupportDataURI = false;

            if (self._fFail) {
              self._fFail.call(self);
            }
          };
          var fOnSuccess = function () {
            self._bSupportDataURI = true;

            if (self._fSuccess) {
              self._fSuccess.call(self);
            }
          };

          el.onabort = fOnError;
          el.onerror = fOnError;
          el.onload = fOnSuccess;
          el.src =
            'data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg=='; // the Image contains 1px data.
          return;
        } else if (self._bSupportDataURI === true && self._fSuccess) {
          self._fSuccess.call(self);
        } else if (self._bSupportDataURI === false && self._fFail) {
          self._fFail.call(self);
        }
      };

      return Drawing;
    })();

/**
 * Get the type by string length
 *
 * @private
 * @param {String} sText
 * @param {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} nCorrectLevel
 * @return {Number} type
 */
function getTypeNumber(sText, nCorrectLevel) {
  var nType = 1;
  var length = getUTF8Length(sText);

  for (var i = 0, len = QRCodeLimitLength.length; i <= len; i++) {
    const QRCodeLimitLengthAtIndex = QRCodeLimitLength[i];
    if (QRCodeLimitLengthAtIndex === undefined) {
      throw new Error('QRCodeLimitLength index out of bounds');
    }

    /** @type {number|undefined} */
    var nLimit = 0;

    switch (nCorrectLevel) {
      case QRErrorCorrectLevel.L:
        nLimit = QRCodeLimitLengthAtIndex[0];
        break;
      case QRErrorCorrectLevel.M:
        nLimit = QRCodeLimitLengthAtIndex[1];
        break;
      case QRErrorCorrectLevel.Q:
        nLimit = QRCodeLimitLengthAtIndex[2];
        break;
      case QRErrorCorrectLevel.H:
        nLimit = QRCodeLimitLengthAtIndex[3];
        break;
    }

    if (nLimit === undefined) {
      throw new Error('QRCodeLimitLength index out of bounds');
    }

    if (length <= nLimit) {
      break;
    } else {
      nType++;
    }
  }

  if (nType > QRCodeLimitLength.length) {
    throw new Error('Too long data');
  }

  return nType;
}

/**
 * @param {string} sText
 * @returns {number}
 */
function getUTF8Length(sText) {
  const replacedText = encodeURI(sText)
    .toString()
    .replace(/\%[0-9a-fA-F]{2}/g, 'a');

  // If the encoded and replaced text length differs from original,
  // it means we have non-ASCII characters, so add 3 bytes for UTF-8 BOM
  const bomLength = replacedText.length !== sText.length ? 3 : 0;

  return replacedText.length + bomLength;
}

/**
 * @param {String} sText link data
 */
QRCode.prototype.makeCode = function (sText) {
  this._oQRCode = new QRCodeModel(getTypeNumber(sText, this._htOption.correctLevel), this._htOption.correctLevel);
  this._oQRCode.addData(sText);
  this._oQRCode.make();
  this._el.title = sText;
  this._oDrawing.draw(this._oQRCode);
  this.makeImage();
};

/**
 * Make the Image from Canvas element
 * - It occurs automatically
 */
QRCode.prototype.makeImage = function () {
  // The makeImage method exists only in the canvas-based Drawing implementation but not in the SVG or table-based implementations
  const drawing = this._oDrawing;
  if (typeof drawing.makeImage == 'function') {
    drawing.makeImage();
  }
};

QRCode.prototype.clear = function () {
  this._oDrawing.clear();
};

/**
 * @name QRCode.CorrectLevel
 */
QRCode.CorrectLevel = QRErrorCorrectLevel;

/**
 * @class QRCode
 * @constructor
 * @example
 * new QRCode(document.getElementById("test"), "http://jindo.dev.naver.com/collie");
 *
 * @example
 * var oQRCode = new QRCode("test", {
 *    text : "http://naver.com",
 *    width : 128,
 *    height : 128
 * });
 *
 * oQRCode.clear(); // Clear the QRCode.
 * oQRCode.makeCode("http://map.naver.com"); // Re-create the QRCode.
 *
 * @typedef {Object} QRCodeOptions
 * @property {string} text  QRCode link data
 * @property {number} width
 * @property {number} height
 * @property {string} alt
 * @property {number} typeNumber
 * @property {string} colorDark
 * @property {string} colorLight
 * @property {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} correctLevel
 * @property {boolean} useSVG
 *
 * QRCodeOptions, but with properties optional so its easier to pass in only the properties you want to change
 * @typedef {Object} QRCodePartialOptions
 * @property {string} [text]  QRCode link data
 * @property {number} [width]
 * @property {number} [height]
 * @property {string} [alt]
 * @property {number} [typeNumber]
 * @property {string} [colorDark]
 * @property {string} [colorLight]
 * @property {typeof QRErrorCorrectLevel[keyof typeof QRErrorCorrectLevel]} [correctLevel]
 * @property {boolean} [useSVG]
 * @param {HTMLElement|String} el target element or 'id' attribute of element.
 * @param {QRCodePartialOptions|String} vOption
 */
export function QRCode(el, vOption) {
  /**
   * @type {QRCodeOptions}
   */
  const defaultOptions = {
    text: '',
    alt: '',
    width: 256,
    height: 256,
    typeNumber: 4,
    colorDark: '#000000',
    colorLight: '#ffffff',
    correctLevel: QRErrorCorrectLevel.H,
    useSVG: false,
  };

  /**
   * @type {QRCodeOptions}
   */
  this._htOption = {
    ...defaultOptions,
    ...(typeof vOption === 'string' ? { text: vOption } : vOption),
  };

  if (typeof el == 'string') {
    const element = document.getElementById(el);
    if (!element) {
      throw new Error(`Element with id ${el} not found`);
    }
    el = element;
  }

  if (this._htOption.useSVG) {
    Drawing = svgDrawer;
  }

  this._el = el;
  this._oQRCode = null;
  this._oDrawing = new Drawing(this._el, this._htOption);

  if (this._htOption.text) {
    this.makeCode(this._htOption.text);
  }
}
