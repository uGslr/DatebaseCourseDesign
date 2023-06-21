package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.bill;
import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/findBillServlet")
public class findBillServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        flightService fs = new flightServiceImpl();

        List<bill> flight = fs.findAllMoneyByFlightNo();

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(flight);

        // 响应数据
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(jsonUm);
    }
}
