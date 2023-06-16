

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

function flightMessageString (airLineCompanyName, flightNo, airportName1,
                              takeOffTime, airportName2, landTime, ectMoney,
                              economyClassTicket, bctMoney, businessClassTicket) {
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
        takeOffTime.substring(0,16) +
        "</td>" +
        "<td>" +
        landTime.substring(0,16) +
        "</td>" +
        "<td>" +
        economyClassTicket + "张 / ￥" + ectMoney +
        "</td>" +
        "<td>" +
        businessClassTicket + "张 / ￥" + bctMoney +
        "</td>" +
        "<td class=\"text-end\">" +
        "<span class=\"dropdown\">" +
        "<button class=\"btn dropdown-toggle align-text-top\" data-bs-boundary=\"viewport\" data-bs-toggle=\"dropdown\">操 作</button>" +
        "<div class=\"dropdown-menu dropdown-menu-end\">" +
        "<a class=\"dropdown-item\" href=\"#\">" +
        "Action" +
        "</a>" +
        "<a class=\"dropdown-item\" href=\"#\">" +
        "Another action" +
        "</a>" +
        "</div>" +
        "</span>" +
        "</td>" +
        "</tr>"
}