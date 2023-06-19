package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "addFlightServlet", value = "/addFlightServlet")
public class addFlightServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        float ectMoney = 0;
        float bctMoney = 0;
        int state = -1;

        try {
            ectMoney = Float.parseFloat(request.getParameter("ectMoney"));
            bctMoney = Float.parseFloat(request.getParameter("bctMoney").trim());
            state = Integer.parseInt(request.getParameter("state").trim());
        } catch (Exception e) {
            System.out.println(e);
        }
        String airlineNo = request.getParameter("airlineNo").trim();
        String planeNo = request.getParameter("planeNo").trim();

        flightService fs = new flightServiceImpl();

        if (bctMoney==0 || ectMoney==0 || state==-1) {
            response.getWriter().write("false");
        } else if (fs.insertFlight(ectMoney, bctMoney, airlineNo, state, planeNo)) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
