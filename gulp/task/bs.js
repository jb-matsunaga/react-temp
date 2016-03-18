import gulp from 'gulp';
import config from '../config.js';
import browserSync from 'browser-sync';

var $ = require('gulp-load-plugins')(config.loadPluginsSetting);

gulp.task('bs', () => {
    $.browserSync.init({
        server: {
            baseDir: './public/'
        }
    });
});
