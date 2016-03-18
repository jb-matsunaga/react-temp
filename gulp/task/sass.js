import gulp from 'gulp';
import config from './../config.js';

var $ = require('gulp-load-plugins')(config.loadPluginsSetting);

//SCSS　整頓 => 圧縮 => リネームして吐き出し
gulp.task('sass', () => {
    gulp.src(config.path.scssSrc)
        .pipe($.plumber({
            errorHandler: $.notify.onError("Error: <%= error %>")
        }))
        .pipe($.sass())
        .pipe($.csscomb())
        .pipe(gulp.dest('public/css'))
        .pipe($.pleeease({
            //minify＆prefix付与
            autoprefixer: {
                browsers: [
                    'last 2 versions',
                    'ie >= 9',
                    'android 4.0'
                    ]
                },
            minifier: true
        }))
        .pipe($.rename({suffix: '.min'}))
        .pipe(gulp.dest('public/css'))
        .pipe($.browserSync.reload({stream: true}));
});
