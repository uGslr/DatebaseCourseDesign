package com.plane.entity;

public class company {
    String airlineCompanyNo;
    String airlineCompanyName;
    String planeNum;

    public company() {
    }

    public company(String airlineCompanyNo, String airlineCompanyName, String planeNum) {
        this.airlineCompanyNo = airlineCompanyNo;
        this.airlineCompanyName = airlineCompanyName;
        this.planeNum = planeNum;
    }

    public String getAirlineCompanyNo() {
        return airlineCompanyNo;
    }

    public void setAirlineCompanyNo(String airlineCompanyNo) {
        this.airlineCompanyNo = airlineCompanyNo;
    }

    public String getAirlineCompanyName() {
        return airlineCompanyName;
    }

    public void setAirlineCompanyName(String airlineCompanyName) {
        this.airlineCompanyName = airlineCompanyName;
    }

    public String getPlaneNum() {
        return planeNum;
    }

    public void setPlaneNum(String planeNum) {
        this.planeNum = planeNum;
    }
}
