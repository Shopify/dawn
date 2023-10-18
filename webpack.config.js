const {VueLoaderPlugin} = require("vue-loader");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');
// 'production' か 'development' を指定
const MODE = "development";

// ソースマップの利用有無(productionのときはソースマップを利用しない)
const enabledSourceMap = MODE === "development";

module.exports = {
  // モード値を production に設定すると最適化された状態で、
  // development に設定するとソースマップ有効でJSファイルが出力される
  mode: MODE,
  output: {
    path: path.resolve(__dirname, 'assets'),
    filename: 'main.js',
  },

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
          'postcss-loader',
        ],
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.s[ac]ss$/i, // 対象となるファイルの拡張子
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: "css-loader",
            options: {
              // オプションでCSS内のurl()メソッドの取り込みを禁止する
              url: false,
              sourceMap: enabledSourceMap,
              importLoaders: 3
            }
          },
          {
            loader: "sass-loader",
            options: {
              // vuetify
              implementation: require('sass'),
              sourceMap: enabledSourceMap
            },
          },
        ],
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: "vue/dist/vue.esm.js",
    },
    extensions: ["*", ".js", ".vue", ".json"],
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin()
  ],
  // ES5(IE11等)向けの指定
  target: ["web", "es5"],
};
