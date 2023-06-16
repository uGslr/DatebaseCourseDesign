package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.flight;
import com.plane.service.flightMessageService;
import com.plane.service.serviceImpl.flightMessageServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "getFlightAllServlet", value = "/getFlightAllServlet")
public class getFlightAllServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        flightMessageService fms = new flightMessageServiceImpl();

        List<flight> flight = fms.getFlightAll();

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(flight);

        // 响应数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonUm);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
