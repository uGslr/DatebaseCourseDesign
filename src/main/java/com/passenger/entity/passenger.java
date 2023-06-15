package com.passenger.entity;

public class passenger {
    String pName;
    String pIDNoType;
    String pIDNo;
    String pPhone;

    public passenger(String pName, String pIDNoType, String pIDNo, String pPhone) {
        this.pName = pName;
        this.pIDNoType = pIDNoType;
        this.pIDNo = pIDNo;
        this.pPhone = pPhone;
    }

    public passenger() {
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public String getpIDNoType() {
        return pIDNoType;
    }

    public void setpIDNoType(String pIDNoType) {
        this.pIDNoType = pIDNoType;
    }

    public String getpIDNo() {
        return pIDNo;
    }

    public void setpIDNo(String pIDNo) {
        this.pIDNo = pIDNo;
    }

    public String getpPhone() {
        return pPhone;
    }

    public void setpPhone(String pPhone) {
        this.pPhone = pPhone;
    }
}
