const gulp = require('gulp'),
    jsdoc = require('gulp-jsdoc3'),
    run = require('gulp-run'),
    config = require('./jsDoc.config.json');

function createDoc(cb) {
    return gulp.src(['README.md', './core/*.js', './logger.js', './detect.js'], { read: false })
        .pipe(jsdoc(config, cb));
}

function build(cb) {
    return run('npm run build-util-umd').exec()
        .pipe(run('npm run build-detect-umd'))
        .pipe(run('npm run build-logger-umd'))
        .pipe(run('echo build executed', cb()));
}

function buildMin(cb) {
    return run('npm run build-util-umd:min').exec()
        .pipe(run('npm run build-detect-umd:min'))
        .pipe(run('npm run build-logger-umd:min'))
        .pipe(run('echo build min executed', cb()));
}

exports['build:min'] = gulp.series(buildMin);
exports.build = gulp.series(build);
exports.default = gulp.series(createDoc);
