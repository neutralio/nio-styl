var gulp = require('gulp')
var $ = require('gulp-load-plugins')()

gulp.task('nio.css', function() {
	return gulp.src('src/nio.styl')
		.pipe($.stylus({use: require('nib')()}))
		.on('error', function (e) { console.log('Error', e) })
		.pipe($.base64({baseDir: 'src/icons'}))
		.pipe($.rename('nio.css'))
		.pipe(gulp.dest('.'))
})

// minifies css
gulp.task('nio.min.css', ['nio.css'], function() {
	return gulp.src('nio.css')
		.pipe($.csso())
		.pipe($.rename('nio.min.css'))
		.pipe(gulp.dest('.'))
})

gulp.task('build', ['nio.min.css'])

gulp.task('watch', ['build'], function() {
	gulp.watch('src/**/*', ['build'])
})

gulp.task('default', ['build'])
