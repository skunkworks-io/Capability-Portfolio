const { src, dest, series, parallel, watch } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const imagemin = require('gulp-imagemin');
const del = require('del');

// Paths for source and output files
const paths = {
  styles: {
    src: 'src/scss/**/*.scss',
    dest: 'dist/css/'
  },
  scripts: {
    src: 'src/js/**/*.js',
    dest: 'dist/js/'
  },
  images: {
    src: 'src/images/**/*.{jpg,png,gif,svg}',
    dest: 'dist/images/'
  },
  html: {
    src: 'src/**/*.html',
    dest: 'dist/'
  }
};

// Clean the dist folder
function clean() {
  return del(['dist']);
}

// Compile Sass to CSS with autoprefixing and minification
function styles() {
  return src(paths.styles.src)
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss([autoprefixer(), cssnano()]))
    .pipe(dest(paths.styles.dest));
}

// Minify JavaScript
function scripts() {
  return src(paths.scripts.src)
    .pipe(terser())
    .pipe(dest(paths.scripts.dest));
}

// Optimize images
function images() {
  return src(paths.images.src)
    .pipe(imagemin())
    .pipe(dest(paths.images.dest));
}

// Copy HTML files
function html() {
  return src(paths.html.src)
    .pipe(dest(paths.html.dest));
}

// Watch for file changes during development
function watchFiles() {
  watch(paths.styles.src, styles);
  watch(paths.scripts.src, scripts);
  watch(paths.images.src, images);
  watch(paths.html.src, html);
}

// Define tasks
exports.clean = clean;
exports.styles = styles;
exports.scripts = scripts;
exports.images = images;
exports.html = html;
exports.watch = watchFiles;

// Build task for production (runs clean, then all tasks in parallel)
exports.build = series(clean, parallel(styles, scripts, images, html));

// Default task (same as build)
exports.default = exports.build;
