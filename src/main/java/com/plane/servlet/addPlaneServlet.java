package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "addPlaneServlet", value = "/addPlaneServlet")
public class addPlaneServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String planeNo = request.getParameter("planeNo");
        String airlineCompanyNo = request.getParameter("airlineCompanyNo");
        String planeTypeNo = request.getParameter("planeTypeNo");
        int ect = Integer.parseInt(request.getParameter("ect"));
        int bct = Integer.parseInt(request.getParameter("bct"));

        flightService fs = new flightServiceImpl();

        if (fs.insertPlane(planeNo, airlineCompanyNo, planeTypeNo, ect, bct)) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
