const gulp = require('gulp'),
    jsdoc = require('gulp-jsdoc3'),
    config = require('./jsDoc.config.json'),
    del = require('del'),
    rollup = require('gulp-rollup'),
    babel = require("gulp-babel"),
    { exec } = require('child_process'),
    rename = require('gulp-rename');

function createDoc(cb) {
    return gulp.src(['README.md', './core/*.js', './logger.js', './detect.js'], { read: false })
        .pipe(jsdoc(config, cb));
}

function compileTs(cb) {
    return exec('npm run compile-ts', () => {
        cb();
    })
}

function compileToUmd() {
    return gulp.src('./build/**/*.js')
        .pipe(rollup({
            format: "umd",
            moduleName: "utils",
            entry: "./build/index.js"
        }))
        .pipe(babel())
        .pipe(rename('index-umd.js'))
        .pipe(gulp.dest('./build'))
}

function clean() {
    return del('build', { force: true });
}

function moveFiles(cb) {
    return gulp.src(['README.md', 'package.json', 'LICENSE'])
        .pipe(gulp.dest('build'), cb);
}

exports.default = gulp.series(clean, compileTs, compileToUmd, moveFiles);
