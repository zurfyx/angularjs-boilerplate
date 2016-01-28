var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    htmlmin = require('gulp-htmlmin');


// concatenate JS files
gulp.task('js', function() {
    return gulp.src([
            'src/app/**/*.module.js',
            'src/app/**/*.js',
            '!src/app/**/*.spec.js'
    ])
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('build/app'));
});

// copy 3rd party libraries (bower)
gulp.task('libs', function() {
    return gulp.src('src/assets/libs/**/*')
        .pipe(gulp.dest('build/assets/libs'));
});

// copy non-angular JS files
gulp.task('js-non-angular', function() {
   return gulp.src('src/assets/js/**/*.js')
       .pipe(uglify())
       .pipe(gulp.dest('build/assets/js'));
});

// generate css from sass files
gulp.task('sass', function() {
    return gulp.src(['src/assets/scss/*.scss', 'src/app/**/*.scss'])
        .pipe(sass({style: 'compressed'}))
        .pipe(minifyCss())
        .pipe(concat('style.scss.css'))
        .pipe(gulp.dest('build/assets/css'))
});

// generate css from css files
gulp.task('css', function() {
    return gulp.src(['src/assets/css/**/*.css', 'src/app/**/*.css'])
        .pipe(concat('style.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('build/assets/css'));
});

// copy html files
gulp.task('html', function() {
    gulp.src(['src/app/**/*.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build/app'));
    gulp.src(['src/index.html'])
        .pipe(htmlmin({collapseWhitespace: true}))
        .pipe(gulp.dest('build'));
});

// copy img files
gulp.task('img', function() {
    return gulp.src('src/assets/img/**/*')
        .pipe(gulp.dest('build/assets/img'));
});

//watch for changes
gulp.task('watch', function() {
    gulp.watch('src/app/**/*.js', ['js']);
    gulp.watch('src/assets/libs/**/*.js', ['libs']);
    gulp.watch('src/assets/js/**/*.js', ['js-non-angular']);
    gulp.watch(['src/assets/scss/*.scss', 'src/app/**/*.scss'], ['sass']);
    gulp.watch(['src/assets/css/**/*.css', 'src/app/**/*.css'], ['css']);
    gulp.watch('src/app/**/*.html', ['html']);
    gulp.watch('src/assets/img/**/*', ['img']);
});

// default task
gulp.task('default', [
    'js',
    'libs',
    'js-non-angular',
    'sass',
    'css',
    'html',
    'img',
    'watch'
]);

