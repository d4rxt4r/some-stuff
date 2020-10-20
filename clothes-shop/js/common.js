$(document).ready(function(){
  // SMOOTH SCROLLING
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        $('a[href*="#"]:not([href="#"])').blur();
        return false;
      }
    }
  });
  // BUTTON WARP
  $("#shop").click(function() {
    $("#shop").blur();
    $('html, body').animate({
      scrollTop: $("#hot").offset().top
    }, 500);
  });
  // CAROUSEL CONTROL
  $(".carousel-control-prev").click(function() {
    $("#hotCarousel").carousel("prev");
  });
  $(".carousel-control-next").click(function() {
    $("#hotCarousel").carousel("next");
  });
});