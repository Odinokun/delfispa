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

  // end Slick slider

};