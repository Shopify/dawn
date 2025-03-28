const path = require('path');
const fs = require('fs');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Находим все SCSS файлы в папке src/scss
const scssDirectory = path.resolve(__dirname, 'src/scss');
const scssFiles = fs.readdirSync(scssDirectory).filter((file) => file.endsWith('.scss'));

module.exports = {
  mode: 'production',
  entry: scssFiles.reduce((entries, file) => {
    const name = path.parse(file).name; // Имя файла без расширения
    entries[name] = path.resolve(scssDirectory, file); // Создаём точки входа
    return entries;
  }, {}), // Динамически создаём точки входа для каждого SCSS файла
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: '[name].js', // Генерация JS файла отключена для SCSS, но это нужно для корректной работы Webpack
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, // Извлекаем CSS в отдельный файл
          'css-loader', // Преобразуем CSS в CommonJS
          'sass-loader', // Компилируем SCSS в CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css', // Каждый SCSS файл компилируется в одноимённый CSS
    }),
  ],
};
