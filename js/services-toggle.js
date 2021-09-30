$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $(this).children().removeClass("hide");
    $(this).not(".hide").addClass("hide");
  });
});