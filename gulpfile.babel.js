import gulp from 'gulp';
import requireDir from 'require-dir';
import config from './gulp/config.js';
import {reload} from 'browser-sync';

requireDir('./gulp/task', { recurse: true });

//監視タスク定義
gulp.task('watch', () => {

    gulp.watch(config.path.scssSrc, ['sass']);
    gulp.watch(config.path.aigisSrc, ['aigis']);
    gulp.watch(config.path.jsSrc, ['js']);
    /* gulp.watch(config.path.htmlSrc, [reload]); */
});

gulp.task('default', ['bs', 'watch']);
