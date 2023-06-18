package com.passenger.service.impl;

import com.passenger.entity.passenger;
import com.passenger.mapper.passengerMapper;
import com.passenger.service.passengerService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.util.List;

public class passengerServiceImpl implements passengerService {
    /**
     * 主要功能是在数据库中新增数据
     * 该方法功能拆分的不够细致
     * @param account
     * @param pName
     * @param pIDNoType
     * @param pIDNo
     * @param pPhone
     * @return unknown success
     */
    @Override
    public String newPassenger(String account, String pName, String pIDNoType, String pIDNo, String pPhone) {
        if (!rAccount(account))
            return "unknown";

        // 准备进行数据库操作
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();

        passengerMapper pm = sqlSession.getMapper(passengerMapper.class);

        // 检查该用户是否已经登记过该乘客信息
//        System.out.println(pm.findConnect(pIDNo, account));
        if (pm.findConnect(pIDNo, account) != null)
            return "repeat";

        if (pm.findPassenger(pIDNo) != null ) {
            // 数据库中已经存在该身份证号（身份证唯一），且并未建立连接，只要与当前账户建立连接即可
            pm.addConnect(pIDNo, account);
        } else {

            // 数据库中不存在该id，所以需要先创建身份信息再和当前账户建立连接

            pm.addPassenger(pName, pIDNoType, pIDNo);

            if (pPhone != null && !pPhone.equals("")) {
                pm.addPhone(pIDNo, pPhone);
            }

            pm.addConnect(pIDNo, account);
        }

        sqlSession.commit();
        sqlSession.close();

        return "success";
    }

    @Override
    public List<passenger> findPassengerByAccount(String account) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        passengerMapper pm = sqlSession.getMapper(passengerMapper.class);

        List<passenger> t = pm.findPassengerByAccount(account);
        sqlSession.close();

        return t;
    }

    /**
     * 检测账号书写是否正确
     * @param account
     * @return
     */
    private boolean rAccount(String account) {
        if (account.length() == 11)
            return true;

        return false;
    }
}
