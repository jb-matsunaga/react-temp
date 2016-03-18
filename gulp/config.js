//ディレクトリ定義
module.exports.path = {
    //ソースファイル
    htmlSrc: '',
    scssSrc: './src/scss/**/*.scss',
    jsSrc: './src/js/**/*.js',
    //パブリッシュディレクトリ
    cssDir:'./public/css/',
    jsDir: './public/js/',
};

module.exports.loadPluginsSetting = {
    pattern: ['gulp-*', 'gulp.*', 'browser-sync', 'del', 'merge-stream'],
    rename: {
        'browser-sync': 'browserSync',
        'merge-stream': 'merge'
    }
};
