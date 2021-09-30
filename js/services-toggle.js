$(document).ready(function () {
  $('.services-list-block').on('click', function () {
    $(this).children().show();
    $('.service-description').not(this).hide();
  });
});