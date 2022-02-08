$(document).ready(function () {
  $(".services-list-block").on('click', function () {
    $('.service-description').removeClass("show"); 
    $(this).children().addClass("show");
    $('.image-slider').removeClass("show"); 
    $(this).children().addClass("show");
  });
});