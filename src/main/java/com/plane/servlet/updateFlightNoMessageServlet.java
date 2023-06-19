package com.plane.servlet;

import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "updateFlightNoMessageServlet", value = "/updateFlightNoMessageServlet")
public class updateFlightNoMessageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String flightNo = request.getParameter("flightNo").trim();

        flightService fs = new flightServiceImpl();

        if (fs.updateFlightNoMessage(flightNo)) {
            System.out.println("更新过期机票:"+flightNo);
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
