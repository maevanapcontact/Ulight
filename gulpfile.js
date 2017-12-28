// REQUIRES
const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();


// TASKS

// Browser Sync task
gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'src/assets'
    },
  })
})

// Sass task
gulp.task('sass', () => {
  return gulp.src('src/assets/scss/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('src/assets/css'))
    .pipe(browserSync.reload({
      stream: true
    }))
});

// Watch tasks
gulp.task('watch', ['browserSync', 'sass'], () => {
  gulp.watch('src/assets/scss/**/*.scss', ['sass']);
  gulp.watch('src/assets/js/**/*.js', browserSync.reload);
  gulp.watch('src/assets/*.html', browserSync.reload);
});