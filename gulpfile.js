var gulp 		   = require('gulp'),
	compass 	 	 = require('gulp-compass'),
	autoprefixer = require('gulp-autoprefixer'),
	browserSync  = require('browser-sync').create(),
	panini       = require('panini'),
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

// Copy page templates into finished HTML files
gulp.task('pages', function() {
  gulp.src('views/pages/**/*.{html,hbs,handlebars}')
    .pipe(panini({
      root: 'views/pages/',
      layouts: 'views/layouts/',
      partials: 'views/partials/',
      data: 'views/data/',
      helpers: 'views/helpers/'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('pages:reset', function(cb) {
  panini.refresh();
  gulp.run('pages');
  cb();
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
	gulp.watch(['views/pages/**/*.html'], ['pages', browserSync.reload]);
  gulp.watch(['views/{layouts,partials}/**/*.html'], ['pages:reset', browserSync.reload]);
	// gulp.watch("./*.html").on('change', browserSync.reload);
});

// Default Task
gulp.task('default', ['compass', 'pages', 'browserSync', 'watch']);