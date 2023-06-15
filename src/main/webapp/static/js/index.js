

const timeElapsed = Date.now();
const today = new Date(timeElapsed);

const dateSelect = document.getElementById("dateSelect")
dateSelect.value = today.toISOString().substring(0, 10)
dateSelect.min = today.toISOString().substring(0, 10)

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

    const url = 'getFlightServlet?airportLocation1='+ start + '&airportLocation2='+ end + '&time=' + date
    const xhttp = cbAJAX(url)
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''
            $.each(message, function (i, n) {
                inner = inner + flightMessageString(
                    i,
                    n.airlineCompanyName,
                    n.flightNo,
                    n.airportName1,
                    n.takeOffTime,
                    n.airportName2,
                    n.landTime,
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

function flightMessageString (i, airLineCompanyName, flightNo, airportName1,
                              takeOffTime, airportName2, landTime, ectMoney, bctMoney) {
    let a = "<div class=\"Popular-Restaurants-grid wow fadeInRight\" data-wow-delay=\"0.4s\">\n" +
        "<div class=\"col-md-2 restaurent-title\">" +
        "<div class=\"acno-fno\">" +
        "<span><a href=\"#\" onclick=\"return false;\">" + airLineCompanyName + "</a></span>" +
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
        "<input type=\"button\" value=\"订票\">" +
        "</div>" +
        "<div class=\"clearfix\"></div>" +
        "</div>"

    return a
}