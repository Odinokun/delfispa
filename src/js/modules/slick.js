module.exports = function() {

  // begin Slick slider

  // begin top-slider in index.html
  $('#top-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });
  // end top-slider in index.html

  // begin reviews-slider in index.html
  $('#reviews-slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    arrows: false,
    autoplay: true,
    cssEase: 'linear'
  });
  // end reviews-slider in index.html

  // begin catalog-slider in index.html
  $('#catalog-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end catalog-slider in index.html

  // begin productcard-slider in index.html
  $('#productcard-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end productcard-slider in index.html

  // begin tips-slider in index.html
  $('#tips-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 1401,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 1001,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  // end tips-slider in index.html


  // begin productcard-top-slider
  $('#productcard-top__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    infinite:false,
    asNavFor: '#productcard-top__slider-thumb'
  });

  $('#productcard-top__slider-thumb').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical:true,
    asNavFor: '#productcard-top__slider',
    dots: false,
    focusOnSelect: true,
    centerMode: true,
    infinite:false,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 4,
          centerMode: false,
          vertical:false
        }
      },
      {
        breakpoint: 551,
        settings: {
          slidesToShow: 2,
          centerMode: false,
          vertical:false
        }
      }
    ]
  });

  // Remove active class from all thumbnail slides
  $('#productcard-top__slider-thumb .slick-slide').removeClass('slick-active');

  // Set active class to first thumbnail slides
  $('#productcard-top__slider-thumb .slick-slide').eq(0).addClass('slick-active');

  // On before slide change match active thumbnail to current slide
  $('#productcard-top__slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
    var mySlideNumber = nextSlide;
    $('#productcard-top__slider-thumb .slick-slide').removeClass('slick-active');
    $('#productcard-top__slider-thumb .slick-slide').eq(mySlideNumber).addClass('slick-active');
  });
  // end productcard-top-slider

  // end Slick slider

};