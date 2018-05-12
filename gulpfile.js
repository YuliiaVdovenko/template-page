
var gulp = require('gulp');
var sass = require('gulp-sass');
 
gulp.task('style', function () {
  gulp.src('./style/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'))
});
 
gulp.task('watch', function () {
  gulp.watch('./style/**/*.scss', ['style']);
});
