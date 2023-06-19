package com.passenger.servlet;

import com.alibaba.fastjson.JSON;
import com.passenger.service.impl.passengerServiceImpl;
import com.passenger.service.passengerService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "findPassengerByAccountServlet", value = "/findPassengerByAccountServlet")
public class findPassengerByAccountServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String account = request.getParameter("account");

        passengerService ps = new passengerServiceImpl();

        System.out.print("findPassengerByAccountServlet:");
        System.out.println("正在寻找账号"+account+"所有乘客登记信息");

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(ps.findPassengerByAccount(account));

        // 响应数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonUm);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
