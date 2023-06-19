

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const dateSelect = document.getElementById("dateSelect")

const dateTime = new Date(+new Date()+8*3600*1000);
// dateSelect.min = today.toISOString().substring(0, 10)
// dateSelect.value = today.toISOString().substring(0, 10)
dateSelect.value = new Date(dateTime).toISOString().substring(0, 10)
dateSelect.min = new Date(dateTime).toISOString().substring(0, 10)

/**
 * 给id为...的选择框添加内容
 * @param id
 */
function writeFormUlLi (id) {

    const A = ["阿勒泰"]
    const B = ["巴中", "北京"]
    const S = ["上海", "深圳"]


    let html = "<optgroup label=\"A\">"
    for (let i = 0; i<A.length; i++) {
        html = html + "<option value=\""+ A[i] +"\">" + A[i] + "</option>"
    }
    html = html + "</optgroup>"

    html = html + "<optgroup label=\"B\">"
    for (let i = 0; i<B.length; i++) {
        html = html + "<option value=\""+ B[i] +"\">" + B[i] + "</option>"
    }
    html = html + "</optgroup>"

    html = html + "<optgroup label=\"S\">"
    for (let i = 0; i<S.length; i++) {
        html = html + "<option value=\""+ S[i] +"\">" + S[i] + "</option>"
    }
    html = html + "</optgroup>"

    const t = document.getElementById(id)

    t.innerHTML = html
}

writeFormUlLi ('startSelect')
writeFormUlLi ('endSelect')

/**
 * 给主界面的搜索按钮添加功能，点击后进行搜索，找到符合要求的航班信息
 */
document.getElementById('searchButton').onclick = function () {
    const start = document.getElementById('startSelect').value.trim()
    const end = document.getElementById('endSelect').value.trim()
    const date = document.getElementById('dateSelect').value.trim()

    const url = 'getFlightByMessageServlet?airportLocation1='+ start + '&airportLocation2='+ end + '&time=' + date
    const xhttp = cbAJAX(url)
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''
            $.each(message, function (i, n) {
                inner = inner + flightMessageString(
                    n.airlineCompanyName,
                    n.flightNo,
                    n.planeNo,
                    n.airportLocation1,
                    n.airportLocation2,
                    n.airportName1,
                    n.takeOffTime,
                    n.airportName2,
                    n.landTime,
                    n.economyClassTicket,
                    n.businessClassTicket,
                    n.ectMoney,
                    n.bctMoney
                )
            })
            if (inner !== '') {
                document.getElementById("flightMessage").innerHTML = inner
            } else {
                document.getElementById("flightMessage").innerHTML =
                    "<div class=\"Popular-Restaurants-grid wow fadeInRight\" data-wow-delay=\"0.4s\">\n" +
                    "<div class=\"acno-fno\">" +
                    "<span>" +
                    "<a style=\"color: #ac2925\"> 您查询的的机票可能因无航班或航班座位已售完导致暂无查询结果！</a>" +
                    "</span>" +
                    "</div>" +
                    "</div>"
            }
        }
    }
}

function flightMessageString (airlineCompanyName, flightNo, planeNo,
                              airportLocation1, airportLocation2,
                              airportName1, takeOffTime,
                              airportName2, landTime,
                              economyClassTicket, businessClassTicket,
                              ectMoney, bctMoney) {
    let a = "<div class=\"Popular-Restaurants-grid wow fadeInRight\" data-wow-delay=\"0.4s\">\n" +
        "<div class=\"col-md-2 restaurent-title\">" +
        "<div class=\"acno-fno\">" +
        "<span><a href=\"#\" onclick=\"return false;\">" + airlineCompanyName + "</a></span>" +
        "</div>" +
        "<br/>" +
        "<label>航班号：</label>" +
        "<label>" + flightNo + "</label>" +
        "</div>" +
        "<div class=\"col-md-2 restaurent-title\">" +
        "<div class=\"rating\">" +
        "<span><a href=\"#\" onclick=\"return false;\">" + airportName1 + "</a></span>\n" +
        "</div>" +
        "<div class=\"rating\">" +
        "<span><a href=\"#\" onclick=\"return false;\">"
        + takeOffTime.substring(0,10) + "|" + takeOffTime.substring(11,16) + "</a></span>\n" +
        "</div>" +
        "<div class=\"rating\">" +
        "<span>--------------------</span>" +
        "</div>" +
        "<div class=\"rating\">\n" +
        "<span><a href=\"#\" onclick=\"return false;\">" + airportName2 + "</a></span>\n" +
        "</div>" +
        "<div class=\"rating\">\n" +
        "<span><a href=\"#\" onclick=\"return false;\">"
        + landTime.substring(0,10) + "|" + landTime.substring(11,16) + "</a></span>\n" +
        "</div>" +
        "</div>" +
        "<div class=\"col-md-7 buy\">" +
        "<span>"+ "￥" + ectMoney + "/￥" + bctMoney + "</span>" +
        "<button onclick=" + 'addClickToButton(' + "\"" + flightNo
        + "\",\"" + airlineCompanyName
        + "\",\"" + planeNo
        + "\",\"" + airportLocation1
        + "\",\"" + airportLocation2
        + "\",\"" + airportName1
        + "\",\"" + airportName2
        + "\",\"" + takeOffTime.substring(0,10)
        + "\",\"" + landTime.substring(0,10)
        + "\",\"" + economyClassTicket
        + "\",\"" + businessClassTicket
        + "\",\"" + ectMoney
        + "\",\"" + bctMoney
        + "\"" + ')' + ">订票</button>" +
        "</div>" +
        "<div class=\"clearfix\"></div>" +
        "</div>"

    return a
}

/**
 * 搜随完成后会出现一个弹窗（伪）
 * 本函数用来修弹窗内容
 *
 * @param flightNo
 * @param airlineCompanyName
 * @param planeNo
 * @param airportLocation1
 * @param airportLocation2
 * @param airportName1
 * @param airportName2
 * @param takeOffTime
 * @param landTime
 * @param economyClassTicket
 * @param businessClassTicket
 * @param ectMoney
 * @param bctMoney
 */
function addClickToButton(flightNo, airlineCompanyName, planeNo,
                          airportLocation1, airportLocation2,
                          airportName1, airportName2,
                          takeOffTime, landTime,
                          economyClassTicket, businessClassTicket,
                          ectMoney, bctMoney) {
    const account = getAccount()

    if(account==null || account === '') {
        document.location.href = "login.html"
    } else {

        let html = "<div class=\"buykk-flight-info\">\n" +
            "<p><span>航班号：</span><span id=\"flightNo\">" +
            flightNo +
            "</span></p>" +
            "<p><span>航空公司：</span><span>" +
            airlineCompanyName +
            "</span></p>" +
            "<p><span>机型：</span><span>" +
            planeNo +
            "</span></p>" +
            "<table>" +
            "<colgroup>" +
            "<col style=\"width: 33%\">" +
            "<col style=\"width: 34%\">" +
            "<col style=\"width: 33%\">" +
            "</colgroup>" +
            "<tbody>" +
            "<tr>" +
            "<td>" +
            "<div>" +
            "<p>" +
            airportLocation1 +
            "</p>" +
            "<p>" +
            airportName1 +
            "</p>" +
            "<p>" +
            takeOffTime +
            "</p>" +
            "</div>\n" +
            "</td>\n" +
            "<td><p>飞往</p></td>\n" +
            "<td>" +
            "<div>" +
            "<p>" +
            airportLocation2 +
            "</p>" +
            "<p>" +
            airportName2 +
            "</p>" +
            "<p>" +
            landTime +
            "</p>" +
            "</div>" +
            "</td>" +
            "</tr>" +
            "</tbody>" +
            "</table>" +
            "</div>"

        html = html +
            "<div class=\"buykk-cabin-info\">" +
            "<label for=\"cabin-select\">选择舱位：</label>" +
            "<select id=\"cabin-select\">"

        if (economyClassTicket === 0) {
            html = html +
                "<option value=\"经济舱\" disabled=\"disabled\">经济舱(售空)</option>" +
                "<option value=\"商务舱\">商务舱/头等舱  售价: ￥" + bctMoney + "</option>"
        } else if (businessClassTicket === 0) {
            html = html +
                "<option value=\"经济舱\">经济舱        售价: ￥" + ectMoney + "</option>" +
                "<option value=\"商务舱\" disabled=\"disabled\">商务舱/头等舱(售空)</option>"
        } else {
            html = html +
                "<option value=\"经济舱\">经济舱        售价: ￥" + ectMoney + "</option>" +
                "<option value=\"商务舱\">商务舱/头等舱  售价: ￥" + bctMoney + "</option>"
        }

        html = html +
            "</select>\n" +
            "</div>"

        const xhttp = cbAJAX('findPassengerByAccountServlet?account='+account)
        xhttp.onreadystatechange = function () {
            if (this.readyState === 4 && this.status === 200) {

                html = html +
                    "<div class=\"buykk-cabin-info\">" +
                    "<label for=\"cabin-select\">选择乘客：</label>" +
                    "<select id=\"pIDNo\">"

                let select = ''
                const message = jQuery.parseJSON(this.responseText)
                $.each(message, function (i, n) {
                    select = select + "<option value=\"" + n.pIDNo + "\">" + n.pName + "/" +n.pIDNo+ "</option>"
                })
                if (select === '') {
                    alert("请先登记乘客信息再进行购票操作")
                    window.location.href = "idMessage.html"
                } else {
                    html = html + select + "</select></div>"
                    document.getElementById('messageFlight').innerHTML = html
                    document.getElementById('buykk-confirm').onclick = function () {
                        confirm(flightNo, account)
                    }
                    document.getElementById('buykk').style.display = 'flex';
                }
            }
        }
    }
}

function confirm (flightNo, account) {
    const pIDNo = document.getElementById('pIDNo').value.trim()
    const Level1 = document.getElementById('cabin-select').value.trim()
    const xhttp = cbAJAX('bookingTicketServlet?flightNo='+flightNo+'&account='+account+'&pIDNo='+pIDNo+'&Level1='+Level1)
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            if (this.responseText === 'true') {
                document.getElementById('buykk').style.display = 'none';
                alert("订票成功")
            } else {
                alert("订票失败")
            }
        }
    }
}