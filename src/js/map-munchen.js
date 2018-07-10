
// ***************************************//
// ********CUSTOM MAPS & filter **********//
// ***************************************//

var coords = [
  //munchen
  [48.140205, 11.678701]
];

var markers = [
  // munchen 1
  [48.140205, 11.678701]
];

var map = {};

var isDraggable = $(document).width() > 700 ? true : false;

function initialize() {
  var mapDiv = document.getElementById("shops-map");

  var image = "assets/img/marker.png";

  map = new google.maps.Map(mapDiv, {
    zoom: 16,
    disableDefaultUI: false,
    scrollwheel: false,
    draggable: isDraggable,
    center: new google.maps.LatLng(coords[0][0], coords[0][1]),
    styles: [{"featureType":"administrative","elementType":"labels.text.fill","stylers":[{"color":"#444444"}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2f2f2"}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"all","stylers":[{"saturation":-100},{"lightness":45}]},{"featureType":"road.highway","elementType":"all","stylers":[{"visibility":"simplified"}]},{"featureType":"road.arterial","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#46bcec"},{"visibility":"on"}]}]
  });

  $.each(markers, function (index, val) {
    var myLatLng = new google.maps.LatLng(val[0], val[1]);
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      icon: image
    });
  });
}
google.maps.event.addDomListener(window, "load", initialize);