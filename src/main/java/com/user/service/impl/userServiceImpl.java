package com.user.service.impl;

import com.user.entity.userMessage;
import com.user.entity.userType;
import com.user.mapper.userMapper;
import com.user.service.userService;
import com.utils.SqlSessionFactoryUtil;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;

import java.sql.Date;

public class userServiceImpl implements userService {

    @Override
    public userMessage getUserMessage(String account) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        userMapper um = sqlSession.getMapper(userMapper.class);

        return um.findUserMessage(account);
    }

    public boolean createNew (String name, String account, String pwd,
                              String sex, String age, String education, String career)
    {
        if (!createBasicAccount(name, account, pwd)) {
            return false;
        }

        if (sex != null) {
            System.out.println("注册服务: 性别");
            insertSex(account, sex);
        }
        if (age != null) {
            System.out.println("注册服务: 年龄");
            insertAge(account, age);
        }
        if (education != null) {
            System.out.println("注册服务: 学历");
            insertEducation(account, education);
        }
        if (career != null) {
            System.out.println("注册服务: 职业");
            insertCareer(account, career);
        }

        return true;
    }

    /**
     * 通过在含有账户的表中查询该账户是否存在来判断是否可以创建该账户
     * @param name
     * @param account
     * @param pwd
     * @return
     */
    private boolean createBasicAccount(String name, String account, String pwd) {
        try {
            SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
            SqlSession sqlSession = sqlSessionFactory.openSession();
            userMapper um = sqlSession.getMapper(userMapper.class);

            if(um.findUserMessage(account) == null ) {

                int i = um.CreateNewUser(account, name, pwd);
//                System.out.println("insert:"+i);

                sqlSession.commit();
                sqlSession.close();

            } else {
                System.out.println("registerServiceError : 账号已经被注册");
                sqlSession.close();
                return false;
            }

        }catch (Exception e) {
            System.out.println("registerServiceError : createBasicAccount异常"+e);
            return false;
        }

        return true;
    }

    /**
     * 为用户设置性别信息
     * @param account
     * @param sex
     */
    public void insertSex(String account, String sex) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();
        userMapper um = sqlSession.getMapper(userMapper.class);

        um.AddUserSex(account, sex);

        sqlSession.commit();
        sqlSession.close();
    }

    /**
     * 为用户设置年龄信息
     * @param account
     * @param age
     */
    public void insertAge (String account, String age) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();
        userMapper um = sqlSession.getMapper(userMapper.class);

        Date sql_age = Date.valueOf(age);

        um.AddUserAge(account, sql_age);

        sqlSession.commit();
        sqlSession.close();
    }

    /**
     * 为用户设置学历信息
     * @param account
     * @param education
     */
    public void insertEducation (String account, String education) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();
        userMapper um = sqlSession.getMapper(userMapper.class);

        um.AddUserEducation(account, education);

        sqlSession.commit();
        sqlSession.close();
    }

    /**
     * 为用户设置职业信息
     * @param account
     * @param career
     */
    public void insertCareer (String account, String career) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();

        userMapper um = sqlSession.getMapper(userMapper.class);

        um.AddUserCareer(account, career);

        sqlSession.commit();
        sqlSession.close();
    }

    @Override
    public boolean checkAccount(String account) {
        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();
        SqlSession sqlSession = sqlSessionFactory.openSession();

        userMapper um = sqlSession.getMapper(userMapper.class);

        boolean t = um.findUserMessage(account) != null;
        sqlSession.close();

        //返回账户是否为空
        return t;
    }

    @Override
    public String validateLogin(String account, String password) {
        // 获取sqlSession对象

        SqlSessionFactory sqlSessionFactory = SqlSessionFactoryUtil.getSqlSessionFactory();

        SqlSession sqlSession = sqlSessionFactory.openSession();

        // 获取mapper代理

        userMapper um = sqlSession.getMapper(userMapper.class);

        userType ul = um.findUser(account, password);

        sqlSession.close();

        if (ul == null) {
            System.out.println("userService: 登录失败");
            return "";
        }

        System.out.println(ul.getuName()+" "+ul.getAccount()+" "+ul.getaType());

        System.out.println("userService: 登录成功");
        return ul.getaType();
    }
}
