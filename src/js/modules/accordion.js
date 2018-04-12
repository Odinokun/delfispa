module.exports = function() {

  // begin accordion

  $('.faq-accordion__row').on('click', function () {
    $('.faq-accordion__row').removeClass('active');
    $(this).addClass('active');

    $('.faq-accordion__answer').slideUp();
    $(this).find('.faq-accordion__answer').slideDown();
  });

  // end accordion

};