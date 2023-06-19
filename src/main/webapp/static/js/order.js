
function loadTicketMessage() {
    const xhttp = cbAJAX('findTicketServlet?account='+getAccount())
    xhttp.onreadystatechange = function () {
        if (this.status===200&&this.readyState===4) {
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''
            $.each(message, function (i, message) {

                inner = inner +
                    "<div class=\"info-ticketMessage\">" +
                    "<h2>订单号:"+ message.ticketNo +"</h2>" +
                    "<label>航班号:"+ message.flightNo +"</label>" +
                    "<label>从"+ message.airportName1 +"</label>" +
                    "<label>到"+ message.airportName2+"</label>" +
                    "<label>起飞时间:"+ message.takeOffTime.substring(0, 16)+"</label>" +
                    "<label>￥"+ message.money+"</label>" +
                    "<label>"+ message.level1 +"</label>" +
                    "<label>乘机人:"+ message.pName +"</label>"

                // 获取当前时间
                const currentDate = new Date(+new Date()+8*3600*1000);

                // 将起飞时间转换为Date对象
                const dateObj = new Date(message.takeOffTime);

                // 比较两个日期对象
                if (dateObj > currentDate) {
                    inner = inner +
                        "<button>改签</button>" +
                        "<button onclick=" + 'returnTicket('+"\""+message.ticketNo+"\"" + ')'+">退票</button>" +
                        "<div class=\"btn-container\"></div>" +
                        "</div>"
                } else {
                    inner = inner +
                        "<button disabled>改签</button>" +
                        "<button disabled>退票</button>" +
                        "<div class=\"btn-container\"></div>" +
                        "</div>"
                }
            })
            document.getElementById("info-ticketMessage-in").innerHTML = inner
        }
    }
}

function returnTicket (ticketNo) {
    if(window.confirm("您是否退票?")) {
        const xhttp = cbAJAX('returnTicketServlet?ticketNo='+ticketNo)
        xhttp.onreadystatechange = function () {
            if(this.status===200&&this.readyState===4){
                if (this.responseText==='true') {
                    window.alert('退票成功')
                    loadTicketMessage()
                } else {
                    window.alert('退票失败')
                }
            }
        }
    }
}