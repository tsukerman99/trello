'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
 
gulp.task('sass', function () {
	return gulp.src('./sass/**/*.scss')
		.pipe(concat('style.css'))
		.pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
		.pipe(gulp.dest('./css'));
});
 
gulp.task('sass:watch', function () {
	gulp.watch('./sass/**/*.scss', ['sass']);
});