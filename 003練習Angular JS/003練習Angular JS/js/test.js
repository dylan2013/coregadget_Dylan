$(function () {
    var s = $("#say");
    var i = $("#inpu");
    i.keyup(function () {
        s.text("請輸入你想說的文字：" + i.val() + "!");
    })
})
