// Requis
var gulp = require('gulp');

// Include plugins
var plugins = require('gulp-load-plugins')(); // tous les plugins de package.json
var sass = require('gulp-sass');//pb avec le loader au-dessus, donc chargement à part
var csso = require('gulp-csso'); //same here
var concat = require('gulp-concat');


// Variables de chemins
var source = './src'; // dossier de travail
var destination = './dist'; // dossier à livrer


//////////////

	// BUILD DU CSS

////////////

// Tâche "build" = SASS + autoprefixer + CSScomb + beautify (source -> destination)
gulp.task('css', function () {
  return gulp.src(source + '/assets/css/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(plugins.csscomb())
    .pipe(plugins.cssbeautify({indent: '	'}))
    .pipe(plugins.autoprefixer())
    .pipe(concat('style.css'))
    .pipe(gulp.dest(destination + '/assets/css/'));
});

// Tâche "minify" = minification CSS (destination -> destination)
gulp.task('minifyCss', function () {
  return gulp.src(destination + '/assets/css/*.css')
    .pipe(csso())
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/assets/css/'));
});

//////////////

	// BUILD DU JS

////////////


gulp.task('js', function(){
	return gulp.src(source+'/assets/js/*.js')
		.pipe(concat('main.js'))
		.pipe(gulp.dest(destination+'/assets/js'))
});

gulp.task('minifyJs', function () {
  return gulp.src(destination + '/assets/js/*.js')
    //.pipe(csso()) ajouter un plugin minify JS
    .pipe(plugins.rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest(destination + '/assets/js/'));
});

//////////////

	// BUILD DU HTML

////////////

gulp.task('html', function(){
	return gulp.src(source + '/*.php')
		.pipe(gulp.dest(destination + '/'));
});


//////////////

	// BUILD MAIN

////////////

// Tâche "build"
gulp.task('build', ['css', 'html', 'js']);

// Tâche "prod" = Build + minify
gulp.task('prod', ['build',  'minifyCss']);

// Tâche "watch" = je surveille *scss
gulp.task('watch', function () {
  gulp.watch(source + '/assets/css/*.scss', ['build']);
  gulp.watch(source + '/*.php', ['build']);
  gulp.watch(source + '/assets/js/*.js', ['build']);
});

// Tâche par défaut
gulp.task('default', ['build']);