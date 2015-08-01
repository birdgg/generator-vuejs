var browserSync = require('browser-sync').create();
var gulp        = require('gulp');

gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: "./build/"
		}
	});
});