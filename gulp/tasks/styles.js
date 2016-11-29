import gulp from 'gulp';
import less from 'gulp-less';
import debug from 'gulp-debug';
import concat from 'gulp-concat';
import path from 'path';
import config from '../config';

const styles = () =>
    gulp.src(config.less.src)
        .pipe(debug())
        .pipe(less({
            paths: config.less.dir
        }))
        .pipe(concat(config.less.out))
        .pipe(gulp.dest(config.dest));

gulp.task('styles', styles);
gulp.task('watch:styles', () =>
    gulp.watch(config.less.src, styles)
);
