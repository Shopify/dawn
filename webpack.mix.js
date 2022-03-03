let mix = require('laravel-mix');

// mix.js('src/app.js', 'dist').setPublicPath('assets');
// mix.js('src/form.js', 'dist').setPublicPath('dist');

mix.js('src/js/app.js', 'assets').vue(2)
    .postCss('src/css/app.css', 'assets', [])
;