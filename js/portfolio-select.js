$(document).ready(function () {
    var div = document.getElementById('portfolio-stack');
    var divs = div.getElementsByTagName('div');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        divArray.push(divs[i].innerHTML);
    };

    console.log(divArray[1]);

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