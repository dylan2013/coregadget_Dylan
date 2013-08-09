$(document).ready(function () {
    var conn = gadget.getContract("UDSTestStudent");

    conn.send({
        service: "GetRandom100Student",
        body: "",
        result: function (response, error, http) {
            if (error === null) {
                alert(response);
                var det = "<table class=test><tr><th>系統編號</th>";
                det += "<th>姓名</th>";
                det += "<th>身份證字號</th>";
                det += "<th>性別</th></tr>";
                for (var each in response.Student) {
                    det += "<tr><td>" + response.Student[each].ID + "</td>";
                    det += "<td>" + response.Student[each].Name + "</td>";
                    det += "<td>" + response.Student[each].IDNumber + "</td>";
                    if (response.Student[each].Gender == "0") {
                        det += "<td>女</td></tr> ";
                    }
                    else if (response.Student[each].Gender == "1")
                        det += "<td>男</td></tr>";
                    else
                        det += "<td>　</td></tr>";
                }
                det += "</table>";

                $(".test").html(det);

                //$("#test").html("<p>現在學年度為:</p><p>現在學期為:</p>");
            }
            else {
                alert(error);
            };
        }
    });
});