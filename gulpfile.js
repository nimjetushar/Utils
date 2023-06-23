const gulp = require("gulp"),
  jsdoc = require("gulp-jsdoc3"),
  config = require("./jsDoc.config.json"),
  rollup = require("gulp-rollup"),
  babel = require("gulp-babel"),
  { exec } = require("child_process"),
  rename = require("gulp-rename");

function createDoc(cb) {
  return gulp
    .src(["README.md", "./build/core/*.js"], { read: false })
    .pipe(jsdoc(config, cb));
}

function compileTs(cb) {
  return exec("npm run compile-ts", () => {
    cb();
  });
}

function compileToUmd() {
  return gulp
    .src("./build/**/*.js")
    .pipe(
      rollup({
        output: {
          name: "utils",
          format: "umd",
        },
        input: "./build/index.js",
      })
    )
    .pipe(
      babel({
        presets: ["@babel/preset-env"],
        plugins: ["transform-object-assign"],
      })
    )
    .pipe(rename("index-umd.js"))
    .pipe(gulp.dest("./build"));
}

async function clean() {
  const { deleteSync } = await import('del')
  return deleteSync("build", { force: true });
}

function moveFiles(cb) {
  return gulp
    .src(["README.md", "package.json", "LICENSE"])
    .pipe(gulp.dest("build"), cb);
}

exports.compileToUmd = compileToUmd;
exports.generateDoc = createDoc;
exports.default = gulp.series(clean, compileTs, compileToUmd, moveFiles);
