package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.airline;
import com.plane.entity.flight;
import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/findFlightByUnknownServlet")
public class findFlightByUnknownServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String x = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("x").trim());

        flightService fs = new flightServiceImpl();

        List<flight> airline = fs.getFlightByUnknown(x);
        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(airline);

        // 响应数据
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(jsonUm);
    }
}
