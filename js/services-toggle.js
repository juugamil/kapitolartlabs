$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $(this).children().removeClass("hide");
    $('service-description').not(this).hide();
  });
});