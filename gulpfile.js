const gulp = require('gulp');
const sass = require('gulp-sass');

gulp.task('sass', () => {
    gulp.src('src/sass/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css'));
});

gulp.task('watch', () => {
    gulp.watch('src/sass/*', ['sass']);
});