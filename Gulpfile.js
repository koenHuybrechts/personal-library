// Gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  browserify = require('gulp-browserify');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
});

gulp.task('develop', function () {
  nodemon({ script: 'server', ext: 'html js' })
    .on('change', ['lint'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('scripts', function() {
  gulp.src(['client/browser/js/main.js'])
    .pipe(browserify())
    .pipe(gulp.dest('./.build/js'));
});

gulp.task('copy', function() {
  gulp.src(['client/browser/index.html'])
    .pipe(gulp.dest('./.build'));
});

gulp.task('browser', ['scripts', 'copy']);