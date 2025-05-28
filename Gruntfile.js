const fs = require('fs');
const path = require('path');

module.exports = function (grunt) {
  const srcDir = 'src';
  const browserifyTargets = {};
  const files = fs.readdirSync(srcDir);

  files.forEach((file) => {
    if (file.endsWith('.js')) {
      const baseName = path.basename(file, '.js');
      browserifyTargets[`assets/${baseName}.bundle.js`] = [`${srcDir}/${file}`];
    }
  });

  grunt.initConfig({
    browserify: {
      dist: {
        files: browserifyTargets,
        options: {
          transform: [['babelify', { presets: ['@babel/preset-env'] }]],
          browserifyOptions: {
            debug: false,
          },
        },
      },
    },
    watch: {
      scripts: {
        files: ['src/*.js'],
        tasks: ['browserify'],
        options: {
          spawn: false,
        },
      },
    },
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['browserify']);
};
