package com.user.service.impl;

import com.user.entity.userMessage;
import com.user.mapper.userMapper;
import com.user.service.userService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

public class userServiceImpl implements userService {

    @Override
    public userMessage getUserMessage(String account) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        userMapper um = sqlSession.getMapper(userMapper.class);

        return um.findUserMessage(account);
    }
}
