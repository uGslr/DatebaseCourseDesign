package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.flight;
import com.plane.service.flightMessageService;
import com.plane.service.serviceImpl.flightMessageServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/getFlightServlet")
public class getFlightServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String airportLocation1 = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("airportLocation1").trim());
        String airportLocation2 = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("airportLocation2").trim());
        String time = req.getParameter("time");

        System.out.println(airportLocation1+" "+airportLocation2+" "+time);

        flightMessageService fms = new flightMessageServiceImpl();
        List<flight> f = fms.getFlightMessage(airportLocation1, airportLocation2, time);
//        System.out.println(f);

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(f);

        // 响应数据
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(jsonUm);
    }
}
