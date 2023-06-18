

/*
职业验证：不可以太长，不然数据库放不下
 */
const userCareer = document.getElementById('userCareer')
userCareer.onblur = function () {
    userCareerFunction()
}

function userCareerFunction () {

    let flag

    const careerLabel = document.getElementById('careerLabel')

    const career = userCareer.value.trim()

    if( career.length > 10 ) {
        careerLabel.innerText = "您输入的职业过长!请检查是否正确或简写"
        careerLabel.style.display = ''

        flag = false
    } else {
        careerLabel.style.display = 'none'

        flag = true
    }

    return flag
}

const updateMessageButton = document.getElementById("updateMessageButton")
/**
 * 在个人信息界面可以修改个人信息，修改结束后点击updateMessageButton可以将修改后的数据发送服务端
 */
updateMessageButton.onclick = function () {
    updateMessageButtonFun()
}

/**
 * 实现修改个人数据验证功能
 * 实现数据发送到后端功能
 */
function updateMessageButtonFun () {
    const flag = userCareerFunction ()

    if (flag) {
        const sex = document.getElementById("userSex").value.trim()
        const age = document.getElementById("userAge").value.trim()
        const education = document.getElementById("userEducation").value.trim()
        const career = document.getElementById("userCareer").value.trim()

        const url = 'updateUserMessageServlet?' +
            'account=' + getAccount() +
            '&sex='+sex+
            '&age='+age+
            '&education='+education+
            '&career='+career

        const xhttp = cbAJAX(url)

        // 3 获取响应
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText.trim() === 'true') {
                    window.location.href = 'userMessage.html'
                    window.alert("修改成功")
                } else {
                    window.location.href = 'userMessage.html'
                    window.alert("修改失败")
                }
            }
        }
    }
}

/**
 * 下面是修改密码页面的功能
 */
/*
把修改密码界面打开
 */
const updatePwdButton = document.getElementById('updatePwdButton')
updatePwdButton.onclick = function () {
    updatePwd ()
}

function updatePwd () {
    document.getElementById('changePassword').style.display="flex"
}
/*
密码验证：强度只有超过1才能被通过（最少为2，且不允许出现特殊字符，如：@#$%^&*()_+=）
强度分配策略：

 */
const pwd = document.getElementsByClassName('password')
const pwdLabel = document.getElementsByClassName('pwdLabel')
pwd[0].onblur = function () {
    checkPwd(pwd[0].value.trim(), 0)
    console.log(pwdLabel)
}
pwd[1].onblur = function () {
    checkPwd(pwd[0].value.trim(), 1)
}
pwd[2].onblur = function () {
    checkRPwd (pwd[1].value.trim(), pwd[2].value.trim())
}

function checkPwd(pwd, i) {

    let flag

    if ( pwd === '' ) {
        pwdLabel[i].innerText = '密码不能为空!'
        pwdLabel[i].style.display = ''

        flag = false
    } else {
        pwdLabel[i].style.display = 'none'

        flag = true
    }

    return flag
}

/**
 * 二次输入密码验证
 * @param pwd1
 * @param pwd2
 * @returns {boolean}
 */
function checkRPwd (pwd1, pwd2) {
    let flag

    if( pwd2 === '') {
        pwdLabel[2].innerText = '请在此输入密码!'
        pwdLabel[2].style.display = ''

        flag = false
    } else if (pwd1 !== pwd2) {
        pwdLabel[2].innerText = '两次密码输入不一致!'
        pwdLabel[2].style.display = ''

        flag = false
    } else {
        pwdLabel[2].style.display = 'none'

        flag = true
    }

    return flag
}

document.getElementById('changePassword-button').onclick = function () {
     changePwd()
}
function changePwd() {
    const xhttp = cbAJAX('changePwdServlet?account='+getAccount()+
        '&oldPwd='+pwd[0].value.trim()+'&newPwd='+pwd[1].value.trim())

    xhttp.onreadystatechange = function () {
        if(this.readyState === 4 && this.status === 200) {
            if (this.responseText === 'true') {
                alert("修改成功")
                window.location.href = 'login.html'
            } else {
                alert("修改失败")
            }
        }
    }
}