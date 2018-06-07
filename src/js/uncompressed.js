// begin catalog-filter

// begin объявление фильтров
// begin catalog-form__price input
$('#catalog-form__price').slider({
  min: 5600,
  max: 7500,
  values: [5600,7500],
  range: true,
  animate: true,
  stop: function(event, ui) {
    $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
    filter();
  },
  slide: function(event, ui){
    $("input#minPriceCost").val($("#catalog-form__price").slider("values",0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values",1));
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
    filter();
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
  min: 0,
  max: 8,
  animate: true,
  stop: function(event, ui) {
    $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values",0));
    filter();
  },
  change: function( event, ui ) {
    var val = ($("input#maxPersonsCost").val());
    $('.catalog-form__persons-people').attr('data-peoplesfilter', val);
  }
});
// end catalog-form__price input

// begin фильтр по клику на чекбокс
$("#catalog-form__by-stock input").change(function () {
  filter();
});
// end фильтр по клику на чекбокс


//begin обнуление фильтров
function resetSlider() {
  var sliderPrice = $('#catalog-form__price');
  var sliderSize = $('#catalog-form__size');
  var sliderPersons = $('#catalog-form__persons');
  //
  var optionsPrice    = $(sliderPrice).slider( 'option' );
  var optionsSize     = $(sliderSize).slider( 'option' );
  var optionsPersons  = $(sliderPersons).slider( 'option' );
  //
  sliderPrice.slider('values', [ optionsPrice.min, optionsPrice.max ]);
  sliderSize.slider('values', [ optionsSize.min, optionsSize.max ]);
  sliderPersons.slider('value', optionsPersons.min);
  $('.catalog-form__persons-people').attr('data-peoplesfilter', 0);
  $('.catalog-item').fadeIn();
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
$('.productcard-tab__basket-btn, .catalog-item__cover-link').on('click', function () {
  var model = $(this).data('btn');
  localStorage.setItem('selectModel', model);
  // console.log(localStorage.getItem('selectModel'));
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



//begin скрытие колонок в таблице сравнения
$('.compare-table__col-close').on('click', function () {
  var closeCol = $(this).data('close');
  $('.col-' + closeCol).fadeOut();

  // изменение ширины скроллбара при скрытии колонок
  $(".compare-body__inn").getNiceScroll().resize();
});
//end скрытие колонок в таблице сравнения

// begin показ/скрытие уведомления про обязательность чекбокса в форме
$('.agree-label').click(function () {
  var agree = $(this).children('input').prop("checked");
  if (agree === false){
    $(this).siblings('.agree-text').fadeIn(0);
  } else {
    $(this).siblings('.agree-text').fadeOut(0);
  }
});
// end показ/скрытие уведомления про обязательность чекбокса в форме


// begin отправка формы на странице контактов
$("#contact-form").submit(function() {
  var agree = $("#contact-form .agree-label input").prop("checked");
  var agreeText = $("#contact-form .agree-text");

  if (agree === false){
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/form.php",
      data: $(this).serialize()
    }).done(function() {
      $('#contact-form')[0].reset();
      $('.popup-success__layer').fadeIn();
    });
  }
  return false;
});
// end   отправка формы на странице контактов

// begin отправка формы на странице заказа
$("#order-form").submit(function() {
  var agree = $("#order-form .agree-label input").prop("checked");
  var agreeText = $("#order-form .agree-text");

  if (agree === false){
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/order.php",
      data: $(this).serialize()
    }).done(function() {
      $('#order-form')[0].reset();
      $('.popup-success__layer').fadeIn();
    });
  }
  return false;
});
// end   отправка формы на странице заказа

// begin отправка формы в popup
$("#popup-form").submit(function() {
  var agree = $("#popup-form .agree-label input").prop("checked");
  var agreeText = $("#popup-form .agree-text");

  if (agree === false){
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/popup.php",
      data: $(this).serialize()
    }).done(function() {
      $('#popup-form')[0].reset();
      $('.popup__layer').fadeOut();
      $('.popup-success__layer').fadeIn();
    });
  }
  return false;
});
// end отправка формы в popup


$('.popup-sussess__close').on('click', function () {
  $('.popup-success__layer').fadeOut();
});


// begin Изменение сроков доставки
// в зависимости от выбранного цвета
$(window).on('load', function () {
  var color = $('#select-color').val();
  $('.delivery-time').fadeOut(0);
  if (color === 'Silver White Marble' || color === 'Oceanwave') {
    $('.delivery-time--fast').fadeIn();
  } else {
    $('.delivery-time--slow').fadeIn();
  }
});
$('#select-color').on('selectmenuchange', function() {
  var color = $(this).val();
  $('.delivery-time').fadeOut(0);
  if (color === 'Silver White Marble' || color === 'Oceanwave') {
    $('.delivery-time--fast').fadeIn();
  } else {
    $('.delivery-time--slow').fadeIn();
  }
});
// end Изменение сроков доставки
// в зависимости от выбранного цвета