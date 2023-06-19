package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "changeFlightTimeServlet", value = "/changeFlightTimeServlet")
public class changeFlightTimeServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String flightNo = request.getParameter("flightNo").trim();
        String takeOffTime = request.getParameter("takeOffTime").trim();
        String landTime = request.getParameter("landTime").trim();

        flightService fs = new flightServiceImpl();

        if (fs.changeFlightTime(flightNo, takeOffTime, landTime))
            response.getWriter().write("true");
        else
            response.getWriter().write("false");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
