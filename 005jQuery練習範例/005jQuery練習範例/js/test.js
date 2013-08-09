$(document).ready(function () {
    $("#OnClick").click(function () {
        var div = $("table");
        div.animate({ height: 300 }, "slow");
        div.animate({ width: 300 }, "slow");
        div.animate({ height: 100 }, "slow");
        div.animate({ width: 100 }, "slow");
    });




});