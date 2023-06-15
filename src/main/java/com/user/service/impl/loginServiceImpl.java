package com.user.service.impl;

import com.user.entity.userType;
import com.user.mapper.userMapper;
import com.user.service.loginService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class loginServiceImpl implements loginService {

    @Override
    public boolean validateLogin(String account, String password) {
        // 获取sqlSession对象

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 获取mapper代理

        userMapper um = sqlSession.getMapper(userMapper.class);

        userType ul = um.findUser(account, password);

        System.out.println(account+" "+password);

        sqlSession.close();

        if (ul == null) {
            System.out.println("loginService: 登录失败");
            return false;
        }

        System.out.println("loginService: 登录成功");
        return true;
    }
}
