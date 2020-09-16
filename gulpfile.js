const gulp = require('gulp');
const browserSync = require('browser-sync');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const rename = require('gulp-rename');

// Copies static assets to build dir
function copy() {
  return gulp.src([
    'src/*.css'
  ])
  .pipe(gulp.dest('build'));
}

// Serves from build dir and refreshes browser on changes
function serve() {
  return browserSync.init({
    server: '.',
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
  .pipe(gulp.dest('build'));
}

// Rebuilds JS on changes
function watch() {
  gulp.watch('src/*.js', processJs);
}

gulp.task('watch', watch);
gulp.task('processJs', processJs);
gulp.task('copy', copy);
gulp.task('buildAndServe', gulp.series(copy,processJs,
  gulp.parallel(serve, watch)));

