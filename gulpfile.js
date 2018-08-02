var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default',['sass','sass:watch']);


gulp.task('sass', function () {
  return gulp.src('sass/**/*.sass')
    //.pipe(sass().on('error', sass.logError))
    .pipe(sass())
    .pipe(gulp.dest('css'));
});


gulp.task('sass:watch', function () {
  gulp.watch('sass/**/*.sass', ['sass']);
});


