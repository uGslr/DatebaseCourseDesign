package com.plane.service.serviceImpl;

import com.plane.entity.flight;
import com.plane.entity.ticket;
import com.plane.mapper.flightMapper;
import com.plane.service.flightMService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class flightServiceImpl implements flightMService {

    @Override
    public List<flight> getFlightByMessage(String airportLocation1, String airportLocation2, String time) {
        String time1 = time+" 00:00:00";
        String time2 = time+" 23:59:59";

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        List<flight> t = fm.getFlightByMessage(airportLocation1, airportLocation2, time1, time2);
        sqlSession.close();

        return t;
    }

    @Override
    public List<flight> getFlightByNo(String flightNo) {

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        List<flight> t = fm.getFlightByNo(flightNo);
        sqlSession.close();

        return t;
    }

    @Override
    public List<flight> getFlightAll() {

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        List<flight> t = fm.getFlightAll();
        sqlSession.close();

        return t;
    }

    @Override
    public boolean insertFlight(int economyClassTicket, int businessClassTicket,
                             float ectMoney, float bctMoney, String airlineNo, int state, String planeNo) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        try {
            fm.insertFlight(ectMoney, bctMoney, airlineNo, planeNo);
            sqlSession.commit();
            sqlSession.close();
        } catch (Exception e) {
            sqlSession.commit();
            sqlSession.close();
            System.out.println("flightMService:error");
            System.out.println(e);
            return false;
        }

        return true;
    }

    @Override
    public boolean changeFlightTime(String flightNo, String takeOffTime, String landTime) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        int t = fm.changeFlightTime(flightNo, takeOffTime, landTime);

        sqlSession.commit();
        sqlSession.close();

        return t > 0;
    }

}
