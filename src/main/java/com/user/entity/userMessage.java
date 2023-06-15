package com.user.entity;

import java.sql.Date;

public class userMessage {
    private String account;
    private String uName;
    private Date age;
    private String sex;
    private String education;
    private String career;


    public userMessage() {
    }

    public userMessage(String account, String uName, Date age, String sex, String education, String career) {
        this.account = account;
        this.uName = uName;
        this.age = age;
        this.sex = sex;
        this.education = education;
        this.career = career;
    }

    public String getAccount() {
        return account;
    }

    public String getuName() {
        return uName;
    }

    public Date getAge() {
        return age;
    }

    public String getSex() {
        return sex;
    }

    public String getEducation() {
        return education;
    }

    public String getCareer() {
        return career;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public void setAge(Date age) {
        this.age = age;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setEducation(String education) {
        this.education = education;
    }

    public void setCareer(String career) {
        this.career = career;
    }

}
