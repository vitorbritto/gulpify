/******************************************************************
4. VIEW TASK
   path: scr/js/*.js
   save to: public/js/main.js
   dependence: gulp-jade
*******************************************************************/

var gulp = require('gulp'),
    config = require('../gulp.conf.js'),
    jade = require('gulp-jade');

gulp.task(config.tasks.jadecompile, function() {
	return gulp.src(config.src.views + '**/*.jade')
		.pipe(jade({
			pretty: true
		}))
		.pipe(gulp.dest(config.dist.main));
});
