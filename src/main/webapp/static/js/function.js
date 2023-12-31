
/**
 * 获取cookie中存储的account资源
 * @returns {null}
 */
function getAccount() {
    let account = null

    const name = "account" + "=";
    const cookies = document.cookie.split(';');
    if (cookies!=null) {
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.indexOf(name) === 0)
                account = cookie.substring(name.length, cookie.length);
        }
    }

    return account
}


function cbAJAX(url) {
    // alert(window.location)
    const servletUrl = "http://localhost:8080/DatebaseCourseDesign/"
    // 发送ajax请求
    // 1 创建核心对象
    let xhttp
    if (window.XMLHttpRequest) {
        xhttp = new XMLHttpRequest()
    } else {
        xhttp = new ActiveXObject("Microsoft.XMLHTTP")
    }
    // 2 发送请求
    xhttp.open("GET", servletUrl+url,
        true
    )
    xhttp.send()

    return xhttp

}

function clearCookie() {
    const edate = new Date()
    edate.setTime(edate.getTime() -1000)
    let cData = "account" + "=" + ''
    cData += (-1 == null) ? '' : (';expires=' + edate.toUTCString())
    document.cookie = cData
}