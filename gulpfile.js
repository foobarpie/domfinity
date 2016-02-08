/**
 * Created by timur on 2/7/16.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var minify = require('gulp-minify');
var jasmine = require('gulp-jasmine');

gulp.task('build', () => {
  return gulp.src(['src/*.js'], ['spec/*.js'])
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('domfinity.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});

gulp.task('test', () => {
  return gulp.src('spec/*.js')
    // gulp-jasmine works on filepaths so you can't have any plugins before it
    .pipe(jasmine());
});