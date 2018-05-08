module.exports = function() {

  // begin popup open
  $('.footer-btn--popup').on('click', function(e) {
    e.preventDefault();
    $('.popup__layer').fadeIn();
  });
  // end popup open

  // begin popup close
  $('.popup-close').on('click', function() {
    $('.popup__layer').fadeOut();
  });
  // end popup close

  // begin popup scroll
  // $(window).on('scroll', function() {
  //   $('.popup').css({'top': $(window).scrollTop() + 50});
  // }).scroll();
  // end popup scroll

};