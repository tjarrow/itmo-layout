$(document).ready(function () {
    $('.menu-btn').on ('click', function() {
          $('nav').toggleClass('nav_active');
        $(this).toggleClass('.menu-btn_clicked');
    });

    $('#map-container').hover(function() {
      $(this).removeClass('black-and-white');
      $('#map').css('opacity','1');
    })

    $('#map-show').on('click', function() {
      $('html, body').animate({ scrollTop: $('#map').offset().top }, 700);
       return false;
    })
})
