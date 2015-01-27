///////////////////////////////////////////
// SYNC TASK                             //
///////////////////////////////////////////

var gulp    = require('gulp'),
    config  = require('../gulp.conf.js'),
    sync    = require('browser-sync');

gulp.task(config.tasks.browsersync, function() {

    sync(config.syncConfig, function (err, bs) {
	    if (!err) {
	        console.log('BrowserSync is ready!');
	    }
	});

});
