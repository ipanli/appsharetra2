/**
 * 2016年04月29日10:51:34
 * Julian
 */
import gulp from 'gulp';
import uglify from 'gulp-uglify';

import concat from 'gulp-concat';
import notify from 'gulp-notify';
import browserSync from 'browser-sync';

const  reload  = browserSync.create().reload;


const buildSrc = './build/';
const minjs = 'appshare.js';

gulp.task('scripts',() => {
    return gulp.src('./src/js/*.js')
        .pipe(concat(minjs))
        .pipe(gulp.dest('./.tmp/js'))
        .pipe(uglify())
        .pipe(gulp.dest(buildSrc+'/js/'))
        .pipe(gulp.dest('/Users/julaud/www/panli/sf-panli-com/Ued/H5/appShare/js/'))
        .pipe(notify("Found file: <%= file.relative %>!"));
});


gulp.task('watch', () => {

    browserSync.init({
        server: './'
    });
    
    // 看守所有.js档
    gulp.watch('./src/js/*.js', ['scripts']);
    gulp.watch('./*.html',['scripts']);
    
});


gulp.task('default', ['scripts','watch'], () => {});