import gulp from 'gulp'
import sourcemaps from 'gulp-sourcemaps';
import config from '../config'
import rollup from 'rollup-stream'
import babel from 'rollup-plugin-babel'
import jsx from 'rollup-plugin-jsx'
import buble from 'rollup-plugin-buble'

import _interopRequireDefault from 'babel-cli/node_modules/babel-runtime/helpers/interop-require-default';

const scripts = () =>
gulp.src(config.src)
//.pipe(sourcemaps.init())
// transform the files here.
    .pipe(rollup({
        entry: config.entry,
        dest: config.dest + '/' + config.out,
        format: config.format,
        //sourceMap: true,
        plugins: [
            //'transform-class-properties',
            buble(),
            jsx( {factory: 'React.createElement'} ),
        ]
    }))
    //.pipe(sourcemaps.write())
    .pipe(gulp.dest(config.dest))

gulp.task('scripts', scripts);
gulp.task('watch:scripts', () =>
    gulp.watch(config.src, scripts)
)
