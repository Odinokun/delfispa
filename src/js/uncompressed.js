// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'article-01',
    'article-02',
    'reviews',
    'review',
    'review-pdf',
    'faq',
    'shops',
    'shop-one',
    'catalog',
    'productcard'
  ]);
});

function pageWidget(pages) {
  var widgetWrap = $('<div class="widget_wrap"><ul class="widget_list"></ul></div>');
  widgetWrap.prependTo("body");
  for (var i = 0; i < pages.length; i++) {
    $('<li class="widget_item"><a class="widget_link" href="'
      + pages[i]
      + '.html'
      + '">'
      + pages[i]
      + '</a></li>').appendTo('.widget_list');
  }
  var widgetStilization = $('<style>body {position:relative} .widget_wrap{position:fixed;top:0;left:0;z-index:19999;padding:10px 20px;background:#222;border-bottom-right-radius:10px;-webkit-transition:all .3s ease;transition:all .3s ease;-webkit-transform:translate(-100%,0);-ms-transform:translate(-100%,0);transform:translate(-100%,0)}.widget_wrap:after{content:" ";position:absolute;top:0;left:100%;width:24px;height:24px;background:#222 url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQAgMAAABinRfyAAAABGdBTUEAALGPC/xhBQAAAAxQTFRF////////AAAA////BQBkwgAAAAN0Uk5TxMMAjAd+zwAAACNJREFUCNdjqP///y/DfyBg+LVq1Xoo8W8/CkFYAmwA0Kg/AFcANT5fe7l4AAAAAElFTkSuQmCC) no-repeat 50% 50%;cursor:pointer}.widget_wrap:hover{-webkit-transform:translate(0,0);-ms-transform:translate(0,0);transform:translate(0,0)}.widget_item{padding:0 0 10px}.widget_link{color:#fff;text-decoration:none;font-size:15px;}.widget_link:hover{text-decoration:underline} </style>');
  widgetStilization.prependTo(".widget_wrap");
}
// END Меню для навигации при разработке


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



// begin catalog-form__price input
$('#catalog-form__price').slider({
  min: 0,
  max: 40000,
  values: [0,40000],
  range: true,
  animate: true,
  stop: function(event, ui) {
    $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
  },
  slide: function(event, ui){
    $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
  }
});
// end catalog-form__price input


// begin catalog-form__size input
$('#catalog-form__size').slider({
  min: 0,
  max: 4,
  step: 0.1,
  values: [0,4],
  range: true,
  animate: true,
  stop: function(event, ui) {
    $("input#minSizeCost").val($("#catalog-form__size").slider("values",0));
    $("input#maxSizeCost").val($("#catalog-form__size").slider("values",1));
  },
  slide: function(event, ui){
    $("input#minSizeCost").val($("#catalog-form__size").slider("values",0));
    $("input#maxSizeCost").val($("#catalog-form__size").slider("values",1));
  }
});
// end catalog-form__price input


// begin catalog-form__persons input
$('#catalog-form__persons').slider({
  range: 'min',
  min: 1,
  max: 8,
  animate: true,
  stop: function(event, ui) {
    $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",1));
  },
  slide: function(event, ui){
    $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",1));
  },
  change: function( event, ui ) {
    var val = ($("input#maxPersonsCost").val());
    $('.catalog-form__persons-people').attr('data-peoplesfilter', val);
  }
});
// end catalog-form__price input

function resetSlider() {
  var sliderPrice = $('#catalog-form__price');
  var sliderSize = $('#catalog-form__size');
  var sliderPersons = $('#catalog-form__persons');

  var optionsPrice    = $(sliderPrice).slider( 'option' );
  var optionsSize     = $(sliderSize).slider( 'option' );
  var optionsPersons  = $(sliderPersons).slider( 'option' );

  sliderPrice.slider('values', [ optionsPrice.min, optionsPrice.max ]);
  sliderSize.slider('values', [ optionsSize.min, optionsSize.max ]);
  sliderPersons.slider('value', optionsPersons.min);
  $('.catalog-form__persons-people').attr('data-peoplesfilter', 1);
}


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
});
$('.aside-tab__card-close').on('click', function () {
  $('.aside-tab__item').removeClass('active');
  $('.aside-tab__card').removeClass('active');
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