///////////////////////////////////////////
// SCRIPT TASK                           //
///////////////////////////////////////////


var gulp    = require('gulp'),
    config  = require('../gulp.conf.js'),
    uglify  = require('gulp-uglify'),
    jshint  = require('gulp-jshint'),
    rename  = require('gulp-rename'),
    concat  = require('gulp-concat'),
    stylish = require('jshint-stylish');

// LINT SCRIPTS
gulp.task(config.tasks.jslint, function() {

    return gulp.src(config.src.scripts)
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(gulp.dest(config.dist.scripts));

});

// MINIFY AND CONCAT SCRIPTS
gulp.task(config.tasks.jsmin, function() {
    return gulp.src(config.dist.scripts + 'main.js')
        .pipe(uglify())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(config.dist.scripts));
});

// MINIFY AND CONCAT OTHER SCRIPTS
// gulp.task(config.tasks.jsconcat, function() {
//
//     gulp.src(config.paths.js)
//         .pipe(concat('all.min.js'))
//         .pipe(uglify())
//         .pipe(rename({suffix: '.min'}))
//         .pipe(gulp.dest(config.pathsMin.js));
//
// });
