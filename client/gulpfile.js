import gulp from 'gulp';
import * as sass from 'sass';
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';

const gulpSassInstance = gulpSass(sass);

// Paths to project folders
const paths = {
  styles: {
    src: 'src/styles/**/*.scss',
    dest: 'public/css'
  },
  scripts: {
    src: 'src/**/*.jsx',
    dest: 'public/js'
  }
};

// Compile SCSS into CSS
function styles() {
  return gulp.src(paths.styles.src)
    .pipe(sourcemaps.init())
    .pipe(gulpSassInstance({
      includePaths: ['node_modules/foundation-sites/scss']
    }).on('error', function(err) {
      console.error(err.message);
      this.emit('end');
    }))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(rename({
      basename: 'main',
      suffix: '.min'
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(paths.styles.dest));
}

// Minify JavaScript (if needed)
function scripts() {
  return gulp.src(paths.scripts.src, { sourcemaps: true })
    .pipe(gulp.dest(paths.scripts.dest));
}

// Watch for changes in files
function watch() {
  gulp.watch(paths.styles.src, styles);
  gulp.watch(paths.scripts.src, scripts);
}

const build = gulp.series(styles);

export { styles, scripts, watch, build };
export default build;
