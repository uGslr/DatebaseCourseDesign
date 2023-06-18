package com.plane.servlet;

import com.plane.service.flightMessageService;
import com.plane.service.serviceImpl.flightMessageServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "bookingTicketServlet", value = "/bookingTicketServlet")
public class bookingTicketServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String flightNo = request.getParameter("flightNo");
        String account = request.getParameter("account");
        String pIDNo = request.getParameter("pIDNo");
        String Level1 = TranscodingUtil.iso_8859_1_utf_8(request.getParameter("Level1"));

        flightMessageService fms = new flightMessageServiceImpl();
        System.out.println(flightNo+" "+account+" "+pIDNo+" "+Level1);
        boolean flag = fms.insertTicket(flightNo, account, pIDNo, Level1);

        if (flag) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
