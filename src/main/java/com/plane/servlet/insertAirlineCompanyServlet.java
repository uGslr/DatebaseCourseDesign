package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "insertAirlineCompanyServlet", value = "/insertAirlineCompanyServlet")
public class insertAirlineCompanyServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String airlineCompanyName = TranscodingUtil.iso_8859_1_utf_8(request.getParameter("airlineCompanyName").trim());
        String airlineCompanyNo = request.getParameter("airlineCompanyNo");

        flightService fs = new flightServiceImpl();

        if (fs.insertAirlineCompany(airlineCompanyName, airlineCompanyNo)) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
