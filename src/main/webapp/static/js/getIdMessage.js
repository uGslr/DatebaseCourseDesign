function loadPassengerMessage() {

    const xhttp = cbAJAX('findPassengerByAccountServlet?account='+getAccount())

    xhttp.onreadystatechange = function () {
        if (this.readyState === 4 && this.status === 200){
            let select = ''
            const message = jQuery.parseJSON(this.responseText)
            $.each(message, function (i, n) {
                const id = n.pIDNo.substring(0,4)+'***********'+n.pIDNo.substring(14,18)
                select = select +
                    "<label>" + n.pName + "<a onclick="+ 'deletePassenger('+"\"" +getAccount()+"\",\""+n.pIDNo+"\""+')'+">删除</a></label>" +
                    "<input type=\"text\" readonly=\"readonly\" " +
                    "value=\"" + id + "\" " +
                    "style=\"border: rgba(255,255,255,0)\">"
            })
            let html = ''
            if (select === '') {
                html = "<label>当前暂未有登记信息，请登记实名信息后进行购票</label>"
            } else {
                html = select
            }

            document.getElementById("idMessage").innerHTML = html
        }
    }
}

function deletePassenger(account, pIDNo) {
    if(confirm("确认删除?")){
        let xhttp = cbAJAX('deletePassengerServlet?account='+account+'&pIDNo='+pIDNo)
        xhttp.onreadystatechange = function () {
            if(this.readyState === 4 && this.status === 200) {
                if(this.responseText === 'true'){
                    alert("删除成功")
                    loadPassengerMessage()
                } else
                    alert("删除失败")
            }
        }
    }
}