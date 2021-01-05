'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var sourcemaps = require('gulp-sourcemaps');
var autoprefixer = require('autoprefixer');
var cssmin = require('gulp-cssmin');
var rename = require('gulp-rename');
 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init()) //{loadMaps: false}
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer({ remove: false })]))
    .pipe(cssmin())
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('.'));
});
 
gulp.task('watch', function () {
  gulp.watch('sass/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series(['sass', 'watch']));

//gulp.task('default', ['sass', 'watch']);

