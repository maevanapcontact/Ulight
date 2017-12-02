let gulp = require('gulp');
let sass = require('gulp-sass');
let rename = require('gulp-rename');
let browserSync = require('browser-sync').create();

gulp.task('sass', () => {
  return gulp.src('scss/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css/'))
});

gulp.task('rename', () => {
  return gulp.src('scss/main.scss')
     .pipe(sass())
     .pipe(rename('framework.css'))
     .pipe(gulp.dest('css/'));
});

gulp.task('reload', () => {

    browserSync.init({
        server: './'
    });

    gulp.watch('*.html').on('change', browserSync.reload);
    gulp.watch('css/*.css').on('change', browserSync.reload);
    gulp.watch('js/*.js').on('change', browserSync.reload);
});

gulp.task('watch', () =>{
  gulp.watch('scss/**/*.scss',['rename']);
});

gulp.task('default', ['watch','rename','reload']);