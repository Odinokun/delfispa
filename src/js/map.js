
// ***************************************//
// ********CUSTOM MAPS & filter **********//
// ***************************************//

// ********** AHTUNG ************
// порядок городов (coords) не менять!!!!
// это важно для правильного выбора селекта
// ********** AHTUNG ************

var coords = [
  //all germany
  [51.283030, 9.872772],
  //berlin
  [52.534506, 13.380761],
  //dusseldorf
  [51.245249, 6.800611],
  //frankfurt
  [50.129052, 8.651664],
  //hamburg
  [53.544212, 9.978628],
  //munchen
  [48.160615, 11.553507],
  //stuttgart
  [48.773984, 9.162794]
];

var markers = [
  // berlin 1
  [52.534506, 13.380761],
  // berlin 2
  [52.524360, 13.415566],
  // berlin 3
  [52.531671, 13.357910],
  // berlin 4
  [52.542967, 13.414960],
  //dusseldorf
  [51.245249, 6.800611],
  //frankfurt
  [50.129052, 8.651664],
  //hamburg
  [53.544212, 9.978628],
  //munchen
  [48.160615, 11.553507],
  //stuttgart
  [48.773984, 9.162794]
];

var map = {};

var isDraggable = $(document).width() > 700 ? true : false;

function initialize() {
  var mapDiv = document.getElementById("shops-map");

  var image = "assets/img/marker.png";

  map = new google.maps.Map(mapDiv, {
    zoom: 6,
    disableDefaultUI: false,
    scrollwheel: false,
    draggable: isDraggable,
    center: new google.maps.LatLng(coords[0][0], coords[0][1]),
    styles: [{
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [{"color": "#444444"}]
    }, {"featureType": "landscape", "elementType": "all", "stylers": [{"color": "#f2f2f2"}]}, {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [{"visibility": "off"}]
    }, {
      "featureType": "road",
      "elementType": "all",
      "stylers": [{"saturation": -100}, {"lightness": 45}]
    }, {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [{"visibility": "simplified"}]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [{"visibility": "off"}]
    }, {"featureType": "transit", "elementType": "all", "stylers": [{"visibility": "off"}]}, {
      "featureType": "water",
      "elementType": "all",
      "stylers": [{"color": "#46bcec"}, {"visibility": "on"}]
    }]
  });

  $.each(markers, function (index, val) {
    var myLatLng = new google.maps.LatLng(val[0], val[1]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });

    // зум карты по клику на маркер
    marker.addListener("click", function () {
      map.panTo(this.getPosition());
      map.setZoom(16);
    });
  });
}
google.maps.event.addDomListener(window, "load", initialize);


$(document).ready(function ($) {

  //begin отслеживание выбранного города и смена карты/адресов в стандартном селекте
  // $(".shops-map__footer").on("change", "select", function(event) {
  //   event.preventDefault();
  //   var city = $(this).val();
  //   goToCity(city);
  //   // changeCityBlock(city);
  // });
  //end отслеживание выбранного города и смена карты/адресов в стандартном селекте

  //begin отслеживание выбранного города
  // и смена карты/адресов
  // в кастомном селекте
  $(function () {
    $(".shops-map__city-select").selectmenu({
      change: function () {
        var city = $(".custom-select").val();
        goToCity(city);
        filterShopAdressBlock(city);
        return false;
      }
    });
  });
  //end отслеживание выбранного города
  // и смена карты/адресов
  // в кастомном селекте



  // begin отслеживание выбранного города
  // в кастомном селекте и смена карты
  // при загрузке страницы
  $(window).on("load", function() {
    var city = $('.shops-map__city-select').val();
    goToCity(city);
  });
  // end отслеживание выбранного города
  // в кастомном селекте и смена карты
  // при загрузке страницы



  function goToCity(city) {
    switch (city) {
      case "stuttgart":
        map.setZoom(12);
        map.setCenter(new google.maps.LatLng(coords[6][0], coords[6][1]));
        break;
      case "munchen":
        map.setZoom(12);
        map.setCenter(new google.maps.LatLng(coords[5][0], coords[5][1]));
        break;
      case "hamburg":
        map.setZoom(12);
        map.setCenter(new google.maps.LatLng(coords[4][0], coords[4][1]));
        break;
      case "frankfurt":
        map.setZoom(12);
        map.setCenter(new google.maps.LatLng(coords[3][0], coords[3][1]));
        break;
      case "dusseldorf":
        map.setZoom(12);
        map.setCenter(new google.maps.LatLng(coords[2][0], coords[2][1]));
        break;
      case "berlin":
        map.setZoom(14);
        map.setCenter(new google.maps.LatLng(coords[1][0], coords[1][1]));
        break;
      case "all":
        map.setZoom(6);
        map.setCenter(new google.maps.LatLng(coords[0][0], coords[0][1]));
        break;
    }
  }

  //begin фильтр адресов салонов
  //по выбранному селекту
  function filterShopAdressBlock(city) {
    var block = $('.shops-adress__item');

    if (city === 'all') {
      $(block).fadeIn();
    } else {
      $(block).fadeOut();
      $('.shops-adress__item--' + city).fadeIn();
    }
  }
  //end фильтр адресов салонов
  //по выбранному селекту

});