// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var sass = require('gulp-sass');//pb avec le loader au-dessus, donc chargement à part


// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer


// Tâche "build" = LESS + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
  return gulp.src(source + '/assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '	'}))
    .pipe(plugins.autoprefixer())
    .pipe(gulp.dest(destination + '/assets/css/'));
});

// Tâche "minify" = minification CSS (destination -> destination)
gulp.task('minify', function () {
  return gulp.src(destination + '/assets/css/*.css')
    .pipe(plugins.csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/assets/css/'));
});

// Tâche "build"
gulp.task('build', ['css']);

// Tâche "prod" = Build + minify
gulp.task('prod', ['build',  'minify']);

// Tâche "watch" = je surveille *scss
gulp.task('watch', function () {
  gulp.watch(source + '/assets/css/*.scss', ['build']);
});

// Tâche par défaut
gulp.task('default', ['build']);