package com.plane.servlet;

import com.plane.service.flightMService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/getFlightByNoServlet")
public class getFlightByNoServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String flightNo = req.getParameter("flightNo").trim();

        flightMService fms = new flightServiceImpl();
    }
}
