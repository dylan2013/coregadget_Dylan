$(document).ready(function () {
    $("#add_button").click(function () {
        $(".test2").append("<tr><td>資料行</td><td><input id='clearRow' type='button' value='刪除本行' onclick='delRow(this)'/></td></tr>");
        rowindex = rowindex + 1;
        $(".ppand").html("這是數字:" + rowindex.toString());
    });
});

var rowindex = 1;

function delRow(elem) {
    var row = $(elem).parent().parent();
    row.fadeOut('normal', function () {
        row.remove();
    });
    rowindex = rowindex - 1;
    $(".ppand").html("這是數字:" + rowindex.toString());
};