$(document).ready(function () {
    $(document).ready(function () {
        $("#radiusSelect").change(function () {
            $(this).find("option:selected").each(function () {
                var optionValue = $(this).attr("value");
                if (optionValue) {
                    $(".portfolio-card").not("." + optionValue).hide();
                    $("." + optionValue).show();
                } else if (optionValue = "All") {
                    $(".portfolio-card").show();
                }
                else {
                    $(".portfolio-card").hide();
                }
            });
        }).change();
    });
});