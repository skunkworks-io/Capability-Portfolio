const { src, dest, series, parallel } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const del = require('del');

const paths = {
  styles: { src: 'src/scss/**/*.scss', dest: 'public/css/' },
  scripts: { src: 'src/js/**/*.js', dest: 'public/js/' },
  images: { src: 'src/images/**/*.{jpg,png,gif,svg}', dest: 'public/images/' }
};

function clean() {
  return del(['public/css', 'public/js', 'public/images']);
}

function styles() {
  return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(paths.styles.dest));
}

function scripts() {
  return src(paths.scripts.src)
    .pipe(terser())
    .pipe(dest(paths.scripts.dest));
}

function images() {
  return src(paths.images.src)
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}

exports.build = series(clean, parallel(styles, scripts));
exports.default = exports.build;
