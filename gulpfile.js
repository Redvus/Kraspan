var gulp = require('gulp'),
    watch = require("gulp-watch"),
    prefixer = require("gulp-autoprefixer"),
    terser = require('gulp-terser'),
    concat = require("gulp-concat"),
    sass = require('gulp-sass')(require('sass')),
    // sass = require('sass'),
    cleanCSS = require("gulp-clean-css"),
    sourcemaps = require("gulp-sourcemaps"),
    rename = require("gulp-rename"),
    rimraf = require("gulp-rimraf");

var path = {
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

gulp.task('main-scss', function(){
    return gulp.src(path.src.scss + 'main.scss')
    .pipe(sourcemaps.init())
    .pipe(sass())
    .pipe(prefixer({
        overrideBrowserslist: ['last 4 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(sourcemaps.write('.', {
        addComment: true,
        // includeContent: false,
        mapFile: function(mapFilePath) {
            return mapFilePath.replace('.scss', '.map');
        }
    }))
    .pipe(gulp.dest(path.dest.css))
    .pipe(gulp.dest(path.dest.cssBuild));
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});

gulp.task('login-scss', function(){
    return gulp.src(path.src.scss + 'login.scss')
    .pipe(sass())
    .pipe(prefixer({
        overrideBrowserslist: ['last 4 versions'],
        cascade: false
    }))
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(rename({
        suffix: "-min"
    }))
    .pipe(gulp.dest(path.dest.css));
    // .pipe(browserSync.reload({
    //     stream: true
    // }));
});

/*----------  JS  ----------*/

gulp.task('main-js', function(){
    return gulp.src([
        // path.src.js + 'Counters.js',
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
    .pipe(rename({suffix: "-min"}))
    .pipe(gulp.dest(path.dest.js))
    .pipe(gulp.dest(path.dest.jsBuild));
});

gulp.task('contact-js', function () {
    return gulp.src([
        // path.src.js + 'nav.js',
        path.src.js + 'classie.js',
        path.src.js + 'input.js',
        path.src.js + 'contact.js'
    ])
    .pipe(concat('contact.js'))
    .pipe(terser())
    .pipe(rename({ suffix: "-min" }))
    .pipe(gulp.dest(path.dest.js));
});

// gulp.task('jgrowl-js', function(){
//     return gulp.src([
//         path.src.js + 'jgrowl.js'
//     ])
//     .pipe(concat('jgrowl.js'))
//     .pipe(terser())
//     .pipe(rename({suffix: "-min"}))
//     .pipe(gulp.dest(path.dest.ajaxLib));
// });

gulp.task('vendor-js', function(){
    return gulp.src([
        path.src.npm + 'gsap/dist/' + 'gsap.js',
        path.src.npm + 'gsap/dist/' + 'ScrollToPlugin.js',
        path.src.npm + 'gsap/dist/' + 'ScrollTrigger.js',
        path.src.npm + 'imagesloaded/' + 'imagesloaded.pkgd.js',
        path.src.npm + 'locomotive-scroll/dist/' + 'locomotive-scroll.js',
        path.src.js + 'masterslider.js',
        // path.src.npm + 'plyr/dist/' + 'plyr.js',
        // path.src.js + 'jquery.requestAnimationFrame.js',
        // path.src.js + 'jquery.mousewheel.js',
        // path.src.js + 'ilightbox.packed.js',
        // path.src.npm + 'magnific-popup/dist/' + 'jquery.magnific-popup.js',
        path.src.js + 'vendor.js'
    ])
    .pipe(concat('vendor.js'))
    .pipe(terser())
    .pipe(rename({suffix: "-min"}))
    .pipe(gulp.dest(path.dest.js));
});

gulp.task('preloader-js', function() {
    return gulp.src([
        path.src.js + 'preloader.js'
    ])
    .pipe(concat('preloader.js'))
    .pipe(terser())
    .pipe(rename({suffix: "-min"}))
    .pipe(gulp.dest(path.dest.js));
});

/*----------  Watch  ----------*/

gulp.task('watch', function() {
    gulp.watch(path.watch.scss + '*.scss', gulp.series('main-scss'));
    gulp.watch(path.watch.scss + 'login.scss', gulp.series('login-scss'));
    gulp.watch(path.watch.js + 'vendor.js', gulp.series('vendor-js'));
    gulp.watch([
        path.watch.js + 'main.js',
        path.watch.js + 'nav.js',
        path.watch.js + 'tabs.js',
        path.watch.js + 'smoothScroll.js',
        path.watch.js + 'slider.js',
        path.watch.js + 'Modal.js',
        path.watch.js + 'MapSelect.js',
        // path.watch.js + 'MapSelectAdress.js',
        // path.watch.js + 'Counters.js'
    ], gulp.series('main-js'));
    gulp.watch(path.watch.js + 'contact.js', gulp.series('contact-js'));
    gulp.watch(path.watch.js + 'preloader.js', gulp.series('preloader-js'));
    // gulp.watch(path.watch.js + 'jgrowl.js', gulp.series('jgrowl-js'));

    // gulp.watch(path.dest.css + '/js/**/*.js', browserSync.reload);
});

// gulp.task("default", ["main-scss", "main-js", "watch"]);