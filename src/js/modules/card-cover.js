module.exports = function() {

  // begin card-cover

  $('.catalog-item__more').on('click', function () {
    $(this).parents('.catalog-item').toggleClass('active');
  });
  $('.catalog-slider__btn').on('click', function () {
    $(this).parents('.catalog-slider__item').toggleClass('active');
  });
  $('.productcard-slider__btn').on('click', function () {
    $(this).parents('.productcard-slider__item').toggleClass('active');
  });


  $(document).click(function(e){
    var elem = $(".catalog-item");
    if(e.target!=elem[0]&&!elem.has(e.target).length){
      $('.catalog-item').removeClass('active');
    }
  });

  $(document).click(function(e){
    var elem = $(".catalog-slider__item");
    if(e.target!=elem[0]&&!elem.has(e.target).length){
      $('.catalog-slider__item').removeClass('active');
    }
  });

  $(document).click(function(e){
    var elem = $(".productcard-slider__item");
    if(e.target!=elem[0]&&!elem.has(e.target).length){
      $('.productcard-slider__item').removeClass('active');
    }
  });

  // end card-cover

};