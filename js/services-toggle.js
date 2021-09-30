$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $('service-description').not(this).hide();
    $(this).children().removeClass("hide");
  });
});