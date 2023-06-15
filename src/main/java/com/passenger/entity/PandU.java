package com.passenger.entity;

public class PandU {
    String pIDNo;
    String account;

    public String getpIDNo() {
        return pIDNo;
    }

    public void setpIDNo(String pIDNo) {
        this.pIDNo = pIDNo;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }

    public PandU(String pIDNo, String account) {
        this.pIDNo = pIDNo;
        this.account = account;
    }

    public PandU() {
    }
}
