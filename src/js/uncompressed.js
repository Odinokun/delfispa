// begin catalog-filter

// begin объявление фильтров
// begin catalog-form__price input
$('#catalog-form__price').slider({
  min: 5600,
  max: 7500,
  values: [5600, 7500],
  range: true,
  animate: true,
  stop: function (event, ui) {
    $("input#minPriceCost").val($("#catalog-form__price").slider("values", 0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values", 1));
    filter();
  },
  slide: function (event, ui) {
    $("input#minPriceCost").val($("#catalog-form__price").slider("values", 0));
    $("input#maxPriceCost").val($("#catalog-form__price").slider("values", 1));
  }
});
// end catalog-form__price input

// begin catalog-form__size input
$('#catalog-form__size').slider({
  min: 2,
  max: 2.5,
  step: 0.1,
  values: [2, 2.5],
  range: true,
  animate: true,
  stop: function (event, ui) {
    $("input#minSizeCost").val($("#catalog-form__size").slider("values", 0));
    $("input#maxSizeCost").val($("#catalog-form__size").slider("values", 1));
    filter();
  },
  slide: function (event, ui) {
    $("input#minSizeCost").val($("#catalog-form__size").slider("values", 0));
    $("input#maxSizeCost").val($("#catalog-form__size").slider("values", 1));
  }
});
// end catalog-form__price input


// begin catalog-form__persons input
$('#catalog-form__persons').slider({
  range: 'min',
  min: 0,
  max: 8,
  animate: true,
  stop: function (event, ui) {
    $("input#maxPersonsCost").val($("#catalog-form__persons").slider("values", 0));
    filter();
  },
  change: function (event, ui) {
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

// begin фильтр по клику на чекбокс
$("#catalog-form__man-filter input").change(function () {
  filter();
});
// end фильтр по клику на чекбокс


//begin обнуление фильтров
function resetSlider() {
  var sliderPrice = $('#catalog-form__price');
  var sliderSize = $('#catalog-form__size');
  var sliderPersons = $('#catalog-form__persons');
  //
  var optionsPrice = $(sliderPrice).slider('option');
  var optionsSize = $(sliderSize).slider('option');
  var optionsPersons = $(sliderPersons).slider('option');
  //
  sliderPrice.slider('values', [optionsPrice.min, optionsPrice.max]);
  sliderSize.slider('values', [optionsSize.min, optionsSize.max]);
  sliderPersons.slider('value', optionsPersons.min);
  $('.catalog-form__persons-people').attr('data-peoplesfilter', 0);
  $('#catalog-form__man-filter input').attr('checked',false);
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
  if (checkStock === true) {
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

  // получаем значение фильтра кол-ва лежанок
  var manLounge = $('.catalog-form__man-item input:checked').val();
  
  console.log(manLounge);


  // выбор запускаемой функции в зависимости
  // от активированных фильтров
  if (checkStock === 0 && sliderPersonsVal === 0 && manLounge == 0) {
    sortCard01();
  } else if (checkStock === 0 && sliderPersonsVal > 0 && manLounge == 0) {
    sortCard02();
  } else if (checkStock === 1 && sliderPersonsVal === 0 && manLounge == 0) {
    sortCard03();
  } else if (checkStock === 1 && sliderPersonsVal > 0 && manLounge == 0) {
    sortCard04();
  } else if (checkStock === 0 && sliderPersonsVal === 0 && manLounge >= 2) {
    sortCard05();
  } else if (checkStock === 0 && sliderPersonsVal > 0 && manLounge >= 2) {
    sortCard06();
  } else if (checkStock === 1 && sliderPersonsVal === 0 && manLounge >= 2) {
    sortCard07();
  } else if (checkStock === 1 && sliderPersonsVal > 0 && manLounge >= 2) {
    sortCard08();
  }

  // если чекбокс выключен, фильтр людей выключен, лежанки выключены
  function sortCard01() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если чекбокс выключен, фильтр людей включен, лежанки выключены
  function sortCard02() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("peoples") >= sliderPersonsVal
          && $(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если фильтр людей выключен, чекбокс включен, лежанки выключены
  function sortCard03() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("stock") === checkStock
          && $(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если фильтр людей включен, чекбокс включен, лежанки выключены
  function sortCard04() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("stock") === checkStock
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

  // если чекбокс выключен, фильтр людей выключен, лежанки включены
  function sortCard05() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal
          && $(this).data("lounge") == manLounge) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если чекбокс выключен, фильтр людей включен, лежанки включены
  function sortCard06() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("peoples") >= sliderPersonsVal
          && $(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal
          && $(this).data("lounge") == manLounge) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если фильтр людей выключен, чекбокс включен, лежанки включены
  function sortCard07() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("stock") === checkStock
          && $(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal
          && $(this).data("lounge") == manLounge) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // если фильтр людей включен, чекбокс включен, лежанки включены
  function sortCard08() {
    var finalCards = $('.catalog-item').filter(function () {
      if ($(this).data("stock") === checkStock
          && $(this).data("peoples") >= sliderPersonsVal
          && $(this).data("price") >= sliderPriceMinVal
          && $(this).data("price") <= sliderPriceMaxVal
          && $(this).data("size") >= sliderSizeMinVal
          && $(this).data("size") <= sliderSizeMaxVal
          && $(this).data("lounge") == manLounge) {
        return $(this);
      }
    });
    finalCards.fadeIn();
  }

  // $(manLounge).fadeIn();

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

$(".order-select--model").selectmenu({
  create: function (event, ui) {
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
  if (agree === false) {
    $(this).siblings('.agree-text').fadeIn(0);
  } else {
    $(this).siblings('.agree-text').fadeOut(0);
  }
});
// end показ/скрытие уведомления про обязательность чекбокса в форме

// begin отправка формы на странице контактов
$("#contact-form").submit(function () {
  var agree = $("#contact-form .agree-label input").prop("checked");
  var agreeText = $("#contact-form .agree-text");

  if (agree === false) {
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/form.php",
      data: $(this).serialize()
    }).done(function () {
      $('#contact-form')[0].reset();
      $('.popup-success__layer').fadeIn();
    });
  }
  return false;
});
// end   отправка формы на странице контактов

// begin отправка формы на странице заказа
$("#order-form").submit(function () {
  var agree = $("#order-form .agree-label input").prop("checked");
  var agreeText = $("#order-form .agree-text");

  if (agree === false) {
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/order.php",
      data: $(this).serialize()
    }).done(function () {
      $('#order-form')[0].reset();
      $('.popup-success__layer').fadeIn();
    });
  }
  return false;
});
// end   отправка формы на странице заказа

// begin отправка формы в popup
$("#popup-form").submit(function () {
  var agree = $("#popup-form .agree-label input").prop("checked");
  var agreeText = $("#popup-form .agree-text");

  if (agree === false) {
    agreeText.fadeIn();
  } else {
    agreeText.fadeOut();
    $.ajax({
      type: "POST",
      url: "assets/php/popup.php",
      data: $(this).serialize()
    }).done(function () {
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
$('#select-color').on('selectmenuchange', function () {
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

// begin bg-gradient in banner
var colors = new Array(
    [79, 172, 254],
    [0, 242, 254],
    [79, 172, 254],
    [0, 242, 254],
    [79, 172, 254],
    [0, 242, 254]);
// [62,35,255],
// [60,255,60],
// [255,35,98],
// [45,175,230],
// [255,0,255],
// [255,128,0]);

var step = 0;
//color table indices for:
// current color left
// next color left
// current color right
// next color right
var colorIndices = [0, 1, 2, 3];

//transition speed
var gradientSpeed = 0.002;

function updateGradient() {

  if ($ === undefined) return;

  var c0_0 = colors[colorIndices[0]];
  var c0_1 = colors[colorIndices[1]];
  var c1_0 = colors[colorIndices[2]];
  var c1_1 = colors[colorIndices[3]];

  var istep = 1 - step;
  var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
  var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
  var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
  var color1 = "rgb(" + r1 + "," + g1 + "," + b1 + ")";

  var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
  var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
  var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
  var color2 = "rgb(" + r2 + "," + g2 + "," + b2 + ")";

  $('#gradient').css({
    background: "-webkit-gradient(linear, left top, right top, from(" + color1 + "), to(" + color2 + "))"
  }).css({background: "-moz-linear-gradient(left, " + color1 + " 0%, " + color2 + " 100%)"});

  step += gradientSpeed;
  if (step >= 1) {
    step %= 1;
    colorIndices[0] = colorIndices[1];
    colorIndices[2] = colorIndices[3];

    //pick two new target color indices
    //do not pick the same as the current one
    colorIndices[1] = ( colorIndices[1] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;
    colorIndices[3] = ( colorIndices[3] + Math.floor(1 + Math.random() * (colors.length - 1))) % colors.length;

  }
}

setInterval(updateGradient, 10);
// end bg-gradient in banner


// begin образцы цветов в селекте карточки
$("#select-color").selectmenu({
  create: function (event, ui) {
    var currColor = $('#select-color').val();
    var currColorBg = 'url("assets/img/colors/' + currColor + '.jpg")';

    $('#select-color__wrap .ui-selectmenu-button').append("<i></i>");
    $('#select-color__wrap .ui-selectmenu-button i').css("background-image", currColorBg);
  },
  open: function (event, ui) {
    $('#select-color__wrap .ui-menu-item').append("<i></i>");
    var children = $('#select-color__wrap #select-color-menu').children();
    for (var i = 0; i < children.length; i++) {
      var childrenVal = children.eq(i).children('.ui-menu-item-wrapper').html();
      var childrenBg = 'url("assets/img/colors/' + childrenVal + '.jpg")';
      children.eq(i).children('.ui-menu-item i').css("background-image", childrenBg);
    }
  },
  change: function (event, ui) {
    var currColor = $('#select-color').val();
    var currColorBg = 'url("assets/img/colors/' + currColor + '.jpg")';

    $('#select-color__wrap .ui-selectmenu-button').append("<i></i>");
    $('#select-color__wrap .ui-selectmenu-button i').css("background-image", currColorBg);
  },
});

$("#cover-color").selectmenu({
  create: function (event, ui) {
    var currColor = $('#cover-color').val();
    var currColorBg = 'url("assets/img/colors/cover/' + currColor + '.jpg")';

    $('#cover-color__wrap .ui-selectmenu-button').append("<i></i>");
    $('#cover-color__wrap .ui-selectmenu-button i').css("background-image", currColorBg);
  },
  open: function (event, ui) {
    $('#cover-color-menu .ui-menu-item').append("<i></i>");
    var children = $('#cover-color-menu').children();
    for (var i = 0; i < children.length; i++) {
      var childrenVal = children.eq(i).children('.ui-menu-item-wrapper').html();
      console.log(childrenVal);
      var childrenBg = 'url("assets/img/colors/cover/' + childrenVal + '.jpg")';
      children.eq(i).children('.ui-menu-item i').css("background-image", childrenBg);
    }
  },
  change: function (event, ui) {
    var currColor = $('#cover-color').val();
    var currColorBg = 'url("assets/img/colors/cover/' + currColor + '.jpg")';

    $('#cover-color__wrap .ui-selectmenu-button').append("<i></i>");
    $('#cover-color__wrap .ui-selectmenu-button i').css("background-image", currColorBg);
  },
});
// end образцы цветов в селекте карточки


//begin отслеживание выбранного города
// и смена карты/адресов
// в кастомном селекте
$(function () {
  $(".shops-map__city-select").selectmenu({
    open: function () {
      //удаление дублирующегося города
      $('.ui-menu-item').removeClass('active-option');
      $('.ui-state-active').parent('.ui-menu-item').addClass('active-option');
    },
    change: function () {
      var city = $(".custom-select").val();

      //удаление дублирующегося города
      $('.ui-menu-item').removeClass('active-option');
      $('.ui-state-active').parent('.ui-menu-item').addClass('active-option');

      if (city == 'all') {
        document.location.href='standorte.php'
      } else {
        document.location.href='standorte/' + city + '.php'
      }
      return false;
    }
  });
});
//end отслеживание выбранного города
// и смена карты/адресов
// в кастомном селекте