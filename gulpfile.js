const gulp = require('gulp');
const browserSync = require('browser-sync');

function copy() {
  return gulp.src([
    'src/*.html',
    'src/*.css',
    'src/*.js'
  ])
  .pipe(gulp.dest('build'));
}

function serve() {
  return browserSync.init({
    server: 'build',
    open: false,
    port: 3000
  });
}

gulp.task('copy', copy);
gulp.task('buildAndServe', gulp.series(copy,serve));

