package com.user.mapper;

import com.user.entity.userMessage;
import com.user.entity.userType;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.sql.Date;

@Mapper
public interface userMapper {

    /**
     * 输入账号，返回该账号所有的基本信息
     * 有两种用途 1、检查该账号是否已经被注册 2、查询用户信息以展示
     *
     * @param account 用户的账号
     * @return 一个实体，由于账号是主键所以只有一个
     */
    userMessage findUserMessage (@Param("account") String account);

    /**
     * 通过输入账号和密码查找该账号是否存在
     * 检查输入的账号是否正确，账号和密码是否对应
     * 找到该账号的账号类型
     *
     * @param account 账号
     * @param password 账号密码
     * @return 返回一个实体，实体有两个属性分别是账号和账号类型
     */
    userType findUser (@Param("account") String account,
                       @Param("password") String password);

    /**
     * 创建账户时会用，因为不确定是否创建时是否会输入如年龄等其它信息，
     * 所以先用插入一条新记录时必须要给的数据插入一条新记录
     *
     * @param account 账号
     * @param uName 用户名
     * @param password 密码
     * @return 如果大于0，就代表插入成功
     */
    int CreateNewUser(@Param("account") String account,
                      @Param("uName") String uName,
                      @Param("password") String password);

    /**
     * 为用户添加年龄信息
     *
     * @param account 账号
     * @param age 年龄信息
     */
    void AddUserAge(@Param("account") String account,
                    @Param("age") String age);

    /**
     * 为用户添加性别信息
     *
     * @param account 账号
     * @param sex 性别信息
     */
    void AddUserSex(@Param("account") String account,
                    @Param("sex") String sex);

    /**
     * 为用户添加学历信息
     * @param account 账号
     * @param education 学历信息
     */
    void AddUserEducation(@Param("account") String account,
                          @Param("education") String education);

    /**
     * 为用户添加职业信息
     *
     * @param account 账户
     * @param career 职业
     */
    void AddUserCareer(@Param("account") String account,
                       @Param("career") String career);

    /**
     * 修改用户的账号类别
     * @param account 账户
     * @param aType 账号类别
     */
    void ChangeUserAType(@Param("account") String account,
                      @Param("aType") String aType);

    int changePwd(@Param("account") String account,
                  @Param("pwd") String pwd);
}
