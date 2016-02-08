/**
 * Created by timur on 2/7/16.
 */

const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
var minify = require('gulp-minify');

gulp.task('build', () => {
  return gulp.src('app/*.js')
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(concat('domfinity.js'))
    .pipe(minify())
    .pipe(gulp.dest('dist'));
});