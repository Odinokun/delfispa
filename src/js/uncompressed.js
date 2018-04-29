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
    'productcard',
    'productcard-nerida',
    'productcard-marbella',
    'productcard-santorin'
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


// begin catalog-filter

// begin объявление фильтров
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
  },
  change: function( event, ui ) {
    filter()
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
  },
  change: function( event, ui ) {
    filter()
  }
});
// end catalog-form__price input


// begin catalog-form__persons input
$('#catalog-form__persons').slider({
  range: 'min',
  min: 0,
  max: 8,
  animate: true,
  stop: function(event, ui) {
    $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",0));
  },
  // slide: function(event, ui){
  //   $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",0));
  // },
  change: function( event, ui ) {
    var val = ($("input#maxPersonsCost").val());
    $('.catalog-form__persons-people').attr('data-peoplesfilter', val);
    filter()
  }
});
// end catalog-form__price input

// begin фильтр по клику на чекбокс
$("#catalog-form__by-stock input").change(function () {
    filter()
});
// end фильтр по клику на чекбокс


  //begin обнуление фильтров
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
    $('.catalog-form__persons-people').attr('data-peoplesfilter', 0);
  }
  //end обнуление фильтров
// end объявление фильтров

// begin filters sort
function filter() {
  // скрываем все карточки товара
  $('.catalog-item').fadeOut(0);

  // получаем значение чекбокса про наличие товара на складе
  var checkStock = $("#catalog-form__by-stock input").prop("checked");
  if (checkStock === true){
    checkStock = 1;
  } else {
    checkStock = 0;
  }

  // получаем min/max значение слайдера прайса
  var sliderPriceMinVal = $('input#minPriceCost').val();
  var sliderPriceMaxVal = $('input#maxPriceCost').val();

  // получаем min/max значение слайдера размера
  var sliderSizeMinVal = $('input#minSizeCost').val();
  var sliderSizeMaxVal = $('input#maxSizeCost').val();

  // получаем значение фильтра кол-ва людей
  var sliderPersonsVal = $('#catalog-form__persons').slider('value');


  // выбор запускаемой функции в зависимости
  // от активированных фильтров
  if (checkStock === 0 && sliderPersonsVal === 0) {
    sortCard01();
  } else if (checkStock === 0 && sliderPersonsVal > 0) {
    sortCard02();
  } else if (checkStock === 1 && sliderPersonsVal === 0) {
    sortCard03();
  } else if (checkStock === 1 && sliderPersonsVal > 0) {
    sortCard04();
  }

  // если чекбокс и фильтр людей выключены
  function sortCard01() {
    var finalCards = $('.catalog-item').filter(function() {
      if ( $(this).data("price") >= sliderPriceMinVal
        && $(this).data("price") <= sliderPriceMaxVal
        && $(this).data("size") >= sliderSizeMinVal
        && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }
  // если чекбокс выключен а фильтр людей включен
  function sortCard02() {
    var finalCards = $('.catalog-item').filter(function() {
      if ( $(this).data("peoples") === sliderPersonsVal
        && $(this).data("price") >= sliderPriceMinVal
        && $(this).data("price") <= sliderPriceMaxVal
        && $(this).data("size") >= sliderSizeMinVal
        && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }
  // если фильтр людей выключен а чекбокс включен
  function sortCard03() {
    var finalCards = $('.catalog-item').filter(function() {
      if ( $(this).data("stock") === checkStock
        && $(this).data("price") >= sliderPriceMinVal
        && $(this).data("price") <= sliderPriceMaxVal
        && $(this).data("size") >= sliderSizeMinVal
        && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }
  // если фильтр людей и чекбокс включены
  function sortCard04() {
    var finalCards = $('.catalog-item').filter(function() {
      if ( $(this).data("stock") === checkStock
        && $(this).data("peoples") === sliderPersonsVal
        && $(this).data("price") >= sliderPriceMinVal
        && $(this).data("price") <= sliderPriceMaxVal
        && $(this).data("size") >= sliderSizeMinVal
        && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }
}
// end filters sort

// end catalog-filter