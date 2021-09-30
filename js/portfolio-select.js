$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        if (val === "0") {
            $("div.portfolio-card").show();
        } else if (val === "1") {
            $("div.portfolio-card").hide();
            $("#category-branding").show();
        } else if (val === "2") {
            $("div.portfolio-card").hide();
            $("#category-webdesign").show();
        } else if (val === "3") {
            $("div.portfolio-card").hide();
            $("#category-intdesign").show();
        } else if (val === "4") {
            $("div.portfolio-card").hide();
            $("#category-workshops").show();
        };
    });
});