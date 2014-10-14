// Gulpfile.js
var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  jshint = require('gulp-jshint'),
  browserify = require('gulp-browserify'),
  watch = require('gulp-watch'),
  less = require('gulp-less'),
  rename = require('gulp-rename'),
  del = require('del');

gulp.task('develop', ['browser'], function () {
  nodemon({ script: 'server', ext: 'html js', ignore: ['./client'] })
    .on('start', ['watch'])
    .on('change', ['clean'])
    .on('restart', function () {
      console.log('restarted!')
    })
});

gulp.task('scripts', ['js'], function() {
  gulp.src(['client/browser/js/main.js'])
    .pipe(browserify())
    .pipe(gulp.dest('./.build/js'));
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

gulp.task('copy', function() {
  gulp.src(['client/browser/*.html'])
    .pipe(gulp.dest('./.build'));
  gulp.src(['bower_components/bootstrap/dist/fonts/*'])
    .pipe(gulp.dest('./.build/fonts'));
});

gulp.task('watch', function () {
  gulp.watch('client/browser/*.html', ['copy']);
  gulp.watch('client/browser/**', ['browser']);
});

gulp.task('clean', function(cb) {
  // You can use multiple globbing patterns as you would with `gulp.src`
  del(['./.build'], cb);
});

gulp.task('browser', ['scripts', 'less', 'copy']);