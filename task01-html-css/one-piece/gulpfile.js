const {
    src,
    dest,
    parallel,
    series,
    watch
} = require('gulp');

// Load plugins

const uglify = require('gulp-uglify');
const rename = require('gulp-rename');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const concat = require('gulp-concat');
const clean = require('gulp-clean');
const imagemin = require('gulp-imagemin');
const changed = require('gulp-changed');
const browsersync = require('browser-sync').create();

function clear() {
    return src('./dist/*', {
        read: false
    })
        .pipe(clean());
}

// JS function 

function js() {
    const source = './src/js/**/*.js';

    return src(source)
        .pipe(changed(source))
        .pipe(concat('bundle.js'))
        .pipe(uglify())
        .pipe(rename({
            extname: '.min.js'
        }))
        .pipe(dest('./dist/js/'))
        .pipe(browsersync.stream());
}

// CSS function 

function css() {
    const source = './src/scss/main.scss';

    return src(source)
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 2 versions'],
            cascade: false
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(cssnano())
        .pipe(dest('./dist/css/'))
        .pipe(browsersync.stream());
}


function img() {
    return src('./src/img/**/*{jpg,png}')
        .pipe(imagemin())
        .pipe(dest('./dist/img'));
}

function fonts() {
    return src('./src/font/**/*.{eot,svg,ttf,woff,woff2}')
        .pipe(dest('dist/font'));
}

function html() {
    return src('./src/**/*.html')
        .pipe(dest('./dist/'))
        .pipe(browsersync.stream());
}

function lib() {
    return src('./src/lib/**/*.{js,css}')
        .pipe(dest('./dist/lib/'));
}

function json() {
    return src('./src/json/**/*.json')
        .pipe(dest('./dist/json/'));
}

// Watch files

function watchFiles() {
    watch('./src/scss/*', css);
    watch('./src/js/*', js);
    watch('./src/img/*', img);
    watch('./src/font/*', fonts);
    watch('./src/*.html', html);
    watch('./src/lib/*', lib);
    watch('./src/json/*', json);
}

// BrowserSync

function browserSync() {
    browsersync.init({
        server: {
            baseDir: './dist'
        },
        port: 3000
    });
}

// Tasks to define the execution of the functions simultaneously or in series

exports.watch = parallel(watchFiles, browserSync);
exports.default = series(clear, parallel(js, css, img, fonts, html, lib, json));