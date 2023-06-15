

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