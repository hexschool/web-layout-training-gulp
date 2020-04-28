const gulp = require('gulp');
const $ = require('gulp-load-plugins')({ lazy: false });
const autoprefixer = require('autoprefixer');
const minimist = require('minimist');
const browserSync = require('browser-sync').create();
const { envOptions } = require('./envOptions');

let options = minimist(process.argv.slice(2), envOptions);
//現在開發狀態
console.log(`Current mode：${options}`);

function copyFile() {
  return gulp.src(envOptions.conyFile.src)
  .pipe(gulp.dest(envOptions.conyFile.path));
}

function layoutHTML() {
  return gulp.src(envOptions.html.src)
    .pipe($.plumber())
    .pipe($.frontMatter())
    .pipe(
      $.layout((file) => {
        return file.frontMatter;
      })
    )
    .pipe(gulp.dest(envOptions.html.path))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

function scss() {
  const plugins = [
    autoprefixer(),
  ];
  return gulp.src(envOptions.style.src)
    .pipe($.sourcemaps.init())
    .pipe($.sass().on('error', $.sass.logError))
    .pipe($.postcss(plugins))
    .pipe($.sourcemaps.write('.'))
    .pipe(gulp.dest(envOptions.style.path))
    .pipe(
      browserSync.reload({
        stream: true,
      }),
    );
}

function browser() {
  browserSync.init({
    server: {
      baseDir: envOptions.browserDir
    },
    port: 8080
  });
}

function clean() {
  return gulp.src(envOptions.clean.src, { read: false, allowEmpty: true })
    .pipe($.clean());
}

function deploy() {
  return gulp.src(envOptions.deploySrc)
    .pipe($.ghPages());
}

function watch() {
  gulp.watch(envOptions.html.src, gulp.series(layoutHTML));
  gulp.watch(envOptions.style.src, gulp.series(scss));
}

exports.deploy = deploy;

exports.build = gulp.series(clean, copyFile, layoutHTML, scss);

exports.default = gulp.series(clean, copyFile, layoutHTML, scss, gulp.parallel(browser, watch));
