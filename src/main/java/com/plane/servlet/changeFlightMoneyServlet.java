package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "changeFlightMoneyServlet", value = "/changeFlightMoneyServlet")
public class changeFlightMoneyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        float ectMoney = Float.parseFloat(request.getParameter("ectMoney"));
        float bctMoney = Float.parseFloat(request.getParameter("bctMoney"));

        String flightNo = request.getParameter("flightNo").trim();

        flightService fs = new flightServiceImpl();

        if (fs.updateFlightMoney(ectMoney, bctMoney, flightNo)) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
