const gulp = require('gulp'),
    jsdoc = require('gulp-jsdoc3'),
    run = require('gulp-run'),
    config = require('./jsDoc.config.json');

function createDoc(cb) {
    return gulp.src(['README.md', './core/*.js', './logger.js'], { read: false }).pipe(jsdoc(config, cb));
}

function build(cb) {
    return run('npm run build-util').exec()
        .pipe(run('npm run build-util-umd'))
        .pipe(run('npm run build-detect'))
        .pipe(run('npm run build-detect-umd'))
        .pipe(run('npm run build-logger'))
        .pipe(run('npm run build-logger-umd'))
        .pipe(run('echo build complete', cb()));
}

function buildMin(cb) {
    return run('npm run build-util-umd:min').exec()
        .pipe(run('npm run build-detect-umd:min'))
        .pipe(run('npm run build-logger-umd:min'))
        .pipe(run('echo build min complete', cb()));
}

exports['build:min'] = gulp.series(buildMin);
exports.build = gulp.series(build);
exports.default = gulp.series(createDoc);
