
const loginButton = document.getElementById('loginButton')
loginButton.onclick = function () {

    const account = document.getElementById('loginName').value.trim()
    const pwd = document.getElementById('loginPwd').value.trim()

    const url = 'loginServlet?account=' + account + '&pwd='+ pwd

    const xhttp = cbAJAX(url)
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (this.responseText.trim() === 'true') {
                document.getElementById('loginLabel').style.display = 'none'
                window.location.href = "index.html"
            } else {
                document.getElementById('loginLabel').style.display = ''
            }
        }
    }
    // // 发送ajax请求
    // // 1 创建核心对象
    // let xhttp
    // if (window.XMLHttpRequest) {
    //     xhttp = new XMLHttpRequest()
    // } else {
    //     xhttp = new ActiveXObject("Microsoft.XMLHTTP")
    // }
    // // 2 发送请求
    // xhttp.open("GET", servletUrl+'loginServlet?' +
    //     'account='+ account +
    //     '&pwd='+ pwd,
    //     true
    // )
    // xhttp.send()
    // // 3 获取响应
    // xhttp.onreadystatechange = function () {
    //     if (this.readyState === 4 && this.status === 200) {
    //         if (this.responseText.trim() === 'true') {
    //             document.getElementById('loginLabel').style.display = 'none'
    //             window.location.href = "index.html"
    //         } else {
    //             document.getElementById('loginLabel').style.display = ''
    //         }
    //     }
    // }
}