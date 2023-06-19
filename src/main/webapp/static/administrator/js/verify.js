const ectMoney = document.getElementById('ectMoney')
const bctMoney = document.getElementById('bctMoney')
ectMoney.onblur = function () {
    verifyMoney (ectMoney.value.trim(), document.getElementById('ectLabel'))
}
bctMoney.onblur = function () {
    verifyMoney (bctMoney.value.trim(), document.getElementById('bctLabel'))
}
function verifyMoney (money, label) {

    if (money === null || money === '') {
        label.innerText = '请定价'
        label.style.display = ''
    } else if (!/^\d+(\.\d{1,2})?$/.test(money)) {
        label.innerText = '请正确输入价格'
        label.style.display = ''
    } else {
        label.style.display = 'none'
    }
}

document.getElementById('addFlightButton').onclick = function () {
    const airline = document.getElementById('airlineNo').value.trim()
    const plane = document.getElementById('planeNo').value.trim()

    const label = document.getElementById('addFlightLabel')

    if (airline === '请选择'||plane === '请选择'
        ||verifyMoney (ectMoney.value.trim(), document.getElementById('ectLabel'))
        ||verifyMoney (bctMoney.value.trim(), document.getElementById('bctLabel'))) {
        label.innerText = '还有未完成项'
        label.style.display = ''
    } else {
        label.style.display = 'none'
        const airlineNo = airline.slice(1)
        const state = airline.substring(0, 1)
        const ect = ectMoney.value.trim()
        const bct = bctMoney.value.trim()
        const planeNo = plane

        // alert(ect+" "+bct+" "+airlineNo+" "+state+" "+planeNo)
        const xhttp = cbAJAX('addFlightServlet' +
            '?ectMoney='+ect+
            '&bctMoney='+bct+
            '&airlineNo='+airlineNo+
            '&state='+state+
            '&planeNo='+planeNo
        )
        xhttp.onreadystatechange = function () {
            if (this.status===200&&this.readyState===4) {
                if (this.responseText === 'true') {
                    alert('添加成功')
                } else {
                    alert('添加失败')
                }
            }
        }
    }
}