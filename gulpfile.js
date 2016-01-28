var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    sass = require('gulp-ruby-sass');


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

// copy 3rd party JS files
gulp.task('js3rd', function() {
    return gulp.src('src/assets/libs/**/*.js')
        .pipe(gulp.dest('build/assets/libs'));
});

// generate css from sass files
gulp.task('sass', function() {
    return sass('src/assets/scss/*.scss', {style: 'compressed'})
        .pipe(concat('style.css'))
        .pipe(gulp.dest('build/assets/css'))
});

// copy css files
gulp.task('css', function() {
    return gulp.src('src/assets/css/**/*.css')
        .pipe(gulp.dest('build/assets/css'));
});

// copy html files
gulp.task('html', function() {
    gulp.src(['src/app/**/*.html'])
        .pipe(gulp.dest('build/app'));
    gulp.src(['src/index.html'])
        .pipe(gulp.dest('build'));
});

// copy img files
gulp.task('img', function() {
    return gulp.src('src/assets/img/**/*.js')
        .pipe(gulp.dest('build/assets/img'));
});

// default task
gulp.task('default', [
    'js',
    'js3rd',
    'sass',
    'css',
    'html',
    'img'
]);

