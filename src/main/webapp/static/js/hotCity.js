function loadHostCity () {
    const xhttp = cbAJAX('findHotCityServlet')
    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200) {
            const message = jQuery.parseJSON(this.responseText)
            let inner = ''
            $.each(message, function (i, n) {
                inner = inner +
                    "<div class=\"card\">" +
                    "<img src=\"https://picsum.photos/1200/300/?random="+i+1+"\">" +
                    "<h2>"+n.city+"</h2>" +
                    "<p></p>" +
                    "<a href=\"https://www.baidu.com/s?wd="+ n.city+"\">了解更多</a>" +
                    "</div>"
            })
            if (inner !== '') {
                document.getElementById("hostCity").innerHTML = inner
            } else {
                document.getElementById("flightMessage").innerHTML =
                    "<div class=\"card\">" +
                    "<h2>暂未找到热门城市</h2>" +
                    "<p></p>" +
                    "</div>"
            }
        }
    }
}