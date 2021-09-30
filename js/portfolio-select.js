$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        if (val == "All") {
            $("div.portfolio-card").show();
        } else if (val == $('.portfolio-card').attr('id')) {
            $("#" + val).show();
            console.log(val);
        } else if (val !== $('.portfolio-card').attr('id')) {
            $(".portfolio-card").hide();
        };
    });
});