$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $(this).children().removeClass("hide");
    $('.services-list-block').not(this).children().addClass("hide");
  });
});