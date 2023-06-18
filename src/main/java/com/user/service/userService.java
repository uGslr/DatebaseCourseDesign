package com.user.service;

import com.user.entity.userMessage;

public interface userService {

    public boolean createNew (String name, String account, String pwd,
                              String sex, String age, String education, String career);

    public void insertSex(String account, String sex);

    public void insertAge (String account, String age);

    public void insertEducation (String account, String education);

    public void insertCareer (String account, String career);

    public boolean checkAccount(String account);

    /**
     * 检测账户账户是否存在
     *
     * @param account 账户
     * @param password 密码
     * @return 登录失败返回空字符串，成功则返回账户类型
     */
    public String validateLogin(String account, String password);
    public userMessage getUserMessage(String account);

    boolean changePwd(String account, String oldPwd, String newPwd);
}
