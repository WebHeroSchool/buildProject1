const gulp = require('gulp');

let now = new Date();
gulp.task('hello', () => console.log(now));

gulp.task('buildjs', () => {
	return gulp.src(['scripts/*'])
		.pipe(gulp.dest('build/js'));
});

gulp.task('buildcss', () => {
	return gulp.src('styles/style.css')
		.pipe(gulp.dest('build/css'));
});