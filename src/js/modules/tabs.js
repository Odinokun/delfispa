module.exports = function() {

  // begin tabs

    // begin productcard-tab
      $('.productcard-tab__tab').on('click', function () {
        var tab = $(this).data('tab');
        $('.productcard-tab__tab').removeClass('active');
        $('.productcard-tab__card').removeClass('active');
        $('.productcard-top__order').removeClass('active');
        $('.productcard-top__online').removeClass('active');
        $(this).addClass('active');
        $('.productcard-tab__card--' + tab).addClass('active');
        $('.productcard-top__' + tab).addClass('active');
      });
    // end productcard-tab

    // begin specifications-tabs
      $('.specifications-tab__tab').on('click', function () {
        var tab = $(this).data('tab');
        $('.specifications-tab__tab').removeClass('active');
        $('.specifications-tab__cards').removeClass('active');
        $(this).addClass('active');
        $('.specifications-tab__cards--' + tab).addClass('active');
      });
    // end specifications-tabs

    // begin aside-tabs
      $('.aside-tab__item').on('click', function () {
        var tab = $(this).data('tab');
        $(this).addClass('active');
        $('.aside-tab__card--' + tab).addClass('active');
        $('.aside-tab__layer').addClass('active');

      });
      $('.aside-tab__card-close, .aside-tab__layer').on('click', function () {
        $('.aside-tab__item').removeClass('active');
        $('.aside-tab__card').removeClass('active');
        $('.aside-tab__layer').removeClass('active');
      });
    // end aside-tabs

    // begin bath-tabs
      $('.bath-tab__main-tab').on('click', function () {
        var tab = $(this).data('tab');
        $('.bath-tab__main-tab').removeClass('active');
        $('.bath-tab__item').removeClass('active');
        $(this).addClass('active');
        $('.bath-tab__item--' + tab).addClass('active');
      });
      $('.bath-tab__bath-btn').on('click', function () {
        var tab = $(this).data('tab');
        $('.bath-tab__bath-btn').removeClass('active');
        $('.bath-tab__zones').removeClass('active');
        $(this).addClass('active');
        $('.bath-tab__zones--' + tab).addClass('active');
      });
      $('.bath-tab__bath-02-btn').on('click', function () {
        var tab = $(this).data('tab');
        $('.bath-tab__bath-02-btn').removeClass('active');
        $('.bath-tab__zones-02').removeClass('active');
        $(this).addClass('active');
        $('.bath-tab__zones-02--' + tab).addClass('active');
      });
    // end bath-tabs

  // end tabs

};