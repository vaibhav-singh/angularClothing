var gulp = require('gulp');

var cssc = require('gulp-css-condense');
 
gulp.task('cssMinify', function() {
    return gulp.src('./public/stylesheets/*.css')
        .pipe(cssc({
            consolidateViaDeclarations: true,
            consolidateViaSelectors: false,
            consolidateMediaQueries: true
        }))
        .pipe(gulp.dest('./public/stylesheets/dist'));
});