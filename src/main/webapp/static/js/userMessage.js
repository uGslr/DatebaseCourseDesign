
function getUserMessage () {

    const account = getAccount()

    let xhttp

    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    // 2 发送请求
    xhttp.open("GET", servletUrl+'getUserMessageServlet?' +
        'account=' + account,
        true
    )
    xhttp.send()
    // 3 获取响应
    xhttp.onreadystatechange = function () {

        if (this.readyState === 4 && this.status === 200) {
            const message = jQuery.parseJSON(this.responseText)
            document.getElementById("userNameDiv").innerHTML = "" +
                "<span>" +
                "用户名/姓名" +
                "</span>" +
                "<input type=\"text\" id=\"userName\" readonly=\"readonly\" value=\""+ message["uName"] +"\">"
            document.getElementById("userPhoneDiv").innerHTML = "<span>" +
                "手机号" +
                "</span>" +
                "<input type=\"text\" id=\"userPhone\" name=\"account\" value=\""+ message["account"] +"\" readonly=\"readonly\">"

            if (message["sex"] === "女") {
                document.getElementById("userSexDiv").innerHTML = "<span>" +
                "性别" +
                "</span>" +
                "<select name=\"sex\" id=\"userSex\">" +
                "<option value=\"男\">男</option>" +
                "<option value=\"女\" selected>女</option>" +
                "</select>"
            }

            document.getElementById("userAgeDiv").innerHTML = "<span>" +
                "生日" +
                "</span>" +
                "<input type=\"date\" name=\"age\" id=\"userAge\" value=\""+ message["age"]+"\">"

            let education = "<span>" +
                "学历" +
                "</span>" +
                "<select name=\"education\" id=\"userEducation\">"
            switch (message["education"]) {
                case "小学":
                    education = education +
                        "<option value=\"小学\" selected>小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "初中":
                        education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\" selected>初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "高中":
                    education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\" selected>高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "初级中专":education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\" selected>初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "高级中专":education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\" selected>高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "大专生":education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\" selected>大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "本科生":education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\" selected>本科生</option>" +
                        "<option value=\"研究生\">研究生</option>"
                    break;
                case "研究生":
                    education = education +
                        "<option value=\"小学\">小学</option>" +
                        "<option value=\"初中\">初中</option>" +
                        "<option value=\"高中\">高中</option>" +
                        "<option value=\"初级中专\">初级中专</option>" +
                        "<option value=\"高级中专\">高级中专</option>" +
                        "<option value=\"大专生\">大专生</option>" +
                        "<option value=\"本科生\">本科生</option>" +
                        "<option value=\"研究生\" selected>研究生</option>"
                    break;
            }
            document.getElementById("userEducationDiv").innerHTML = education

            document.getElementById("userCareerDiv").innerHTML = "<span>\n" +
                "职业" +
                "<label style=\"color: #ac2925;display: none\" id=\"careerLabel\">错误!</label>" +
                "</span>" +
                "<input type=\"text\" id=\"userCareer\" value=\""+ message["career"] +"\">"
        }
    }
}