package com.plane.servlet;

import com.plane.service.serviceImpl.ticketServiceImpl;
import com.plane.service.ticketService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "returnTicketServlet", value = "/returnTicketServlet")
public class returnTicketServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String ticketNo = request.getParameter("ticketNo").trim();

        ticketService ts = new ticketServiceImpl();

        if(ts.returnTicket(ticketNo)) {
            System.out.println("票号为："+ticketNo+"的机票被退票");
            response.getWriter().write("true");
        } else {
            System.out.println("执行了退票功能但是没有任何一张票被成功推掉");
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
