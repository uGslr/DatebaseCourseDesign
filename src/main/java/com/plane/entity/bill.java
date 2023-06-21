package com.plane.entity;

public class bill {
    String flightNo;
    float ectMoney;
    float bctMoney;

    public bill() {
    }

    public bill(String flightNo, float ectMoney, float bctMoney) {
        this.flightNo = flightNo;
        this.ectMoney = ectMoney;
        this.bctMoney = bctMoney;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
    }

    public float getEctMoney() {
        return ectMoney;
    }

    public void setEctMoney(float ectMoney) {
        this.ectMoney = ectMoney;
    }

    public float getBctMoney() {
        return bctMoney;
    }

    public void setBctMoney(float bctMoney) {
        this.bctMoney = bctMoney;
    }
}
