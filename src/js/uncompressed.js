// BEGIN Меню для навигации при разработке
//**************
// should be commented before production
//**************

$(document).ready(function ($) {
  pageWidget([
    'index',
    'agb',
    'article-01',
    'article-02',
    'article-03',
    'article-04',
    'article-05',
    'blog',
    'brand',
    'catalog',
    'contacts',
    'datenschutz',
    'haftungsausschluss',
    'impressum',
    'faq',
    'news',
    'order',
    'productcard-nerida',
    'productcard-marbella',
    'productcard-santorin',
    'reviews',
    'review',
    'review-pdf',
    'shops'
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
  min: 5500,
  max: 13000,
  values: [5500,13000],
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
  min: 2,
  max: 2.5,
  step: 0.1,
  values: [2,2.5],
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
    $('.catalog-item').fadeIn();
    console.log('fack');
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
      if ( $(this).data("peoples") >= sliderPersonsVal
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
        && $(this).data("peoples") >= sliderPersonsVal
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


// begin передача выбранной модели
// из карточки товара в форму заказа на странице order.html
$('.productcard-tab__basket-btn').on('click', function () {
  var model = $('.productcard-tab__basket-btn').data('btn');
  localStorage.setItem('selectModel', model);
  console.log(localStorage.getItem('selectModel'));
});

$( ".order-select--model" ).selectmenu({
  create: function( event, ui ) {
    var model = localStorage.getItem('selectModel');
    $('.order-select--model').val(model);
    $(".order-select--model").selectmenu("refresh");
  }
});
// end передача выбранной модели
// из карточки товара в форму заказа на странице order.html




// begin отправка формы на странице контактов
$("#contact-form").submit(function() {
  $.ajax({
    type: "POST",
    url: "assets/php/form.php",
    data: $(this).serialize()
  }).done(function() {
    $('#contact-form')[0].reset();
    $('.popup-success__layer').fadeIn();
  });
  return false;
});
// end   отправка формы на странице контактов

// begin отправка формы на странице заказа
$("#order-form").submit(function() {
  $.ajax({
    type: "POST",
    url: "assets/php/order.php",
    data: $(this).serialize()
  }).done(function() {
    $('#order-form')[0].reset();
    $('.popup-success__layer').fadeIn();
  });
  return false;
});
// end   отправка формы на странице заказа

$('.popup-sussess__close').on('click', function () {
    $('.popup-success__layer').fadeOut();
});