var gulp = require('gulp');
var handlebars = require('gulp-compile-handlebars');
var rename = require('gulp-rename');

gulp.task('default', function() {
  var templateData = {
    firstName: "Brad"
  },
  options = {
    ignorePartials: true,
    partials: {
      footer: '<footer>the end</footer>'
    },
    helpers: {
      capitals: function(str) {
        return str.toUpperCase();
      }
    }
  }

  return gulp.src('src/hello.handlebars')
    .pipe(handlebars(templateData, options))
    .pipe(rename('hello.html'))
    .pipe(gulp.dest('dist'));
});
