// Gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  del = require('del'),
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

gulp.task('clean', function(cb) {
  del(['./.build'], cb);
});

gulp.task('scripts', function() {
  gulp.src(['client/browser/main.js'])
    .pipe(browserify())
    .pipe(gulp.dest('./.build/js'))
});