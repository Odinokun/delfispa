module.exports = function() {

  //begin jquery UI

    // begin стилизация кастомного селекта в картах
      $(function () {
        $( ".shops-map__city-select" ).selectmenu({
          appendTo:".shops-map__city-select-wrap",
          width:240,
          position: {
            my:"left top",
            at:"left top+38"
          }
        });
      });
    //end стилизация кастомного селекта в картах

  //end jquery UI

};