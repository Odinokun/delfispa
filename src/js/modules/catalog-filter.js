module.exports = function() {

  // // begin catalog-filter
  //
  //   // begin объявление фильтров
  //   // begin catalog-form__price input
  //     $('#catalog-form__price').slider({
  //       min: 0,
  //       max: 40000,
  //       values: [0,40000],
  //       range: true,
  //       animate: true,
  //       stop: function(event, ui) {
  //         $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
  //         $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
  //       },
  //       slide: function(event, ui){
  //         $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
  //         $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
  //       }
  //     });
  //   // end catalog-form__price input
  //
  //   // begin catalog-form__size input
  //     $('#catalog-form__size').slider({
  //       min: 0,
  //       max: 4,
  //       step: 0.1,
  //       values: [0,4],
  //       range: true,
  //       animate: true,
  //       stop: function(event, ui) {
  //         $("input#minSizeCost").val($("#catalog-form__size").slider("values",0));
  //         $("input#maxSizeCost").val($("#catalog-form__size").slider("values",1));
  //       },
  //       slide: function(event, ui){
  //         $("input#minSizeCost").val($("#catalog-form__size").slider("values",0));
  //         $("input#maxSizeCost").val($("#catalog-form__size").slider("values",1));
  //       }
  //     });
  //   // end catalog-form__price input
  //
  //
  //   // begin catalog-form__persons input
  //     $('#catalog-form__persons').slider({
  //       range: 'min',
  //       min: 1,
  //       max: 8,
  //       animate: true,
  //       stop: function(event, ui) {
  //         $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",1));
  //       },
  //       slide: function(event, ui){
  //         $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",1));
  //       },
  //       change: function( event, ui ) {
  //         var val = ($("input#maxPersonsCost").val());
  //         $('.catalog-form__persons-people').attr('data-peoplesfilter', val);
  //       }
  //     });
  //   // end catalog-form__price input
  //
  //   function resetSlider() {
  //     var sliderPrice = $('#catalog-form__price');
  //     var sliderSize = $('#catalog-form__size');
  //     var sliderPersons = $('#catalog-form__persons');
  //
  //     var optionsPrice    = $(sliderPrice).slider( 'option' );
  //     var optionsSize     = $(sliderSize).slider( 'option' );
  //     var optionsPersons  = $(sliderPersons).slider( 'option' );
  //
  //     sliderPrice.slider('values', [ optionsPrice.min, optionsPrice.max ]);
  //     sliderSize.slider('values', [ optionsSize.min, optionsSize.max ]);
  //     sliderPersons.slider('value', optionsPersons.min);
  //     $('.catalog-form__persons-people').attr('data-peoplesfilter', 1);
  //   }
  //   // end объявление фильтров
  //
  //   // begin filters sort
  //
  //   // $('.catalog-item').fadeOut();
  //   // var odinokun = $('.catalog-item').filter(function() {
  //   //   return $(this).data("price") == '10000';
  //   // });
  //   // odinokun.fadeIn();
  //
  //
  //   function filter() {
  //     $('.catalog-item').fadeOut();
  //     var odinokun = $('.catalog-item').filter(function() {
  //       return $(this).data("price") == '10000';
  //     });
  //
  //     odinokun.fadeIn();
  //   }
  //   // end filters sort
  //
  //
  //
  //
  // // end catalog-filter

};
