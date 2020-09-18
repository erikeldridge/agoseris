const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Serves from build dir and refreshes browser on changes
function serve() {
  return browserSync.init({
    server: {
      baseDir: '.',
      routes: {
        '/agoseris/': '.'
      }
    },
    open: false,
    port: 3000
  });
}

// Runs JS source through Babel
function processJs() {
  return gulp.src('src/*.js')
  .pipe(babel({
      presets: ['@babel/env']
  }))
  .pipe(uglify())
  .pipe(rename({
    suffix: '.min'
  }))
  .pipe(gulp.dest('app'));
}

// Rebuilds JS on changes
function watch() {
  gulp.watch('src/*.js', processJs);
}

gulp.task('watch', watch);
gulp.task('processJs', processJs);
gulp.task('buildAndServe', gulp.series(processJs,
  gulp.parallel(serve, watch)));

