$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $(this).children().removeClass("hide");
    $('.block_header span').not($(this)).addClass("visible");
  });
});