

/**
 * 找到了cookie中存储的信息
 * 登录账号
 * @param account 用户账号
 */
function changeStatic (account) {
    const message = "欢迎您:"+account
    document.getElementById("loginMessage").innerHTML =
        "<a href=\"userMessage.html\">"+message+"</a>"
    document.getElementById("clearCookie").innerHTML = "退出登录"
}

/**
 * 需要登录才能看到跳转的页面
 */
function needLogin () {
    const account = getAccount()

    if(account!=null && account !== '') {
        changeStatic (account)
    } else {
        document.location.href = "login.html"
    }
}

/**
 * 无需登录也可也看到的页面
 */
function notNeedLogin () {
    const account = getAccount()
    if(account!=null && account !== '') {
        changeStatic (account)
    }
}

// window.onload = function () {
//
//     let id = null
//
//     const name = "account" + "=";
//     const cookies = document.cookie.split(';');
//     if (cookies!=null) {
//         for (let i = 0; i < cookies.length; i++) {
//             const cookie = cookies[i].trim();
//             if (cookie.indexOf(name) === 0)
//                 id = cookie.substring(name.length, cookie.length);
//         }
//     }
//
//     if (id != null &&) {
//         const message = "欢迎您:"+id
//                 document.getElementById("messageModel").innerHTML =
//                     "<ul>" +
//                     "<li><a href=\"login.html\">"+message+"</a>  </li> |" +
//                     "<li><a href=\"#\" id=\"clearCookie\">退出登录</a> </li> |" +
//                     "<li><a href=\"#\">帮助</a></li>" +
//                     "\<div class=\"clearfix\"></div>" +
//                     "</ul>" + "<script>\n" +
//                     "document.getElementById(\"clearCookie\").onclick = function () {" +
//                     "const edate = new Date()" +
//                     "edate.setTime(edate.getTime() -1000)" +
//                     "let cData = \"account\" + \"=\" + ''" +
//                     "cData += (-1 == null) ? '' : (';expires=' + edate.toUTCString())" +
//                     "document.cookie = cData" +
//                     "}" +
//                     "</script>"
//     }


    // // 这个变量写在ajax里，用于向servlet发送连接请求
    // const servletUrl = "http://localhost:8080/demo3/"
    //
    // document.cookie
    //
    // // 发送ajax请求
    // // 1 创建核心对象
    // let xhttp
    // if (window.XMLHttpRequest) {
    //     xhttp = new XMLHttpRequest()
    // } else {
    //     xhttp = new ActiveXObject("Microsoft.XMLHTTP")
    // }
    // // 2 发送请求
    // xhttp.open("GET", servletUrl + 'checkCookieAccountServlet')
    // xhttp.send()
    // // 3 获取响应
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         if (this.responseText.trim() !== 'NoAccount') {
    //             const message = "欢迎您:"+this.responseText.trim()
    //             document.getElementById("messageModel").innerHTML =
    //                 "<ul>" +
    //                 "<li><a href=\"login.html\">"+message+"</a>  </li> |" +
    //                 "<li><a href=\"#\" id=\"clearCookie\">退出登录</a> </li> |" +
    //                 "<li><a href=\"#\">帮助</a></li>" +
    //                 "\<div class=\"clearfix\"></div>" +
    //                 "</ul>"
    //         }
    //     }
    // }
    // }