
/**
 * 将搜索到的航班信息插入界面
 */
function loadFlightMessage() {
    const url = 'findFlightAllServlet'
    const xhttp = cbAJAX(url)

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''

            $.each(message, function (i, n) {
                inner = inner + flightMessageString(
                    n.airlineCompanyName,
                    n.flightNo,
                    n.airportName1,
                    n.takeOffTime,
                    n.airportName2,
                    n.landTime,
                    n.ectMoney,
                    n.economyClassTicket,
                    n.bctMoney,
                    n.businessClassTicket
                )
            })
            document.getElementById("administratorTable").innerHTML = inner
        }
    }
}

function loadBill () {
    const xhttp = cbAJAX('findBillServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4){
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''

            $.each(message, function (i, n) {
                inner = inner + "<tr>" +
                    "<td>" +
                    n.flightNo+
                    "</td>" +
                    "<td>" +
                    n.ectMoney +
                    "</td>" +
                    "<td>" +
                    n.bctMoney +
                    "</td>" +
                    "</tr>"
            })
            document.getElementById("administratorBill").innerHTML = inner
        }
    }
}

/**
 * 把航班信息拼接成html代码
 * @param airLineCompanyName
 * @param flightNo
 * @param airportName1
 * @param takeOffTime
 * @param airportName2
 * @param landTime
 * @param ectMoney
 * @param economyClassTicket
 * @param bctMoney
 * @param businessClassTicket
 * @returns {string}
 */
function flightMessageString (airlineCompanyName, flightNo, airportName1,
                              takeOffTime, airportName2, landTime, ectMoney,
                              economyClassTicket, bctMoney, businessClassTicket) {

    const dateTime = new Date(+new Date()+8*3600*1000);
    const nowTime = new Date(dateTime).toISOString().substring(0, 16) // 精确到分钟
    let inner = "<tr>" +
        "<td>" +
        "<input class=\"form-check-input m-0 align-middle checkInput\" " +
        "value=\""+flightNo+"\" " +
        "type=\"checkbox\" " +
        "aria-label=\"Select invoice\">" +
        "</td>" +
        "<td><span class=\"text-secondary\">" + flightNo + "</span></td>" +
        "<td><a href=\"invoice.html\" class=\"text-reset\" tabindex=\"-1\">" +
        airlineCompanyName +
        "</a></td>" +
        "<td>" +
        airportName1+
        "</td>" +
        "<td>" +
        airportName2 +
        "</td>"

        const date1 = new Date(takeOffTime);
        const date2 = new Date('1900-01-01 00:00');

        if (date1 <= date2) {
            inner = inner +
                "<td>"+
                "<input class='administrator-datetime-local " + flightNo + " ' " +
                "type=\"datetime-local\" min=\""+ nowTime +"\">" +
                "</td>" +
                "<td>" +
                "<input class='administrator-datetime-local " + flightNo + " ' " +
                "type=\"datetime-local\" min=\""+ nowTime +"\">" +
                "</td>"
        } else {
            inner = inner +
                "<td>"+
            "<input class='administrator-datetime-local " + flightNo + " ' " +
            "type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+takeOffTime+"\">" +
            "</td>" +
            "<td>" +
            "<input class='administrator-datetime-local " + flightNo + " ' " +
            "type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+landTime+"\">" +
            "</td>"
        }
        inner = inner +
        "<td class=\""+ flightNo + "Money" +"\" data-info=\""+ ectMoney + "\">" +
        economyClassTicket + "张 / ￥" + ectMoney +
        "</td>" +
        "<td class=\""+ flightNo + "Money" +"\" data-info=\""+ bctMoney + "\">" +
        businessClassTicket + "张 / ￥" + bctMoney +
        "</td>" +
        "</tr>"

    return inner
}


function toAdministratorAllTFlight () {
    loadFlightMessage()
    document.getElementById("administrator-allFlight").style.display = 'flex'
    document.getElementById("administrator-bill").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorBill () {
    loadBill ()
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-bill").style.display = 'flex'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewFlight () {
    addOptionForAddFlight ()
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-bill").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'flex'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewAirline () {
    addOptionForAddAirline ()
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-bill").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'flex'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewPlane () {
    addOptionForAddPlane ()
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-bill").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'flex'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewCompany () {
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-bill").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'flex'
}

function changeFlightTime (flightNo, takeOffTime, landTime) {
    if (confirm('修改航班号'+flightNo+'的起飞时间为:'+takeOffTime+' 预计降落时间为:'+landTime+' 是否修改？')) {
        const xhttp = cbAJAX('changeFlightTimeServlet?flightNo='+flightNo+'&takeOffTime='+takeOffTime+'&landTime='+landTime)
        xhttp.onreadystatechange = function () {
            if (this.status===200&&this.readyState===4) {
                if (this.responseText==='true') {
                    alert('修改成功')
                } else {
                    alert('修改失败')
                }
            }
        }
    }
}

function updateFlightMessage (flightNo) {
    const xhttp = cbAJAX('updateFlightNoMessageServlet?flightNo='+flightNo)
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            if (this.responseText === 'true') {
                loadFlightMessage()
            } else {
                alert(flightNo+"还未起飞或更新后未重新设置时间")
            }
        }
    }
}

function updateButtonFunction () {
    const checkBox = document.getElementsByClassName('checkInput')
    for (let i=0; i<checkBox.length; i++) {
        if (checkBox[i].checked) {
            updateFlightMessage (checkBox[i].value)
        }
    }
}

function changeTimeButtonFunction () {
    const checkBox = document.getElementsByClassName('checkInput')
    for (let i=0; i<checkBox.length; i++) {
        if (checkBox[i].checked) {
            const toChangeTime = document.getElementsByClassName(checkBox[i].value)
            const takeOffTime = toChangeTime[0].value.substring(0, 10)+' '+toChangeTime[0].value.substring(11, 16)
            const landTime = toChangeTime[1].value.substring(0, 10)+' '+toChangeTime[1].value.substring(11, 16)

            const date1 = new Date(takeOffTime);
            const date2 = new Date(landTime);

            if (date1 >= date2) {
              alert('您输入的时间1需要小于时间2')
            } else {
              changeFlightTime (checkBox[i].value, takeOffTime, landTime)
            }

        }
    }
}

function changeMoneyFunction () {
    document.getElementById('priceStrategy').style.display='flex'
    const checkBox = document.getElementsByClassName('checkInput')

    for (let i=0; i<checkBox.length; i++) {
        if (checkBox[i].checked) {
            const toChange = document.getElementsByClassName(checkBox[i].value+'Money')
            const ect = toChange[0].getAttribute('data-info')
            const bct = toChange[1].getAttribute('data-info')

            const rate = document.getElementsByClassName('rate-price')
            const rate1 = (rate[0].value * 0.01 + 1).toFixed(2)
            const rate2 = (rate[1].value * 0.01 + 1).toFixed(2)

            const ectC = ect * rate1
            const bctC = bct * rate2

            if (confirm("是否修改航班"+checkBox[i].value+"的经济舱票价为:"+ectC+", 商务舱票价为:"+bctC)) {
                const xhttp = cbAJAX('changeFlightMoneyServlet' +
                    '?ectMoney='+ectC+
                    '&bctMoney='+bctC+
                    '&flightNo='+checkBox[i].value
                )
                xhttp.onreadystatechange = function () {
                    if (this.status===200&&this.readyState===4) {
                        if (this.responseText==='true') {
                            closePop ()
                            alert(checkBox[i].value+'修改成功')
                        } else {
                            alert(checkBox[i].value+'修改失败')
                        }
                    }
                }
            }

        }
    }
}

function closePop () {
    document.getElementById('priceStrategy').style.display='none'
    const a = document.getElementsByClassName('rate-price')

    for (let i=1; i<a.length; i++) {
        a[i].value = 0
    }
}

function addAirlineButtonFunction () {
    const airportNo1 = document.getElementById('airport1').value
    const airportNo2 = document.getElementById('airport2').value
    const airlineLabel = document.getElementById('airlineLabel')
    if (airportNo1 === airportNo2) {
        airlineLabel.innerText = "您选择的两个机场相同，无法创建航线"
        airlineLabel.style.display = ''
    } else {
        const xhttp = cbAJAX('addAirlineServlet' +
            '?airportNo1='+airportNo1 +
            '&airportNo2='+airportNo2
        )
        xhttp.onreadystatechange = function () {
            if (this.status===200&&this.readyState===4) {
                if (this.responseText === 'true') {
                    alert('创建成功')
                    airlineLabel.style.display = 'none'
                } else if (this.responseText === 'repeat') {
                    airlineLabel.innerText = "数据库中已经存在该航线"
                    airlineLabel.style.display = ''
                }else {
                    alert('创建失败')
                    airlineLabel.style.display = 'none'
                }
            }
        }
    }
}

function addPlaneButtonFunction () {
    const planeNo = document.getElementById('addPlaneNo').value.trim()
    const airlineCompanyNo = document.getElementById('airlineCompany').value.trim()
    const planeTypeNo = document.getElementById('planeTypeNo').value.trim()
    const ect = document.getElementById('ect').value.trim()
    const bct = document.getElementById('bct').value.trim()

    const label = document.getElementById('addPlaneLabel')

    if (planeNo===null||planeNo===''||
        airlineCompanyNo===null||airlineCompanyNo===''||
        planeTypeNo===null||planeTypeNo===''||
        ect===null||ect===''||
        bct===null||bct===''
    ) {
        label.innerText = '还有信息未填'
        label.style.display = ''
    } else {
        label.style.display = 'none'
        const xhttp = cbAJAX('addPlaneServlet' +
            '?planeNo='+planeNo +
            '&airlineCompanyNo='+airlineCompanyNo +
            '&planeTypeNo='+planeTypeNo +
            '&ect='+ect +
            '&bct='+bct
        )
        xhttp.onreadystatechange = function () {
            if (this.status===200&&this.readyState===4) {
                if (this.responseText === 'true') {
                    alert('创建成功')
                } else {
                    alert('创建失败')
                }
            }
        }
    }
}

function loadPlane (id) {
    const xhttp = cbAJAX('findPlaneServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            const message = jQuery.parseJSON(this.responseText)
            let select = "<option value=\"请选择\" selected disabled style=\"display:none;\">请选择</option>"
            $.each(message, function (i, n) {
                select = select + "<option value=\"" + n.planeNo + "\">" +
                    n.planeNo + "/所属公司:" +n.airlineCompanyNo+ "</option>"
            })
            document.getElementById(id).innerHTML = select
        }
    }
}

function loadAirline (id) {
    const xhttp = cbAJAX('findAirlineServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            const message = jQuery.parseJSON(this.responseText)
            let select = "<option value=\"请选择\" selected disabled style=\"display:none;\">请选择</option>"
            $.each(message, function (i, n) {
                select = select + "<option value=\"" + "0" + n.airlineNo + "\">" + "从 " +
                    n.airportName1 + " 前往 " + n.airportName2 + "</option>"
                select = select + "<option value=\"" + "1" + n.airlineNo + "\">" + "从 " +
                    n.airportName2 + " 前往 " + n.airportName1 + "</option>"
            })
            document.getElementById(id).innerHTML = select
        }
    }
}

function loadAirport (id) {
    const xhttp = cbAJAX('findAirportServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            // alert(this.responseText)
            const message = jQuery.parseJSON(this.responseText)
            let select = "<option value=\"请选择\" selected disabled style=\"display:none;\">请选择</option>"
            $.each(message, function (i, n) {
                select = select + "<option value=\"" + n.airportNo + "\">" +
                    n.airportLocation + " / " + n.airportName + "</option>"
            })
            document.getElementById(id).innerHTML = select
        }
    }
}

function loadAirlineCompany (id) {
    const xhttp = cbAJAX('findCompanyServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            // alert(this.responseText)
            const message = jQuery.parseJSON(this.responseText)
            let select = "<option value=\"请选择\" selected disabled style=\"display:none;\">请选择</option>"
            $.each(message, function (i, n) {
                select = select + "<option value=\"" + n.airlineCompanyNo + "\">" +
                    n.airlineCompanyName + "</option>"
            })
            document.getElementById(id).innerHTML = select
        }
    }
}

function addOptionForAddFlight () {
    loadPlane('planeNo')
    loadAirline ('airlineNo')
}

function addOptionForAddAirline () {
    loadAirport ("airport1")
    loadAirport ("airport2")
}

function addOptionForAddPlane () {
    loadAirlineCompany ('airlineCompany')
}

