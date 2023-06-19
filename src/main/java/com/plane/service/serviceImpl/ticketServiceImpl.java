package com.plane.service.serviceImpl;

import com.plane.entity.ticket;
import com.plane.mapper.flightMapper;
import com.plane.service.ticketService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

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
}
