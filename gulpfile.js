const gulp = require('gulp'),
    prefixer = require("gulp-autoprefixer"),
    terser = require('gulp-terser'),
    concat = require("gulp-concat"),
    sass = require('gulp-sass')(require('sass')),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename"),
    rimraf = require("gulp-rimraf");

const path = {
    src: {
        scss: '_develop/scss/',
        js: '_develop/js/',
        npm: 'node_modules/'
    },
    dest: {
        css: 'root/html/assets/',
        cssBuild: '_build/css/',
        js: 'root/html/assets/js/',
        jsBuild: '_build/js/'
    },
    watch: {
        scss: '_develop/scss/',
        js: '_develop/js/'
    }
};

/*----------  SCSS  ----------*/

function mainScss() {
    return gulp.src(path.src.scss + 'main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(sourcemaps.write('.', {
            addComment: true,
            mapFile: function (mapFilePath) {
                return mapFilePath.replace('.scss', '.map');
            }
        }))
        .pipe(gulp.dest(path.dest.css))
        .pipe(gulp.dest(path.dest.cssBuild));
}

function loginScss() {
    return gulp.src(path.src.scss + 'login.scss')
        .pipe(sass())
        .pipe(prefixer({
            overrideBrowserslist: ['last 4 versions'],
            cascade: false
        }))
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({
            suffix: "-min"
        }))
        .pipe(gulp.dest(path.dest.css));
}

/*----------  JS  ----------*/

function mainJs() {
    return gulp.src([
        path.src.js + 'smoothScroll.js',
        path.src.js + 'Modal.js',
        path.src.js + 'nav.js',
        path.src.js + 'tabs.js',
        path.src.js + 'slider.js',
        path.src.js + 'MapSelect.js',
        path.src.js + 'main.js'
    ])
        .pipe(concat('main.js'))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js))
        .pipe(gulp.dest(path.dest.jsBuild));
}

function contactJs() {
    return gulp.src([
        path.src.js + 'classie.js',
        path.src.js + 'input.js',
        path.src.js + 'contact.js'
    ])
        .pipe(concat('contact.js'))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

function vendorJs() {
    return gulp.src([
        path.src.npm + 'gsap/dist/' + 'gsap.js',
        path.src.npm + 'gsap/dist/' + 'ScrollToPlugin.js',
        path.src.npm + 'gsap/dist/' + 'ScrollTrigger.js',
        path.src.npm + 'imagesloaded/' + 'imagesloaded.pkgd.js',
        path.src.npm + 'locomotive-scroll/dist/' + 'locomotive-scroll.js',
        path.src.js + 'masterslider.js',
        path.src.js + 'vendor.js'
    ])
        .pipe(concat('vendor.js'))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

function preloaderJs() {
    return gulp.src([
        path.src.js + 'preloader.js'
    ])
        .pipe(concat('preloader.js'))
        .pipe(terser())
        .pipe(rename({ suffix: "-min" }))
        .pipe(gulp.dest(path.dest.js));
}

/*----------  Watch  ----------*/

function watchFiles() {
    gulp.watch(path.watch.scss + '*.scss', gulp.series(mainScss));
    gulp.watch(path.watch.scss + 'login.scss', gulp.series(loginScss));
    gulp.watch(path.watch.js + 'vendor.js', gulp.series(vendorJs));
    gulp.watch([
        path.watch.js + 'main.js',
        path.watch.js + 'nav.js',
        path.watch.js + 'tabs.js',
        path.watch.js + 'smoothScroll.js',
        path.watch.js + 'slider.js',
        path.watch.js + 'Modal.js',
        path.watch.js + 'MapSelect.js',
    ], gulp.series(mainJs));
    gulp.watch(path.watch.js + 'contact.js', gulp.series(contactJs));
    gulp.watch(path.watch.js + 'preloader.js', gulp.series(preloaderJs));
}

exports['main-scss'] = mainScss;
exports['login-scss'] = loginScss;
exports['main-js'] = mainJs;
exports['contact-js'] = contactJs;
exports['vendor-js'] = vendorJs;
exports['preloader-js'] = preloaderJs;
exports.watch = watchFiles;

// Default task
exports.default = gulp.series(
    gulp.parallel(mainScss, loginScss, mainJs, contactJs, vendorJs, preloaderJs),
    watchFiles
);