const srcPath = './app';
const distPath = './dist';

let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: [
      `${srcPath}/**/*`,
      `!${srcPath}/assets/style/**/*.scss`,
      `!${srcPath}/assets/style/**/*.sass`,
      `!${srcPath}/**/*.ejs`,
      `!${srcPath}/**/*.html`,
    ],
    path: distPath,
  },
  html: {
    src: [`${srcPath}/**/*.html`,],
    ejsSrc: [`${srcPath}/**/*.ejs`,],
    path: distPath,
  },
  style: {
    // 若您是撰寫 sass 就只需要將 *.scss 改成 *.sass 即可。
    // 記得要修改位於 app/style/*.scss 的檔案唷。
    src: [
      `${srcPath}/assets/style/**/*.scss`,
      `${srcPath}/assets/style/**/*.sass`,
    ],
    path: `${distPath}/assets/style`,
  },
  clean: {
    src: distPath,
  },
  browserDir: distPath,
  deploySrc: `${distPath}/**/*`,
};

exports.envOptions = envOptions;
