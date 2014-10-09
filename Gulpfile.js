// Gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  browserify = require('gulp-browserify'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  rename = require('gulp-rename');

gulp.task('lint', function () {
  gulp.src('./**/*.js')
    .pipe(jshint())
});

gulp.task('develop', ['browser'], function () {
  nodemon({ script: 'server', ext: 'html js' })
    .on('change', ['browser'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('scripts', ['lint'], function() {
  gulp.src(['client/browser/js/main.js'])
    .pipe(browserify())
    .pipe(gulp.dest('./.build/js'));
});

gulp.task('copy', function() {
  gulp.src(['client/browser/*.html'])
    .pipe(gulp.dest('./.build'));
});

gulp.task('js', function () {
  return gulp.src('client/browser/js/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
});

gulp.task('less', function(){
  return gulp.src('client/browser/less/**.less')
    .pipe(less())
    .pipe(rename('style.css'))
    .pipe(gulp.dest('./.build/css'));
});

gulp.task('watch', function () {
  gulp.watch('client/browser/js/*.js', ['browser']);
});

gulp.task('browser', ['scripts', 'less', 'copy']);