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
    public List<flight> getFlightMessage(String airportLocation1, String airportLocation2, String time) {
        String time1 = time+" 00:00:00";
        String time2 = time+" 23:59:59";

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        flightMapper fm = sqlSession.getMapper(flightMapper.class);

        return fm.getFlightMessage(airportLocation1, airportLocation2, time1, time2);
    }
}
