package com.passenger.servlet;

import com.passenger.service.impl.passengerServiceImpl;
import com.passenger.service.passengerService;
import com.utils.TranscodingUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet("/idMessageServlet")
public class idMessageServlet extends HttpServlet {
    /**
     * 为当前账户新增乘客信息
     * 如果增加成功，会给前端发送success
     * 失败
     * cookie寻找失败 unknown
     * 找不到account信息 unknown
     * account不正确 unknown
     *
     * 如后续升级，可对这三种错误传回不同值，在前端做出不同的应对
     *
     * 该用户已经登记过该乘客信息 repeat
     *
     * 由于需要处理cookie，本方法功能不够分散，需优化
     * @param req
     * @param resp
     * @throws ServletException
     * @throws IOException
     */
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {


        String pName = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("pName"));
        String pIDNoType = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("pIDNoType"));
        String pIDNo = req.getParameter("pIDNo");
        String pPhone = req.getParameter("pPhone");

        Cookie[] cookies = req.getCookies();
        if (cookies == null) {
            System.out.println("idMessageServlet: cookie寻找失败");

            resp.getWriter().write("unknown");
        } else {

            // 如果在cookies中找到了符合要求的键值对，就改变a的值
            int a = -1;

            for (int i = 0; i < cookies.length; i++) {
                if (cookies[i].getName().equals("account")) {
                    a = i;
                    break;
                }
            }

            if (a != -1) {
                // 有account信息
                String account = cookies[a].getValue().trim();

                passengerService nps = new passengerServiceImpl();

                String flag = nps.newPassenger(account, pName, pIDNoType, pIDNo, pPhone);

                System.out.println("idMessageServlet: " + flag);

                resp.getWriter().write(flag);

            } else {
                System.out.println("idMessageServlet: 未知错误，找不到account信息");

                resp.getWriter().write("unknown");
            }
        }
    }
}
