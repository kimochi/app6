// webpack.config.js
var Encore = require('@symfony/webpack-encore');

Encore
    // directory where compiled assets will be stored
    .setOutputPath('public/build/')
    // public path used by the web server to access the output path
    .setPublicPath('/build')
    .cleanupOutputBeforeBuild()
    .enableSourceMaps(!Encore.isProduction())



    .addEntry('js/app', './node_modules/bootstrap/dist/js/bootstrap.min.js'),
    './node_modules/holderjs/holder.min.js',
    './node_modules/popper.js/dist/popper.min.js',
    './node_modules/jquery/dist/jquery.slim.js'
    .addStyleEntry('css/app', './node_modules/bootstrap/dist/css/bootstrap.min.css')

// ...
;

module.exports = Encore.getWebpackConfig();
// ...
