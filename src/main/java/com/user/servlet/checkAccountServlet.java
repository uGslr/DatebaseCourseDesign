package com.user.servlet;

import com.user.service.impl.userServiceImpl;
import com.user.service.userService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/checkAccountServlet")
public class checkAccountServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        System.out.println("正在检查账号是否已经被注册...");

        // 实现服务类
        userService us = new userServiceImpl();

        String account = req.getParameter("account");

        /*
        验证账号是否已经被注册
         */
        boolean t = us.checkAccount(account);
        System.out.println("账号已经被注册？"+t);
        resp.getWriter().write("" + t);
    }
}
