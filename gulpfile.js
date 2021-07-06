const gulp = require('gulp');
const babel = require('gulp-babel');

// let now = new Date();
// gulp.task('hello', () => console.log(now));

gulp.task('buildjs', () => {
	return gulp.src(['scripts/*.js'])
		.pipe(console.log())
		.pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(console.log())
		.pipe(gulp.dest('build/js'));
});

gulp.task('buildcss', () => {
	return gulp.src('styles/style.css')
		.pipe(gulp.dest('build/css'));
});