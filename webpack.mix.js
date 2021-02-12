const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('./src/index.js', './http/index.js').react()
   .postCss('./src/index.css', './http/index.css', [
      require('tailwindcss'),
   ])
   .copy('./src/index.php', './http/index.php')
   .copyDirectory('./src/images', './http/images')