$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        if (val === "0") {
            $("#category-branding").show();
            $("#category-webdesign").show();
            $("#category-intdesign").show();
            $("#category-workshops").show();
        } else if (val === "1") {
            $("#category-webdesign").hide();
            $("#category-intdesign").hide();
            $("#category-workshops").hide();
            $("#category-branding").show();
        } else if (val === "2") {
            $("#category-branding").hide();
            $("#category-intdesign").hide();
            $("#category-workshops").hide();
            $("#category-webdesign").show();
        } else if (val === "3") {
            $("#category-branding").hide();
            $("#category-webdesign").hide();
            $("#category-workshops").hide();
            $("#category-intdesign").show();
        } else if (val === "4") {
            $("#category-branding").hide();
            $("#category-intdesign").hide();
            $("#category-webdesign").hide();
            $("#category-workshops").show();
        };
    });
});