$(document).ready(function () {
    $('.services-list-block').on('click',function(){
      $('.service-description').not(this).each(function(){
        $(this).hide();
    });
    $(this).children().show();
      });
});