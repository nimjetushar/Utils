const gulp = require('gulp'),
    jsdoc = require('gulp-jsdoc3'),
    config = require('./jsDoc.config.json');

function createDoc(cb) {
    return gulp.src(['README.md', './core/*.js'], { read: false }).pipe(jsdoc(config, cb));
}

exports.default = gulp.series(createDoc);