package com.user.entity;

public class userType {

    private String account;

    private String uName;

    private String aType;

    public String getuName() {
        return uName;
    }

    public void setuName(String uName) {
        this.uName = uName;
    }

    public userType(String account, String uName, String aType) {
        this.account = account;
        this.aType = aType;
        this.uName = uName;
    }

    public userType() {
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public void setaType(String aType) {
        this.aType = aType;
    }

    public String getaType() {
        return aType;
    }

    public String getAccount() {
        return account;
    }

}
