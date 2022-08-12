const gulp = require('gulp');
const sass = require('gulp-sass');  //sass -> css
const minifyCss = require('gulp-minify-css');

gulp.task('sass', async function (){
    return gulp.src('components/css/**/*.scss').pipe(sass())
        .pipe(minifyCss())
        .pipe(gulp.dest('dist/css'));
})
