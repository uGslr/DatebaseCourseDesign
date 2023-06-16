

/**
 * 退出登录
 */
function deLogin () {
    const edate = new Date()
    edate.setTime(edate.getTime() -1000)
    let cData = "account" + "=" + ''
    cData += (-1 == null) ? '' : (';expires=' + edate.toUTCString())
    document.cookie = cData

    if (document.getElementById("clearCookie").innerText === "注册")
        window.location.href = "register.html"
    else
        window.location.href = "index.html"
}