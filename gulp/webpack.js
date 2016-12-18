var gulp = require('gulp'),
webpack = require('gulp-webpack');

gulp.task('webpack', function(){
  return gulp.src('src/js/main.js')
    .pipe(webpack( require('../webpack.config.js') ))
    .pipe(gulp.dest('build/'));
});
