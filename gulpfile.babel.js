/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-console */
import gulp from 'gulp';
import babel from 'gulp-babel';
import del from 'del';
import { exec } from 'child_process';
import eslint from 'gulp-eslint';

const paths = {
  allSrcJs: 'src/**/*.js',
  libDir: 'lib',
  gulpFile: 'gulpfile.babel.js',
};

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['clean', 'lint'], () => gulp.src(paths.allSrcJs).pipe(babel()).pipe(gulp.dest(paths.libDir)));

gulp.task('main', ['build'], (callback) => {
  exec(`node ${paths.libDir}`, (error, stdout) => {
    console.log(stdout);
    return callback(error);
  });
});

gulp.task('watch', () => gulp.watch(paths.allSrcJs, ['main']));

gulp.task('default', ['watch', 'main']);

// eslint
gulp.task('lint', () => gulp.src([paths.allSrcJs, paths.gulpFile])
              .pipe(eslint())
              .pipe(eslint.format())
              .pipe(eslint.failAfterError()));