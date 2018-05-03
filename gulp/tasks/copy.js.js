'use strict';

module.exports = function() {

  $.gulp.task('copy:js', function() {
    return $.gulp.src([
      'src/js/uncompressed.js',
      'src/js/map.js',
      'src/js/map-berlin.js',
      'src/js/map-dusseldorf.js',
      'src/js/map-frankfurt.js',
      'src/js/map-hamburg.js',
      'src/js/map-munchen.js',
      'src/js/map-stuttgart.js'
    ])
      .pipe($.gulp.dest($.config.root + '/assets/js'))
  })

};
