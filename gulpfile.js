'use strict';

///////////////////////////////////////////
// DEPENDENCIES                          //
///////////////////////////////////////////

var gulp        = require('gulp'),
    config      = require('./gulp.conf.js'),
    header      = require('gulp-header'),
    browserSync = require('browser-sync'),
    reload      = browserSync.reload,
    requireDir  = require('require-dir'),
    dir         = requireDir('./tasks');


///////////////////////////////////////////
// CUSTOM TASKS                          //
///////////////////////////////////////////

gulp.task('build', [config.tasks.styles, config.tasks.cssmin, config.tasks.jsmin, config.tasks.imagemin,config.tasks.zip]);

gulp.task('start', [config.tasks.styles, config.tasks.imagemin, config.tasks.jslint, config.tasks.jadecompile, config.tasks.browsersync]);

gulp.task('default', ['start'], function() {
    gulp.watch('src/styles/**/*.scss', [config.tasks.styles, reload]);
    gulp.watch(config.src.scripts, [config.tasks.jslint, reload]);
    gulp.watch(config.src.views, [config.tasks.jadecompile, reload]);
    gulp.watch('src/images/*.{png,jpg,gif}', [config.tasks.imagemin, reload]);
    gulp.watch('public/*.html', reload);
});
