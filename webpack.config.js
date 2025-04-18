const path = require('path');
const fs = require('fs');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const getJSFilesByFolder = (baseDir) => {
  const entries = {};
  const folders = fs.readdirSync(baseDir).filter((folder) => fs.statSync(path.join(baseDir, folder)).isDirectory());

  folders.forEach((folder) => {
    const folderPath = path.join(baseDir, folder);
    const jsFiles = fs
      .readdirSync(folderPath)
      .filter((file) => file.endsWith('.js'))
      .map((file) => './' + path.join(folderPath, file).replace(/\\/g, '/'));

    if (jsFiles.length > 0) {
      entries[folder] = jsFiles;
    }
  });

  return entries;
};

const jsEntries = getJSFilesByFolder('./src');

module.exports = {
  mode: 'production',
  entry: jsEntries,
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js',
  },
  plugins: [
    // new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: '[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
    ],
  },
};
