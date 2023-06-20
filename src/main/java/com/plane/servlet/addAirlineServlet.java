package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "addAirlineServlet", value = "/addAirlineServlet")
public class addAirlineServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        int airportNo1 = Integer.parseInt(request.getParameter("airportNo1"));
        int airportNo2 = Integer.parseInt(request.getParameter("airportNo2"));

        flightService fs = new flightServiceImpl();

        if (fs.findAirlineIsRepeat(airportNo1, airportNo2)) {
            response.getWriter().write("repeat");
        } else {
            if (fs.insertAirline(airportNo1, airportNo2)) {
                response.getWriter().write("true");
            } else {
                response.getWriter().write("false");
            }
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
