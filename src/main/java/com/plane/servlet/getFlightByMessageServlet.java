package com.plane.servlet;

import com.alibaba.fastjson.JSON;
import com.plane.entity.flight;
import com.plane.service.flightService;
import com.plane.service.serviceImpl.flightServiceImpl;
import com.utils.TimeUtil;
import com.utils.TranscodingUtil;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

@WebServlet("/getFlightByMessageServlet")
public class getFlightByMessageServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        String airportLocation1 = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("airportLocation1").trim());
        String airportLocation2 = TranscodingUtil.iso_8859_1_utf_8(req.getParameter("airportLocation2").trim());
        String time = req.getParameter("time");

        System.out.println(airportLocation1+" "+airportLocation2+" "+time);

        flightService fms = new flightServiceImpl();
        List<flight> f = fms.getFlightByMessage(airportLocation1, airportLocation2, time);

//        System.out.println(TimeUtil.toDate(time, "yyyy-MM-dd").compareTo(TimeUtil.getTime("yyyy-MM-dd")));
        if (TimeUtil.toDate(time, "yyyy-MM-dd").compareTo(TimeUtil.getTime("yyyy-MM-dd")) == 0) {
            /**
            删除当天内已经超过现在时间的航班
            没有测试过这个功能
             */
            for (int i=0; i<f.size(); i++) {
                /*
                compareTo方法的返回值 前者小于后者-1 等于0 大于1
                 */
                if (TimeUtil.toDate(f.get(i).getTakeOffTime(), "yyyy-MM-dd HH:mm:ss")
                        .compareTo(TimeUtil.getTime("yyyy-MM-dd HH:mm:ss")) <= 0) {
                    f.remove(i);
                }
            }
        }
//        for (int i=0; i<f.size(); i++) {
//                /*
//                compareTo方法的返回值 前者小于后者-1 等于0 大于1
//                 */
//            System.out.println(TimeUtil.toDate(f.get(i).getTakeOffTime(), "yyyy-MM-dd HH:mm:ss")+" "+TimeUtil.getTime("yyyy-MM-dd HH:mm:ss"));
//                if (TimeUtil.toDate(f.get(i).getTakeOffTime(), "yyyy-MM-dd HH:mm:ss")
//                        .compareTo(TimeUtil.getTime("yyyy-MM-dd HH:mm:ss")) <= 0) {
//                    f.remove(i);
//                }
//            }

        // 将其转化为json数据 序列化
        String jsonUm = JSON.toJSONString(f);

        // 响应数据
        resp.setContentType("text/json;charset=utf-8");
        resp.getWriter().write(jsonUm);
    }
}
