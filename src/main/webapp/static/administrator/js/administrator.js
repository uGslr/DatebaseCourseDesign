
/**
 * 将搜索到的航班信息插入界面
 */
function insertAllFlightMessage() {
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
function flightMessageString (airLineCompanyName, flightNo, airportName1,
                              takeOffTime, airportName2, landTime, ectMoney,
                              economyClassTicket, bctMoney, businessClassTicket) {

    const dateTime = new Date(+new Date()+8*3600*1000);
    const nowTime = new Date(dateTime).toISOString().substring(0, 16) // 精确到分钟
    return "<tr>" +
        "<td>" +
        "<input class=\"form-check-input m-0 align-middle\" type=\"checkbox\" aria-label=\"Select invoice\">" +
        "</td>" +
        "<td><span class=\"text-secondary\">" + flightNo + "</span></td>" +
        "<td><a href=\"invoice.html\" class=\"text-reset\" tabindex=\"-1\">" +
        airLineCompanyName +
        "</a></td>" +
        "<td>" +
         airportName1+
        "</td>" +
        "<td>" +
        airportName2 +
        "</td>" +
        "<td>" +
        "<input class='administrator-datetime-local' type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+takeOffTime+"\">" +
        "</td>" +
        "<td>" +
        "<input class='administrator-datetime-local' type=\"datetime-local\" min=\""+ nowTime +"\" value=\""+landTime+"\">" +
        "</td>" +
        "<td>" +
        economyClassTicket + "张 / ￥" + ectMoney +
        "</td>" +
        "<td>" +
        businessClassTicket + "张 / ￥" + bctMoney +
        "</td>" +
        "<td class=\"text-end\">" +
        "<span class=\"dropdown\">" +
        "<button class=\"btn align-text-top\" onclick='' '>修改</button>" +
        "</span>" +
        "</td>" +
        "</tr>"
}


function toAdministratorAllTFlight () {
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

function changeFlightMessage () {

}
