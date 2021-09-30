$(document).ready(function () {
    var div = document.getElementById('portfolio-stack');
    var divs = div.getElementsByTagName('portfolio-card');
    var divArray = [];
    for (var i = 0; i < divs.length; i += 1) {
        divArray.push(divs[i].innerHTML);
    };

    console.log(divArray);

    $("#radiusSelect").change(function () {
        var val = $(this).val();
        console.log(divArray);

        for (i = 0; i < divArray.length; i++) {
            if (val == "All") {
                return divArray[i];
            } else if (val == divArray[i].attr('id')) {
                return divArray[i].attr(val);
            } else {
                return "Nothing to display";
            }
        }
    });
});