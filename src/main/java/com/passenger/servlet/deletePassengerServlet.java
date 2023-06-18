package com.passenger.servlet;

import com.passenger.service.impl.passengerServiceImpl;
import com.passenger.service.passengerService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "deletePassengerServlet", value = "/deletePassengerServlet")
public class deletePassengerServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String account = request.getParameter("account").trim();
        String pIDNo = request.getParameter("pIDNo").trim();

        passengerService ps = new passengerServiceImpl();

        if(ps.deletePassenger(account, pIDNo))
            response.getWriter().write("true");
        else
            response.getWriter().write("false");
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
