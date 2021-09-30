$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        if (val == "0") {
            $("div.portfolio-card").show();
        } else if (val == "1") {
            $("#category-branding").show();
        } else if (val == "2") {
            $("#category-webdesign").show();
        } else if (val == "3") {
            $("#category-intdesign").show();
        } else if (val == "4") {
            $("#category-workshops").show();
        } else {
            $("div.portfolio-card").hide();
        };
    });
});