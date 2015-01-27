///////////////////////////////////////////
// TASK CONFIG                           //
///////////////////////////////////////////

'use strict';

var pkg = require('./package');

module.exports = {

    // INITIAL CONFIGURATION

    // Folders
    modules     : 'app/scripts/modules',
    requires    : 'app/scripts/requires',
    test: {
        main    : 'spec',
        helpers : 'spec/helpers',
        modules : 'spec/modules'
    },

    src: {
        main    : 'src',
        styles  : 'src/styles/*.scss',
        scripts : 'src/scripts/*.js',
        images  : 'src/images/*.{png,jpg,gif}',
        fonts   : 'src/fonts'
    },
    dist: {
        main    : 'public',
        styles  : 'public/styles/',
        scripts : 'public/scripts/',
        images  : 'public/images/*',
        fonts   : 'public/fonts/'
    },

    // TASKS CONFIGURATION
    tasks: {
        imagemin    : 'imagemin',
        jslint      : 'jslint',
        jsmin       : 'jsmin',
        jsconcat    : 'jsconcat',
        styles      : 'styles',
        cssmin      : 'cssmin',
        cssconcat   : 'cssconcat',
        html        : 'html',
        images      : 'images',
        browsersync : 'browsersync',
        zip         : 'zip'
    },

    syncConfig: {
        files: ['styles/*.css','scripts/*.js', 'public/*.html', 'public/images/*.{png,jpg,gif}'],
        server: {
            baseDir: 'public',
            index: 'index.html'
        }
    }
}
