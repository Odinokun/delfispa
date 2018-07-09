module.exports = function() {

  // begin accordion

  // $('.faq-accordion__row').on('click', function () {
  //   $('.faq-accordion__row').removeClass('active');
  //   $(this).addClass('active');
  //
  //   $('.faq-accordion__answer').slideUp();
  //   $(this).find('.faq-accordion__answer').slideDown();
  // });

  // $('.faq-accordion__row').on('click', function () {
  //   $(this).toggleClass('active');
  //   $(this).find('.faq-accordion__answer').slideToggle();
  // });

  $('.faq-accordion__row').on('click', function () {
    if ($(this).hasClass('active')) {
      $('.faq-accordion__row').removeClass('active');
      $(this).find('.faq-accordion__answer').slideUp();
    } else {
      $('.faq-accordion__row').removeClass('active');
      $(this).addClass('active');
      $('.faq-accordion__answer').slideUp();
      $(this).find('.faq-accordion__answer').slideDown();
    }
  });

  // end accordion

};