'use strict';

// dependencies
var gulp = require('gulp');
var sass = require('gulp-sass');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var changed = require('gulp-changed');

//
// SCSS/CSS (Compiling SCSS to css (making it minified))
//

var SCSS_SRC = './src/Assets/scss/**/*.scss';
var SCSS_DEST =  './src/Assets/css';

// Compile SCSS
gulp.task('compile_scss', function(done){

    gulp.src(SCSS_SRC)
    .pipe(sass().on('error', sass.logError)) // Pipe chains tasks together in gulp (a function in gulp)
    .pipe(minifyCSS())
    .pipe(rename({ suffix: '.min'}))
    .pipe(changed(SCSS_DEST))
    .pipe(gulp.dest(SCSS_DEST));
    done();
});

// detect changes in SCSS
gulp.task('watch_scss', function(done){
    gulp.watch(SCSS_SRC, gulp.series('compile_scss'));
    done();  // when a change is detected, then compile the scss (sort of ran like a loop)
});

// Run tasks
gulp.task('default', gulp.series('watch_scss')); // can just type gulp to find the default task in the terminal

