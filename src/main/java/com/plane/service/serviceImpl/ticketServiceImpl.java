package com.plane.service.serviceImpl;

import com.plane.entity.ticket;
import com.plane.mapper.flightMapper;
import com.plane.service.ticketService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;

public class ticketServiceImpl implements ticketService {
    @Override
    public boolean insertTicket(String flightNo, String account, String pIDNo, String Level1) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        try {
            fm.insertTicket("ticketNo",flightNo, account, pIDNo, Level1);
            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            sqlSession.close();
            System.out.println("flightService:error");
            System.out.println(e);
            return false;
        }

        return true;
    }

    @Override
    public List<ticket> findTicket(String account) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        List<ticket> t = fm.findTicket(account);

        sqlSession.close();

        return t;
    }

    @Override
    public boolean returnTicket(String ticketNo) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        int t = fm.returnTicket(ticketNo);

        sqlSession.commit();
        sqlSession.close();

        return t > 0;
    }

    /**
     * 通过判断是否有未过期票的方法判断是否能否继续订票
     * @param pIDNo
     * @param flightNo
     * @return true表示不能继续订票
     */
    @Override
    public boolean isIDHaveTicket(String pIDNo, String flightNo) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        List<ticket> t = fm.findTicketByID(pIDNo, flightNo);

        sqlSession.close();

        SimpleDateFormat ft = new SimpleDateFormat("yyyy-MM-dd HH:mm");
        // 获取当前时间
        long currentTime = System.currentTimeMillis();

        for (int i=0; i<t.size(); i++) {
            Date date;
            try {
                date = ft.parse(t.get(i).getTakeOffTime());
            } catch (ParseException e) {
                return true;
            }
            System.out.println(date);
            long argTime = date.getTime();
            // 比较当前时间与查到的同一个身份证订同一张票的时间对比，如果当前时间更大，则允许买票
            System.out.println(argTime+" "+currentTime);
            if(argTime >= currentTime) {
                return true;
            }else{
                return false;
            }
        }
        return false;
    }
}
