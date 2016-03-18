import gulp from 'gulp';
import config from './../config.js';
import webpackConfig from './../../webpack.config.js';

var $ = require('gulp-load-plugins')(config.loadPluginsSetting);

//webpackを使ってJSの結合 => 圧縮
gulp.task('js', () => {
    gulp.src('')
        .pipe($.webpack(webpackConfig()))
        .pipe(gulp.dest('./public/js/'))
        .pipe($.browserSync.reload({stream: true}));
});
