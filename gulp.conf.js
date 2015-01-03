/****************************************************************
  FILE DESTINATIONS (RELATIVE TO ASSESTS FOLDER)
****************************************************************/
var pkg = require('./package');

module.exports = {

    // ---------------------------------------------------------------------------------------
    // INITIAL CONFIGURATION
    // ---------------------------------------------------------------------------------------

    // Setup
    init: {

        // Select a Template Engine     - OPTIONS: none, jade, handlebars
        view: 'none',

        // Select a preprocessor        - OPTIONS: none, compass, stylus, less
        style: 'stylus',

        // Select a JavaScript module   - OPTIONS: none, umd, requirejs, browserify
        module: 'none',

        // Select a deploy method       - OPTIONS: none, ftp-deploy, rsync
        deploy: 'none',

        // Select a unit test tool      - OPTIONS: none, mocha, jasmine, qunit
        test: 'none',

        // Would you like to use Karma?
        karma: true,

        // Select a development side   - OPTIONS: client, server, both
        side: 'client'
    },

    // Folders
    modules: 'app/scripts/modules',
    requires: 'app/scripts/requires',
    test: {
        main:    'spec',
        helpers: 'spec/helpers',
        modules: 'spec/modules'
    },

    src: {
        main    : 'src',
        styles  : 'src/styles/*.scss',
        scripts : 'src/scripts/*.js',
        imgs    : 'src/imgs/*.{png,jpg,gif}',
        fonts   : 'src/fonts'
    },
    dist: {
        main    : 'public',
        styles  : 'public/styles/',
        scripts : 'public/scripts/',
        imgs    : 'public/imgs/*',
        fonts   : 'public/fonts/'
    },

    // -------------------------------------------------------------------------------------
    // TASKS CONFIGURATION
    // -------------------------------------------------------------------------------------

    tasks: {
        imagemin    : 'imagemin',
        jslint      : 'jslint',
        jsmin       : 'jsmin',
        jsconcat    : 'jsconcat',
        styles      : 'styles',
        cssmin      : 'cssmin',
        cssconcat   : 'cssconcat',
        html        : 'html',
        imgs        : 'imgs',
        browsersync : 'browsersync',
        zip         : 'zip'
    },

    // Browser Sync
    syncConfig: {
        files: ['styles/*.css','scripts/*.js', 'public/*.html', 'public/imgs/*.{png,jpg,gif}'],
        server: {
            baseDir: 'public',
            index: 'index.html'
        }
    }
}
