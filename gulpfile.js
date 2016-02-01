// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json

// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer

gulp.task('css', function () {
  return gulp.src(source + '/assets/css/*.scss')
    .pipe(plugins.scss())
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '	'}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + '/assets/css/'));
});