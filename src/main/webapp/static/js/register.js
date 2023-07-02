/*
修改用户信息的也写在这里面了
 */


/*
给年龄设置最大值
 */
const registerBirthDay = document.getElementById('registerDate')
const dateTime = new Date(+new Date()+8*3600*1000);
registerBirthDay.max = new Date(dateTime).toISOString().substring(0, 10)
/*
姓名验证：不能有不合理的名字出现（太长或者太短），也不能为空
 */
const registerName = document.getElementById("registerName")
registerName.onblur = function () {
    registerNameFunction()
}

function registerNameFunction() {
    let flag

    const name = registerName.value.trim()

    const nameLabel = document.getElementById("nameLabel")

    if( name === '' ) {
        nameLabel.innerText = "请输入用户名/姓名!"
        nameLabel.style.display = ''

        flag = false
    } else if( name.length<2 || name.length >10 ) {
        nameLabel.innerText = "用户名/姓名的长度应在2-10之间!"
        nameLabel.style.display = ''

        flag = false
    } else {
        nameLabel.style.display = 'none'

        flag = true;
    }

    return flag
}

/*
职业验证：不可以太长，不然数据库放不下
 */
const registerCareer = document.getElementById('registerCareer')
registerCareer.onblur = function () {
    registerCareerFunction()
}

function registerCareerFunction () {

    let flag

    const careerLabel = document.getElementById('careerLabel')

    const career = registerCareer.value.trim()

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

/*
手机号验证：长度需要合理 11位
 */
const registerAccount = document.getElementById('registerPhone')
registerAccount.onblur = function () {
    registerAccountFunction()
}

function registerAccountFunction() {
    let flag

    const accountLabel = document.getElementById('phoneLabel')

    const account = registerAccount.value.trim()

    if(account.length === 0) {
        accountLabel.innerText = '请填写手机号!'
        accountLabel.style.display = ''

        flag = false
    } else if( !/^\d{11}$/.test(account) ) {
        accountLabel.innerText = '手机号格式不正确!'
        accountLabel.style.display = ''

        flag = false
    }  else {
        accountLabel.style.display = 'none'

        flag = true
    }

    if (flag) {
        const url = 'checkAccountServlet?account='+account
        const xhttp = cbAJAX(url)
        // 检查该账号是否已经被注册
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText.trim() === 'true') {
                    accountLabel.innerText = '该手机号已被注册!请更换其它手机号'
                    accountLabel.style.display = ''
                    // 已经被注册
                    flag = false
                } else {
                    accountLabel.style.display = 'none'
                    // 未被注册
                    flag = true
                }
            }
        }
    }

    return flag
}

/*
密码验证：强度只有超过1才能被通过（最少为2，且不允许出现特殊字符，如：@#$%^&*()_+=）
强度分配策略：

 */
const registerPwd = document.getElementById('registerPwd')
registerPwd.onblur = function () {
    registerPwdFunction()
}

function registerPwdFunction () {

    let flag

    const pwdLabel = document.getElementById('pwdLabel')

    const pwd = registerPwd.value.trim()

    if ( pwd === '' || pwd === null) {
        pwdLabel.innerText = '密码不能为空!'
        pwdLabel.style.display = ''

        flag = false
    } else {
        pwdLabel.style.display = 'none'

        flag = true
    }

    return flag
}

/*
二次输入密码验证
 */
const registerRPwd = document.getElementById('registerRPwd')
registerRPwd.onblur = function () {
    registerRPwdFunction ()
}

function registerRPwdFunction () {

    let flag
    const rRPwd = registerRPwd.value.trim()
    const rRPwdLabel = document.getElementById('rPwdLabel')

    const rPwd = registerPwd.value.trim()

    if( rRPwd === '') {
        rRPwdLabel.innerText = '请在此输入密码!'
        rRPwdLabel.style.display = ''

        flag = false
    } else if (rRPwd !== rPwd) {
        rRPwdLabel.innerText = '两次密码输入不一致!'
        rRPwdLabel.style.display = ''

        flag = false
    } else {
        rRPwdLabel.style.display = 'none'

        flag = true
    }

    return flag
}

/*
按钮 整体验证
 */
const registerButton = document.getElementById('registerButton')
registerButton.onclick = function () {

    const flag = registerNameFunction()&&
        registerCareerFunction()&&
        registerAccountFunction()&&
        registerPwdFunction()&&
        registerRPwdFunction()

    if (flag) {
        const account = document.getElementById('registerPhone').value.trim()
        const pwd = document.getElementById('registerPwd').value.trim()
        const name = document.getElementById('registerName').value.trim()
        const sex = document.getElementById('registerSex').value.trim()
        const age = document.getElementById('registerDate').value.trim()
        const education = document.getElementById('registerEducation').value.trim()
        const career = document.getElementById('registerCareer').value.trim()

        const url = 'registerServlet?' +
            'account='+account+
            '&pwd='+pwd+
            '&name='+name+
            '&sex='+sex+
            '&age='+age+
            '&education='+education+
            '&career='+career
        // 发送ajax请求
        const xhttp = cbAJAX(url)
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {
                if (this.responseText.trim() === 'true') {
                    window.location.href = 'login.html'
                } else {
                    window.location.href = 'register.html'
                }
            }
        }
    } else {
        window.alert('请正确填写注册信息!')
    }
}