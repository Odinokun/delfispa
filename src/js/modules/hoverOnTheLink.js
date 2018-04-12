module.exports = function() {

  // begin Hover on the link in slider

  $('.tips-slider__link').hover(f_One, f_Two);

  // mouse on the link
  function f_One() {
    $(this).parents('.tips-slider__img').addClass('active');
  }

  // mouse out of the link
  function f_Two() {
    $(this).parents('.tips-slider__img').removeClass('active');
  }

  // end Hover on the link in slider

};