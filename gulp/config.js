export default {
    less: {
        dir: 'src/styles/',
        src: [
            'src/**/*.less',
            'src/**/.*.less',
            '!src/**/_*.less'
        ],
        out: 'styles.css'
    },
    src: [
        'src/index.js',
        //'src/components/Login/constants/index.js',
        //'src/components/Login/index.js',
        //'src/helpers/getCookie.js',
        //'src/components/App/reducers/index.js',
    ],
    out: 'scripts.js',
    entry: 'src/components/app',
    format: 'iife',
    dest: 'build'
}
