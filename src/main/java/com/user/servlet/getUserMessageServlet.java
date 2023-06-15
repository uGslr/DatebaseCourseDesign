package com.user.servlet;

import com.alibaba.fastjson.JSON;
import com.user.entity.userMessage;
import com.user.service.impl.userServiceImpl;
import com.user.service.userService;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/getUserMessageServlet")
public class getUserMessageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        userService us = new userServiceImpl();

        userMessage um = us.getUserMessage(req.getParameter("account"));

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(um);

        // 响应数据
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(jsonUm);
    }
}
