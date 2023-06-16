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


@WebServlet("/registerServlet")
public class registerServlet extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String account = req.getParameter("account");
        String pwd = req.getParameter("pwd");
        String name = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("name"));
        String sex = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("sex"));
        String age = req.getParameter("age");
        String education = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("education"));
        String career = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("career"));
        System.out.println(name+" "+account+" "+pwd+" "+sex+" "+age+" "+education+" "+career);


        // 实现服务类
        userService us = new userServiceImpl();

        boolean flag = us.createNew(name, account, pwd, sex, age, education, career);

        if (flag) {
            System.out.println("注册成功");
//            resp.sendRedirect("/demo3/login.html");
        } else {
            System.out.println("注册失败");
//            resp.sendRedirect("/demo3/register.html");
        }

        resp.getWriter().write(""+flag);
    }

}
