const { src, dest, series, watch } = require('gulp');
const concat = require('gulp-concat');
const htmlMin = require('gulp-htmlmin');
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const svgSprite = require('gulp-svg-sprite');
const image = require('gulp-image');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const browserSync = require('browser-sync');
const sourcesMaps = require('gulp-sourcemaps');
const del = require('del');
const sass = require('gulp-sass')(require('sass'));
const gulp = require('gulp');
const webp = require('gulp-webp');
const postcss = require('gulp-postcss');
//чтобы запустить сборку нужно прописать npm run dev/prod (в зависимости от режима)
const IS_DEV = process.env.NODE_ENV !== 'production' ? true : false;
const clean = () => {
  return del(['dist'])
}

const video = () => {
  return src('src/video/**')
    .pipe(dest('dist'))
}
const resources = () => {
  return src('src/resources/**')
    .pipe(dest('dist'))
}

const styles = () => {
  let styles = src([
    'src/styles/**/*.css', 
    'dist/main.css'
  ]);
  if (IS_DEV) {
    styles
      .pipe(sourcesMaps.init())
      .pipe(concat('main.css'))
      .pipe(sourcesMaps.write())
      .pipe(dest('dist'))
      .pipe(browserSync.stream());
  } else {
    styles
      .pipe(concat('main.css'))
      .pipe(autoprefixer({
        cascade: true
      }))
      .pipe(cleanCSS({
        level: 2
      }))
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  }
  return styles;
}

const htmlMinify = () => {
  html = src('src/**/*.html');
  if (IS_DEV) {
    html
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  } else {
    html
      .pipe(htmlMin({
        collapseWhitespace: true
      }))
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  }
  return html
}

const svgSprites = () => {
  return src('src/img/svg/**/*.svg')
    .pipe(svgSprite({
      mode: {
        stack: {
          sprite: '../sprite.svg'
        }
      }
    }))
    .pipe(dest('dist/img'))
}

const scripts = () => {
  let scripts = src([
    'src/js/animation/**/*.js',
    'src/js/components/**/*.js',
    'src/js/validate/**/*.js',
    'src/js/swiper/**/*.js',
    'src/js/main.js'
  ]);
  if (IS_DEV) {
    scripts
      .pipe(sourcesMaps.init())
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('app.js'))
      .pipe(sourcesMaps.write())
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  } else {
    scripts
      .pipe(babel({
        presets: ['@babel/env']
      }))
      .pipe(concat('app.js'))
      .pipe(uglify({
        toplevel: true
      }).on('error', notify.onError()))
      .pipe(dest('dist'))
      .pipe(browserSync.stream())
  }

  return scripts
}

const webpConvert = () => {
  return src([
      'src/img/**/*.png',
      'src/img/**/*.jpg',
      'src/img/**/*.jpeg',
    ])
    .pipe(webp())
    .pipe(gulp.dest('src/img/webp'))
}

const images = () => {
  return src([
    'src/img/svg/not-sprite/**/*.svg',
    'src/img/webp/**/*.webp',
  ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const fonts = () => {
  return src([
    "src/fonts/**/*.woff",
    "src/fonts/**/*.woff2",
  ])
    .pipe(dest('dist/fonts'))
}

const sassStyles = () => {
  return src([
    "src/styles/normalize.scss",
    "src/styles/main.global.scss",
    "src/styles/**/*.scss"
  ]) // берём все SASS-файлы 
    .pipe(sourcesMaps.init())       // активируем gulp-sourcemaps
    .pipe(sass().on("error", notify.onError())) // уведомление об ошибках
    .pipe(concat('main.css'))
    .pipe(postcss([ require('autoprefixer')({ overrideBrowserslist: ['last 2 versions', 'ie 6-8', 'Firefox > 20']  }), require('postcss-nested') ]))
    .pipe(sourcesMaps.write("."))   // создание карты css.map в текущей папке
    .pipe(dest("dist"))
    .pipe(browserSync.stream())
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  })
}

watch('src/**/*.html', htmlMinify);
watch('src/styles/**/*.html', styles);
watch('src/styles/**/*.scss', sassStyles);
watch([
  'src/img/**/*.webp',
  'src/img/svg/not-sprite/**/*.svg',
  'src/img/**/*.jpg',
  'src/img/**/*.jpeg',
  'src/img/**/*.webp',
], images);
watch('src/img/svg/**/*.svg', svgSprites);
watch('src/js/**/*.js', scripts);
watch('src/resources/**', resources);
watch("src/fonts/**", fonts)
watch("src/video/**", video)

exports.clean = clean;
exports.sassStyles = sassStyles;
exports.styles = styles;
exports.scripts = scripts;
exports.htmlMinify = htmlMinify;
exports.images = images;
exports.sass = sass;
exports.fonts = fonts;
exports.webpConvert = webpConvert;
exports.video = video;
exports.default = series(clean, resources, htmlMinify, scripts, fonts, svgSprites,  sassStyles, styles, webpConvert, images, video, IS_DEV && watchFiles);