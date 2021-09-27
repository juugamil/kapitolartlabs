$(document).ready(function () {
    $('#radiusSelect').on('change', function () {
        var demovalue = $(this).val();
        $("div.portfolio-card").hide();
        $("#" + demovalue).show();
    });
});