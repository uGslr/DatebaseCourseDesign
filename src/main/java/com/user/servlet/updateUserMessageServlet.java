package com.user.servlet;

import com.user.service.impl.userServiceImpl;
import com.user.service.userService;
import com.utils.TranscodingUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/updateUserMessageServlet")
public class updateUserMessageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String sex = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("sex"));
        String age = req.getParameter("age");
        String education = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("education"));
        String career = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("career"));

        String account = req.getParameter("account");

        // 实现服务类
        userService us = new userServiceImpl();

        us.insertCareer(account, career);
        us.insertEducation(account, education);
        us.insertAge(account, age);
        us.insertSex(account, sex);

        resp.getWriter().write("true");
    }
}
