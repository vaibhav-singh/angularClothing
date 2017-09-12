var gulp = require('gulp');

var cssc = require('gulp-css-condense');
 var uglify = require('gulp-uglify');
var pump = require('pump');
 
gulp.task('compress', function (cb) {
  pump([
        gulp.src('./public/javascripts/**'),
        uglify(),
        gulp.dest('./public/javascripts/dist/')
    ],
    cb
  );
})
gulp.task('cssMinify', function() {
    return gulp.src('./public/stylesheets/*.css')
        .pipe(cssc({
            consolidateViaDeclarations: true,
            consolidateViaSelectors: false,
            consolidateMediaQueries: true
        }))
        .pipe(gulp.dest('./public/stylesheets/dist'));
});