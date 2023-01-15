// npm install gulp && npm i gulp-autoprefixer && npm i gulp-sass && npm i sass && npm i gulp-sourcemaps && npm i gulp-livereload && npm i node-sass

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const sass = require('gulp-sass')(require('sass'));
const sourcemaps = require('gulp-sourcemaps');
const livereload = require('gulp-livereload');
sass.compiler = require('node-sass');

function scss() {
	return gulp
		.src('./src/Scss/style.scss')
		.pipe(sourcemaps.init())
		.pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(sourcemaps.write('./maps'))
		.pipe(gulp.dest('./src/Scss'))
		.pipe(livereload());
}

exports.build = gulp.parallel(scss);

exports.default = function () {
	livereload.listen();
	gulp.watch('./src/Scss/**/*.scss', scss);
	gulp.watch('./src/Pages/**/*.scss', scss);
	gulp.watch('./src/Layouts/**/*.scss', scss);
	gulp.watch('./src/Components/**/*.scss', scss);
};
