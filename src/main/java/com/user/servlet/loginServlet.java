package com.user.servlet;

import com.user.service.impl.userServiceImpl;
import com.user.service.userService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/loginServlet")
public class loginServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        System.out.print("loginServlet: ");
        // 获取表单填写的值

        String account = req.getParameter("account");
        String password = req.getParameter("pwd");

        // 实现服务类
        userService us = new userServiceImpl();

        String aType = us.validateLogin(account,password);

        if (aType != "") {
            Cookie cookie = new Cookie("account", account);
            resp.addCookie(cookie);
            System.out.println("loginServlet: 已尝试发送cookie");

        }

        resp.getWriter().write(aType);

    }

}
