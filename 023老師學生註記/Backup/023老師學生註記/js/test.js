$(document).ready(function () {
//取得班級學生清單
    var classtudent = gadget.getContract("ischool.student.note");
    classtudent.send({
        service: "GetStudentNote",
        body: "",
        result: function (response, error, http) {
            if (error === null) {
                //alert("讀取班級學生成功!!");
                var courseString = '';
                $(response.Studentnoterecord).each(function (index, item) {
                    courseString += "<tr>";
                    courseString += "<td>" + item.RefStudentId + "</td>";
                    courseString += "<td>" + item.Note + "</td>";
                    courseString += '</tr>';
                });
                $('#tbodyIsTrue').html(courseString);
            }
            else {
                alert(error);
            };
        }
    })


});