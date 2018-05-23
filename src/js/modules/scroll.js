module.exports = function() {

  //begin custom scroll

  $(function () {
    if (document.body.clientWidth > 1024) {
      $(".compare-body__inn").niceScroll({
        cursoropacitymin: 1,
        cursorborder: "0px solid transparent",
        cursorborderradius:"8px",
        cursorcolor:"#2bdafa",
        cursorwidth:"15px",
        railpadding: { top: -40, right: 0, left: 0, bottom: 0 },
        cursordragontouch: true,
        background:'#f1f7f8',
        touchbehavior: true,
        preventmultitouchscrolling: false
      });
    }
  });

  //end custom scroll

};