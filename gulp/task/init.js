import gulp from 'gulp';
import config from './../config.js';
import minimist from 'minimist';

//初期化処理
gulp.task('init_all', ['sass', 'webpack']);

//PC/SP両対応
gulp.task('init', () => {
    var args = minimist(process.argv.slice(2));

    // 以下のOPTIONを付けると各タスクのみをinit出来ます
    // -s: sass
    // -w: webpack

    var initFlow = () => {
        if(args.s === true){ gulp.start('sass') }
        else if (args.w === true){
            gulp.start('webpack');
        }
        else {
            gulp.start('init_all');
        }
    };

    config.env = {
      'sass': 'pc',
      'js': 'pc'
    };
    initFlow();

    config.env = {
      'sass': 'sp',
      'js': 'sp'
    };
    initFlow();

});
