package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.city;
import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;
import java.util.List;

@WebServlet(name = "getHotCityServlet", value = "/getHotCityServlet")
public class getHotCityServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        flightService fs = new flightServiceImpl();

        List<city> hotCity = fs.findHotCity();

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(hotCity);

        // 响应数据
        response.setContentType("text/json;charset=utf-8");
        response.getWriter().write(jsonUm);
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
