/**
 * Created by banYing on 2017/6/12.
 */
var gulp = require('gulp'),

  less = require('gulp-less'),

  cssMin = require('gulp-minify-css');

gulp.task('Less', function () {
  gulp.src('src/assets/style/newStyle.less')
    .pipe(less())
    .pipe(cssMin())
    .pipe(gulp.dest('src/assets/style'));
});

gulp.task('autoCss', function () {
  gulp.watch('src/assets/style/*.less', ['Less'])
});


gulp.task('default', ['Less', 'autoCss']);
