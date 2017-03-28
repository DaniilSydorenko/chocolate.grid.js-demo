"use strict";

const gulp = require('gulp'),
	concat = require('gulp-concat'),
	uglify = require('gulp-uglify'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	watch = require('gulp-watch'),
	clean = require('gulp-clean'),
	gutil = require('gulp-util'),
	liveReload = require('gulp-livereload'),
	minify = require('gulp-minify-css'),
	merge = require('merge-stream'),
	ncu = require('npm-check-updates'),
	htmlmin = require('gulp-htmlmin'),
	browserify = require('browserify'),
	babelify = require('babelify'),
	source = require('vinyl-source-stream'),

	paths = {
		dirs: {
			build: '.dist',
			js: 'dist/js',
			css: 'dist/css',
			html: 'dist/html'
		},
		files: {
			js: 'dist/js/*.js',
			css: 'dist/css/*.css',
			html: 'dist/html/*.html'
		},
		components: {
			sass: 'src/scss/main.scss',
			js: 'assets/js/*.js',
			html: '*.html'
		},
		vendors: {
			js: [
				"assets/libs/jquery-2.2.3.js",
				"assets/libs/modernizr-custom.js",
				"bower_components/wow/dist/wow.js",
				"bower_components/chocolate.grid.js/dist/chocolate.grid.js",
				"assets/js/main.js"
			],
			css: [
				"assets/css/style.css",
				"bower_components/flexboxgrid/dist/flexboxgrid.css",
				"bower_components/wow/css/libs/animate.css",
				"node_modules/font-awesome/css/font-awesome.css"
			]
		}
	};

gulp.task('update', function () {
	ncu.run({
		// Always specify the path to the package file
		packageFile: 'package.json',
		// Any command-line option can be specified here:
		silent: true,
		jsonUpgraded: true
	}).then(function (upgraded) {
		console.log('dependencies to upgrade:', upgraded);
		console.log('Use: ncu --upgradeAll & npm install');
	});
});

gulp.task('clean', function (done) {
	gulp.src(['dist'], {
			read: false
		})
		.pipe(clean())
		.on('end', function () {
			gutil.log('All cleaned!');
		});
	done();
});

gulp.task('clean-js', function (done) {
	gulp.src(paths.files.js, {
			read: false
		})
		.pipe(clean());
	done();
});

gulp.task('clean-css', function (done) {
	gulp.src(paths.files.css, {
			read: false
		})
		.pipe(clean());
	done();
});

gulp.task('concat-minify-js', function (done) {
	gulp.src(paths.vendors.js)
		.pipe(concat('build'))
		.pipe(uglify())
		.pipe(rename({
			extname: ".min.js"
		}))
		.pipe(gulp.dest(paths.dirs.js))
		.pipe(liveReload({
			auto: false
		}))
		.on('end', function () {
			gutil.log('Scripts concatenated and merged!');
		});
	done();
});

gulp.task('concat-minify-app-js', function (done) {
    return browserify({entries: './app/app.js', extensions: ['.jsx', '.js'], debug: true})
        .transform('babelify', {presets: ['es2015', 'react']})
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('dist/js'))
        .on('end', function () {
            gutil.log('App scripts concatenated and merged!');
            done();
        });
});

gulp.task('concat-minify-css', function (done) {
	let sassStream = gulp.src(paths.components.sass)
		.pipe(sass({
			errLogToConsole: true
		}));

    let cssStream = gulp.src(paths.vendors.css);
    let mergedStream = merge(sassStream, cssStream)
		.pipe(concat('build.min.css'))
		.pipe(minify({
			keepBreaks: true
		}))
		.pipe(gulp.dest(paths.dirs.css))
		.on('end', function () {
			gutil.log('Styles concatenated and merged!');
		});

	done();

	return mergedStream;
});

gulp.task('concat-minify-html', function (done) {
	gulp.src(paths.components.html)
		.pipe(htmlmin({collapseWhitespace: true}))
		.pipe(gulp.dest(paths.dirs.html))
		.on('end', function () {
			gutil.log('HTML concatenated and merged!');
		});
	done();
});

gulp.task('watch', function (done) {
	gulp.watch('./src/scss/**/*.scss', gulp.series('concat-minify-css'));
	gulp.watch('./assets/js/*.js', gulp.series('concat-minify-js'));
    gulp.watch('./app/**/*.js', gulp.series('concat-minify-app-js'));
    gulp.watch('*.html', gulp.series('concat-minify-html'));
	done();
});

gulp.task('default', gulp.series('concat-minify-css',
	gulp.parallel('concat-minify-js', 'concat-minify-app-js', 'concat-minify-html', 'watch')
));