var gulp 		 = require('gulp'),
	compass 	 = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync  = require('browser-sync').create(),
	imagemin     = require('imagemin');


//SASS task
gulp.task('compass', function() {
	return gulp.src('sass/screen.sass')
	.pipe(compass({
		config_file: './config.rb',
		css: 'css',
		sass: 'sass'
	}))
	.pipe(autoprefixer())
	.pipe(gulp.dest('css'))
	.pipe(browserSync.stream());
});

//Browser sync
gulp.task('browserSync', function() {
	browserSync.init({
		server: {
			baseDir: './'
		}
	})
})

// Watch Task
gulp.task('watch', function() {
	gulp.watch('sass/*', ['compass']);
	gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['compass', 'browserSync', 'watch']);