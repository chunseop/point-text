var gulp = require('gulp'),
    babel = require('gulp-babel'),
    livereload = require('gulp-livereload'),
    transform = require('vinyl-transform'),
    browserify = require('browserify'),
    watchify = require('watchify'),
    browserSync = require('browser-sync')


gulp.task('js', ["es6"], function() {
	var browserified = transform(function(filename) {
		var b = watchify(browserify({entries: filename, debug: true, basedir: './build'}).plugin(watchify));
		return b.bundle();
	});

	return gulp.src('./build/api.js')
		.pipe(browserified)
		.pipe(gulp.dest('./'))
		.pipe(livereload());
});

gulp.task('es6', function() {
	return gulp.src('src/**/*.js')
		.pipe(babel())
		.pipe(gulp.dest('./build'));
});

gulp.task('serve', ["js"], function() {
	browserSync.init({
    server: {
			baseDir: './'
    }
  });

  gulp.watch('src/*', ['js']);
})

// gulp.task("default", ["js"], function(done) {
// 	http.createServer(
// 	    st({ index: 'index.html', cache: false, path: __dirname })
// 	).listen(8080, done);

// 	livereload.listen();
// 	gulp.watch('src/*', ['js']);
// });

