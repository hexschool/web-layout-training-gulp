let envOptions = {
  string: 'env',
  default: {
    env: 'dev',
  },
  conyFile: {
    src: ['./app/**/*', '!app/assets/style/**/*.scss', '!app/**/*.ejs', '!app/**/*.html'],
    path: './dist/',
  },
  html: {
    src : ['!./app/**/*.ejs', './app/**/*.html'],
    path: './dist/',
  },
  style: {
    src: ['./app/assets/style/**/*.scss'],
    path: './dist/assets/style',
  },
  clean: {
    src: './dist',
  },
  browserDir: "./dist",
  deploySrc: './dist/**/*',
};

exports.envOptions = envOptions;
