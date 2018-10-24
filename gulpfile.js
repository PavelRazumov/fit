
var gulp = require('gulp'),
	less = require('gulp-less'),
	inject = require('gulp-inject'),
	browserSync = require('browser-sync').create(),
	svgstore = require('gulp-svgstore'),
	svgmin = require('gulp-svgmin'),
	debug = require('gulp-debug'),
	concat = require('gulp-concat');

gulp.task('less', function() {
	return gulp.src('assets/style/**/*.less')
	.pipe(less())
	.pipe(debug({title: "All less to one"}))
	.pipe(concat("main.css"))
	.pipe(gulp.dest("assets/styles"))
	.pipe(browserSync.stream());
});


gulp.task('serve', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("assets/**/*.less", ['less']);
    //Событие при изменении
    gulp.watch("*.html").on('change', browserSync.reload);
     gulp.watch("assets/styles/*.css").on('change', browserSync.reload);
});

gulp.task('default', ['less', 'serve']);

