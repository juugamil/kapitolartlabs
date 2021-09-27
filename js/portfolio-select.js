$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        var valid = "#" + val; 
        if (val === $('portfolio-card').attr('id')){
            $(valid).addClass("visible");
        } else {
            $(".portfolio-card").addClass("hide");
        }
    });
});