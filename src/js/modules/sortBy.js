module.exports = function() {

  // begin Sort By name/popular

  // Указываем глобальные переменные для последующего обращения к ним
    var linkSorted = $('.catalog-form__sort-by-link');
    var sortContainer = $('.catalog-list');
  // Здесь мы указываем только имя класса. Ну или как вам будет удобней :)
    var sortContent = '.catalog-item';
  // Нажатие на тип сортировки
    linkSorted.click(function() {
      // Получаем атрибут типа..
      var dataType = $(this).data('type');
      // ..и передаем его в функцию сортировки элементов
      sortElements(dataType);
      return false;
    });

  // Сортируем контент по дата атрибуту
    function sortElements(type) {
      // Обращаемся к js-sort-content[data-id/name] и вызываем метод sort
      $(sortContent + '[data-'+ type +']').sort(function(a, b) {
        // где a и b это два сравниваемых элемента.
        // Здесь уже идет условие, где мы их сравниваем и по этому принципу сортируем.
        // Вместо > можно поставить < и тогда сортировка будет идти от меньшего к большему.
        return $(a).data(type) < $(b).data(type) ? -1 : 1;
        // В конце мы через appendTo запихиваем результат в контейнер.
      }).appendTo(sortContainer);
    }


    $(linkSorted).on('click', function () {
      $(linkSorted).removeClass('active');
      $(this).addClass('active');
    })

  // end Sort By name/popular

};