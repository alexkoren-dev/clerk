'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const del = require('del');
const uglify = require('gulp-uglify-es').default;

const dir = {
  src: './source/',
  dest: './assets/'
};

// styles
const styles = {
  src: dir.src + 'scss/application.scss',
  dest: dir.dest + 'stylesheets/'
};

// custom js settings
const js = {
	src: dir.src + 'js/*',
	dest: dir.dest + 'javascripts/',
};

// Task: Styles
gulp.task('styles', function () {
  return gulp
    .src(styles.src)
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(gulp.dest(styles.dest));
});

// Task: Js
gulp.task('js', function() {
  return gulp.src(js.src)
    .pipe(uglify())
    .pipe(gulp.dest(js.dest));
});

// Task: Clean
gulp.task('clean', async function() {
  return del.sync([styles.dest + '/styles.css', js.dest + '/main.js']);
});

// Task: Build
gulp.task('build', gulp.series(['styles', 'js']));

// Task: Watch
gulp.task('watch',
  gulp.parallel(
    function watch_ () {
        gulp.watch(dir.src + '**/*.scss', gulp.series('styles'));
        gulp.watch(js.src, gulp.series('js'));
    }
  )
);