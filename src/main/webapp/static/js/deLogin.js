

/**
 * 退出登录
 */
function deLogin () {
    clearCookie()

    if (document.getElementById("clearCookie").innerText === "注册")
        window.location.href = "register.html"
    else
        window.location.href = "index.html"
}