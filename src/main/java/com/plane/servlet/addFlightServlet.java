package com.plane.servlet;

import com.plane.service.flightMessageService;
import com.plane.service.serviceImpl.flightMessageServiceImpl;
import com.utils.TranscodingUtil;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "addFlightServlet", value = "/addFlightServlet")
public class addFlightServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
