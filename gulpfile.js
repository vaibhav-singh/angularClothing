var gulp = require("gulp");
var watch = require("gulp-watch");
var batch = require("gulp-batch");
var cssc = require("gulp-css-condense");
var uglify = require("gulp-uglify");
var pump = require("pump");
var livereload = require('gulp-livereload');


gulp.task("compress", function(cb) {

  return gulp
    .src("./public/javascripts/**")
    .pipe(
      uglify()
    )
    .pipe(gulp.dest("./public/dist/javascripts/"))
    // .pipe(livereload());

  // pump([gulp.src("./public/javascripts/**"), uglify(), gulp.dest("./public/dist/javascripts/"), livereload()], cb)
});
gulp.task("cssMinify", function() {
  return gulp
    .src("./public/stylesheets/*.css")
    .pipe(
      cssc({
        consolidateViaDeclarations: true,
        consolidateViaSelectors: false,
        consolidateMediaQueries: true
      })
    )
    .pipe(gulp.dest("./public/dist/stylesheets/"))
    // .pipe(livereload());
});
// gulp.task("livereload", function() {
//   livereload();
// })
gulp.task("watch", function() {
  livereload.listen({ basePath: './public/dist' });
  watch('./public/stylesheets/**', batch(function (events, done) {
      gulp.start('cssMinify', done);
  }));
  watch(
    ["./public/javascripts/**",],
    batch(function(events, done) {
      gulp.start("compress", done)
    })
)
});
