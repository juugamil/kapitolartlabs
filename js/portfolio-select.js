$(document).ready(function () {
    $("#radiusSelect").change(function () {
        var val = $(this).val();
        var valid = $("portfolio-card").attr('id')
        if (val === valid){
            $(valid).addClass("visible");
            console.log(valid);
        } else {
            $("portfolio-card").addClass("hide");
        };
    });
});