package com.plane.entity;

public class plane {
    String planeNo;
    String airlineCompanyNo;
    int age;
    String planeTypeNo;
    String state;
    int ect;
    int bct;

    public plane() {
    }

    public plane(String planeNo, String airlineCompanyNo, int age, String planeTypeNo, String state, int ect, int bct) {
        this.planeNo = planeNo;
        this.airlineCompanyNo = airlineCompanyNo;
        this.age = age;
        this.planeTypeNo = planeTypeNo;
        this.state = state;
        this.ect = ect;
        this.bct = bct;
    }

    public String getPlaneNo() {
        return planeNo;
    }

    public void setPlaneNo(String planeNo) {
        this.planeNo = planeNo;
    }

    public String getAirlineCompanyNo() {
        return airlineCompanyNo;
    }

    public void setAirlineCompanyNo(String airlineCompanyNo) {
        this.airlineCompanyNo = airlineCompanyNo;
    }

    public int getAge() {
        return age;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public String getPlaneTypeNo() {
        return planeTypeNo;
    }

    public void setPlaneTypeNo(String planeTypeNo) {
        this.planeTypeNo = planeTypeNo;
    }

    public String getState() {
        return state;
    }

    public void setState(String state) {
        this.state = state;
    }

    public int getEct() {
        return ect;
    }

    public void setEct(int ect) {
        this.ect = ect;
    }

    public int getBct() {
        return bct;
    }

    public void setBct(int bct) {
        this.bct = bct;
    }
}
