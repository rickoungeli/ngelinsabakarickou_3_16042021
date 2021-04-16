var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
var cleanCSS = require('gulp-clean-css');
 
gulp.task('styles', () =>
    gulp.src('css/*.scss')
    	.pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 5 versions']
        }))
        .pipe(gulp.dest('build'))
);

gulp.task('watch', () =>
	gulp.watch('css/style.scss', gulp.series('styles'))
);