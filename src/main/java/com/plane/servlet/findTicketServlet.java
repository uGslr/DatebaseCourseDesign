package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.ticket;
import com.plane.service.flightMService;
import com.plane.service.serviceImpl.flightServiceImpl;
import com.plane.service.serviceImpl.ticketServiceImpl;
import com.plane.service.ticketService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "findTicketServlet", value = "/findTicketServlet")
public class findTicketServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String account = request.getParameter("account").trim();

        System.out.println("正在搜索用户"+account+"的全部订票记录");

        ticketService ts = new ticketServiceImpl();

        List<ticket> ticket = ts.findTicket(account);

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(ticket);

        // 响应数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonUm);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
