
const aa = document.getElementById("clearCookie")
/**
 * 退出登录
 */
aa.onclick = function () {
    const edate = new Date()
    edate.setTime(edate.getTime() -1000)
    let cData = "account" + "=" + ''
    cData += (-1 == null) ? '' : (';expires=' + edate.toUTCString())
    document.cookie = cData

    if (aa.innerText == "注册")
        window.location.href = "register.html"
    else
        window.location.href = "index.html"
}