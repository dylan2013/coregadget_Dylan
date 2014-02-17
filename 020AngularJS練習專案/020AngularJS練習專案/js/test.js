﻿
$(document).ready(function () {
    var JbAng = [{ text: 'item1', color: '#FF0000' },
	{ text: 'item2', color: '#FFFF00' },
	{ text: 'item3', color: '#FFA500' },
	{ text: 'item4', color: '#008000' },
	{ text: 'item5', color: '#0000FF' },
	{ text: 'item6', color: '#4B0082' },
	{ text: 'item7', color: '#800080'}];

    $(JbAng).each(function () {
        var join = "<tr>";
        join += "<td style='background-color:" + this.color + "'>" + this.text + "</td>";
        join += "<td style='background-color:" + this.color + "'>" + this.color + "</td>";
        join += "<td style='background-color:" + this.color + "'><a href='javascript:void(0)'>Remove</a></td>";
        join += "</tr>";
        $('#abc').append(join);
    });

    $("a").click(function () {
        $(this).closest('tr').remove();
    });
});