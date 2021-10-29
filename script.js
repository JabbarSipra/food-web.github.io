$(document).ready(function () {
     $('#menu').click(function () {
          $(this).toggleClass('fa-times');
          $('.navbar').toggleClass('nav-toggle');

     });


});
$(document).ready(function () {
     $('nav').click(function () {
          $(this).toggleClass('nav-toggle');
          $('#menu').toggleClass('fa-times');

     });

     $(window).on('load scroll', function () {
          $('#menu').removeClass('fa-times');
          $('.navbar').removeClass('nav-toggle');

          if ($(window).scrollTop() > 0) {
               $('#scrol-top').show();
          }
          else {
               $('#scrol-top').hide();
          }
     });

});
