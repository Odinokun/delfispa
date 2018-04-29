module.exports = function() {

  // begin menu

  // begin mobile menu
    $('.left-menu-burger--open, .left-menu-burger--close').on('click', function () {
      $('#left-menu__wrap').toggleClass('active');
      $('#left-menu').toggleClass('active');
      $('.left-menu-burger--open, .left-menu-burger--close').toggleClass('active');
    });
  // end mobile menu

  // begin mobile submenu
    $('.left-menu__dot-dot-dot').on('click', function () {
      $(this).siblings('.left-menu__sublist').slideToggle();
    });
  // end mobile submenu

  // end menu

};