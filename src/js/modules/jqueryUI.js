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

    // begin стилизация кастомного селекта в форме заказа
      $(function () {
        $( ".order-select" ).selectmenu({
          appendTo:".order-select-wrap",
          width:240,
          position: {
            my:"left top",
            at:"left top+38"
          }
        });
      });
    //end стилизация кастомного селекта в форме заказа

    // begin стилизация кастомного селекта в карточке товара
      $(function () {
        $( ".productcard-top__select" ).selectmenu({
          appendTo:".productcard-top__select-wrap",
          width:240,
          position: {
            my:"left top",
            at:"left top+38"
          }
        });
      });
    //end стилизация кастомного селекта в карточке товара

  //end jquery UI

};