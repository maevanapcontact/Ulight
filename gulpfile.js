let gulp = require('gulp');
let sass = require('gulp-sass');
 
gulp.task('sass', () => {
  return gulp.src('page/assets/sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('page/assets/css'))
});
 
gulp.task('watch',['sass'], () => {
  gulp.watch('page/assets/sass/**/*.scss',['sass']);
});
gulp.task('default',['watch','sass']);
