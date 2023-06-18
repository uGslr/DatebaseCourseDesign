package com.user.servlet;

import com.user.service.impl.userServiceImpl;
import com.user.service.userService;

import javax.servlet.*;
import javax.servlet.http.*;
import javax.servlet.annotation.*;
import java.io.IOException;

@WebServlet(name = "changePwdServlet", value = "/changePwdServlet")
public class changePwdServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

        String account = request.getParameter("account").trim();
        String oldPwd = request.getParameter("oldPwd").trim();
        String newPwd = request.getParameter("newPwd").trim();

        userService us = new userServiceImpl();

        if (us.changePwd(account, oldPwd, newPwd)) {
            response.getWriter().write("true");
        } else {
            response.getWriter().write("false");
        }

    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
