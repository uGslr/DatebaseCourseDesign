package com.user.servlet;

import com.user.service.impl.registerServiceImpl;
import com.user.service.registerService;
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
        String sex = req.getParameter("sex");
        String age = req.getParameter("age");
        String education = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("education"));
        String career = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("career"));

        String account = req.getParameter("account");

        registerService rs = new registerServiceImpl();

        rs.insertCareer(account, career);
        rs.insertEducation(account, education);
        rs.insertAge(account, age);
        rs.insertSex(account, sex);

        resp.getWriter().write("true");
    }
}
