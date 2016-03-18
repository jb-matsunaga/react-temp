import gulp from 'gulp';
import aigis from 'gulp-aigis';
import config from './../config.js';

//StyleGuideGenerator
gulp.task('aigis', () => {
    gulp.src('./aigis_config.yml')
        .pipe(aigis());
})
