const gulp = require('gulp'),
    jsdoc = require('gulp-jsdoc3'),
    run = require('gulp-run'),
    config = require('./jsDoc.config.json'),
    del = require('del');

function createDoc(cb) {
    return gulp.src(['README.md', './core/*.js', './logger.js', './detect.js'], { read: false })
        .pipe(jsdoc(config, cb));
}

function compileTs() {
    return run('npm run compile-ts').exec();
}

function clean() {
    return del('build', { force: true });
}

function moveFiles(cb) {
    return gulp.src(['README.md', 'package.json', 'LICENSE'])
        .pipe(gulp.dest('build'), cb);
}

exports.default = gulp.series(clean, compileTs, moveFiles);
