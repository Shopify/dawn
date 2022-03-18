let mix = require("laravel-mix");

// mix.js('src/app.js', 'dist').setPublicPath('assets');
// mix.js('src/form.js', 'dist').setPublicPath('dist');
mix.webpackConfig((webpack) => {
  return {
    stats: {
      children: true,
    },
    module: {
      rules: [
        {
          test: /(\.(png|jpe?g|gif|webp)$|^((?!font).)*\.svg$)/,
          use: [
            {
              loader: require.resolve("file-loader"),
              options: {
                esModule: false,
              },
            },
          ],
        },
      ],
    },
  };
});

mix
  .js("src/js/app.js", "assets")
  .vue(2)
  .postCss("src/css/app.css", "assets", []);
