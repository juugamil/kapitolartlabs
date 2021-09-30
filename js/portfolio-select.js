$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        if (val == $('.portfolio-card').attr('id')) {
            $("#" + val).show();
            console.log(val);
        } else {
            $("div.portfolio-card").hide();
        };
    });
});