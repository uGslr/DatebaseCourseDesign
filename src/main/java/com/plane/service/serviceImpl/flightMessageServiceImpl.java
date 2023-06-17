package com.plane.service.serviceImpl;

import com.plane.entity.flight;
import com.plane.mapper.flightMapper;
import com.plane.service.flightMessageService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class flightMessageServiceImpl implements flightMessageService {

    @Override
    public List<flight> getFlightByMessage(String airportLocation1, String airportLocation2, String time) {
        String time1 = time+" 00:00:00";
        String time2 = time+" 23:59:59";

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        return fm.getFlightByMessage(airportLocation1, airportLocation2, time1, time2);
    }

    @Override
    public List<flight> getFlightByNo(String flightNo) {

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        return fm.getFlightByNo(flightNo);
    }

    @Override
    public List<flight> getFlightAll() {

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        return fm.getFlightAll();
    }

    @Override
    public void insertTicket(String flightNo, String account, String pIDNo, String Level1) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        fm.insertTicket(flightNo, account, pIDNo, Level1);
    }

    @Override
    public void insertFlight(String takeOffTime, String landTime, int economyClassTicket, int businessClassTicket,
                             float ectMoney, float bctMoney, String airlineNo, int state, String planeNo) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        fm.insertFlight(takeOffTime, landTime, economyClassTicket,
                businessClassTicket, ectMoney, bctMoney, airlineNo, state, planeNo);
    }
}
