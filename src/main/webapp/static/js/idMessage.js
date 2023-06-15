

const nameInput = document.getElementById("nameInput")
nameInput.onblur = function () {
    checkName ()
}

/**
 * 检查姓名是否符合要求
 * 1、是否为空
 * 2、长度是否合适
 * @returns {boolean}
 */
function checkName () {

    let flag

    const name = nameInput.value.trim()
    const nameLabel = document.getElementById("nameLabel")

    if (name == null || name === "") {
        nameLabel.innerText = "请输入姓名!"
        nameLabel.style.display = ''

        flag = false
    } else if (name < 2 || name > 10) {
        nameLabel.innerText = "姓名的长度应在2-10之间!"
        nameLabel.style.display = ''

        flag = false
    } else {
        nameLabel.style.display = 'none'

        flag = true
    }

    return flag

}

const idInput = document.getElementById("idInput")
idInput.onblur = function () {
    checkId ()
}

/**
 * 检查id是否符合要求
 * 1、输入是否为空
 * 2、不同的证件类型对应不同长度，本模块有两种，一种是身份证，一种是户口簿，如果新增证件类型，需要在html页面中加入新的选项，以及在本模块验证
 * @returns {boolean}
 */
function checkId () {

    let flag

    const id = idInput.value.trim()
    const idLabel = document.getElementById("idLabel")

    const idType = document.getElementById("idType").value.trim()

    if (id === '') {
        idLabel.innerText = "请输入证件号!"
        idLabel.style.display = ''

        flag = false
    } else {
        if (idType == null) {
            idLabel.innerText = "请选择证件类型"
            idLabel.style.display = ''

            flag = false
        } else if (idType === "身份证") {
            if (id.length !== 18) {
                idLabel.innerText = "请正确填写身份证号!"
                idLabel.style.display = ''

                flag = false
            } else {
                idLabel.style.display = 'none'

                flag = true
            }
        } else if (idType === "户口簿") {
            if (id.length !== 10) {
                idLabel.innerText = "请正确填写户号!"
                idLabel.style.display = ''

                flag = false
            } else {
                idLabel.style.display = 'none'

                flag = true
            }
        }
    }

    return flag

}

const phoneInput = document.getElementById("phoneInput")
phoneInput.onblur = function () {
    checkPhone ()
}

/**
 * 检查填写的手机号是否符合要求
 * 1、输入是否为空
 * 2、是否11位
 * 3、是否纯数字
 * 后期可按照手机号构造原则升级本模块功能
 * @returns {boolean}
 */
function checkPhone () {

    let flag

    // 创建一个正则表达式，检测手机号内是否有非数字字符
    const reg = /^[0-9]{11}$/

    const phone = phoneInput.value.trim()
    const phoneLabel = document.getElementById("phoneLabel")

    if (phone !== '') {
        if (!reg.test(phone)) {
            phoneLabel.innerText = "请正确填写手机号!"
            phoneLabel.style.display = ''

            flag = false
        } else {
            phoneLabel.style.display = 'none'

            flag = true
        }
    } else {
        phoneLabel.style.display = 'none'

        flag = true
    }

    return flag

}

const idMessageButton = document.getElementById("idMessageButton")
idMessageButton.onclick = function () {
    fun_IMB ()
}

/**
 * 按钮上的功能
 * 重新检测所有信息是否符合要求，符合要求执行下一步
 * 向后端发送get请求请求，并附带信息
 * 后端传回判别符号后做出相应的前端反馈
 */
function fun_IMB () {

    const flag = checkName() && checkPhone() && checkId()

    if (flag) {
        const pName = document.getElementById("nameInput").value.trim()
        const pIDNoType = document.getElementById("idType").value.trim()
        const pIDNo = document.getElementById("idInput").value.trim()
        const pPhone = document.getElementById("phoneInput").value.trim()

        // 发送ajax请求
        // 1 创建核心对象
        let xhttp
        if (window.XMLHttpRequest) {
            xhttp = new XMLHttpRequest()
        } else {
            xhttp = new ActiveXObject("Microsoft.XMLHTTP")
        }
        // 2 发送请求
        xhttp.open("GET", servletUrl+'idMessageServlet?' +
            'pName='+ pName +
            '&pIDNoType='+ pIDNoType +
            '&pIDNo='+ pIDNo +
            '&pPhone='+ pPhone,
            true
        )
        xhttp.send()
        // 3 获取响应
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                // 获取从后端传来的值
                const gg = this.responseText.trim();

                if (gg === 'success') {
                    window.alert("登记成功!")
                    window.location.href = "idMessage.html"
                } else if (gg === 'repeat') {
                    window.alert("您已经登记过该乘客信息!")
                    window.location.href = "idMessage.html"
                } else {
                    window.alert("其它错误!")
                    window.location.href = "idMessage.html"
                }
            }
        }
    }
}