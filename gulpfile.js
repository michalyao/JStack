const gulp = require('gulp');
const babel = require('gulp-babel');
const del = require('del')
const exe = require('child_process').exec;

const paths = {
  allSrcJs: 'src/**/*.js',
  libDir: 'lib',
};

gulp.task('clean', () => del(paths.libDir));

gulp.task('build', ['clean'], () => gulp.src(paths.allSrcJs).pipe(babel()).pipe(gulp.dest(paths.libDir)));

gulp.task('main', ['build'], (callback) => {
  exec(`node ${paths.libDir}`, (error, stdout) => {
      console.log(stdout);
      return callback(error);
  });
});

gulp.task('watch', () => gulp.watch(paths.allSrcJs, ['main']));

gulp.task('default', ['watch', 'main']);