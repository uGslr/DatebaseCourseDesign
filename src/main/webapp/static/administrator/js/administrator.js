
/**
 * 将搜索到的航班信息插入界面
 */
function loadFlightMessage() {
    const url = 'getFlightAllServlet'
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
    return "<tr>" +
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
        "</td>" +
        "<td>" +
        "<input class='administrator-datetime-local " + flightNo + " ' " +
        "type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+takeOffTime+"\">" +
        "</td>" +
        "<td>" +
        "<input class='administrator-datetime-local " + flightNo + " ' " +
        "type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+landTime+"\">" +
        "</td>" +
        "<td>" +
        economyClassTicket + "张 / ￥" + ectMoney +
        "</td>" +
        "<td>" +
        businessClassTicket + "张 / ￥" + bctMoney +
        "</td>" +
        "</tr>"
}


function toAdministratorAllTFlight () {
    loadFlightMessage()
    document.getElementById("administrator-allFlight").style.display = 'flex'
    document.getElementById("administrator-ticketStrategy").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorTicketStrategy () {
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-ticketStrategy").style.display = 'flex'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewFlight () {
    addOptionForAddFlight ()
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-ticketStrategy").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'flex'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewAirline () {
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-ticketStrategy").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'flex'
    document.getElementById("administrator-newPlane").style.display = 'none'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewPlane () {
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-ticketStrategy").style.display = 'none'
    document.getElementById("administrator-newFlight").style.display = 'none'
    document.getElementById("administrator-newAirline").style.display = 'none'
    document.getElementById("administrator-newPlane").style.display = 'flex'
    document.getElementById("administrator-newCompany").style.display = 'none'
}
function toAdministratorNewCompany () {
    document.getElementById("administrator-allFlight").style.display = 'none'
    document.getElementById("administrator-ticketStrategy").style.display = 'none'
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
                alert(flightNo+"异常")
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

function changeButtonFunction () {
    const checkBox = document.getElementsByClassName('checkInput')
    for (let i=0; i<checkBox.length; i++) {
        if (checkBox[i].checked) {
            const toChangeTime = document.getElementsByClassName(checkBox[i].value)
            const takeOffTime = toChangeTime[0].value.substring(0, 10)+' '+toChangeTime[0].value.substring(11, 16)
            const landTime = toChangeTime[1].value.substring(0, 10)+' '+toChangeTime[1].value.substring(11, 16)

            changeFlightTime (checkBox[i].value, takeOffTime, landTime)
        }
    }
}

function loadPlane () {
    const xhttp = cbAJAX('findPlaneServlet')
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            const message = jQuery.parseJSON(this.responseText)
            let select = "<option value=\"请选择\" selected disabled style=\"display:none;\">请选择</option>"
            $.each(message, function (i, n) {
                select = select + "<option value=\"" + n.planeNo + "\">" +
                    n.planeNo + "/所属公司:" +n.airlineCompanyNo+ "</option>"
            })
            document.getElementById('planeNo').innerHTML = select
        }
    }
}

function loadAirline () {
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
            document.getElementById('airlineNo').innerHTML = select
        }
    }
}

function addOptionForAddFlight () {
    loadPlane()
    loadAirline ()
}
