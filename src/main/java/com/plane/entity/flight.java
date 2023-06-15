package com.plane.entity;

public class flight {
    String flightNo;
    String takeOffTime;
    String landTime;
    int economyClassTicket;
    int businessClassTicket;
    float ectMoney;
    float bctMoney;
    String airlineCompanyName;
    String airportName1;
    String airportName2;

    public flight() {
    }

    public flight(String flightNo,
                  String takeOffTime,
                  String landTime,
                  int economyClassTicket,
                  int businessClassTicket,
                  float ectMoney,
                  float bctMoney,
                  String airlineCompanyName,
                  String airportName1,
                  String airportName2) {
        this.flightNo = flightNo;
        this.takeOffTime = takeOffTime;
        this.landTime = landTime;
        this.economyClassTicket = economyClassTicket;
        this.businessClassTicket = businessClassTicket;
        this.ectMoney = ectMoney;
        this.bctMoney = bctMoney;
        this.airlineCompanyName = airlineCompanyName;
        this.airportName1 = airportName1;
        this.airportName2 = airportName2;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
    }

    public String getTakeOffTime() {
        return takeOffTime;
    }

    public void setTakeOffTime(String takeOffTime) {
        this.takeOffTime = takeOffTime;
    }

    public String getLandTime() {
        return landTime;
    }

    public void setLandTime(String landTime) {
        this.landTime = landTime;
    }

    public int getEconomyClassTicket() {
        return economyClassTicket;
    }

    public void setEconomyClassTicket(int economyClassTicket) {
        this.economyClassTicket = economyClassTicket;
    }

    public int getBusinessClassTicket() {
        return businessClassTicket;
    }

    public void setBusinessClassTicket(int businessClassTicket) {
        this.businessClassTicket = businessClassTicket;
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

    public String getAirlineCompanyName() {
        return airlineCompanyName;
    }

    public void setAirlineCompanyNo(String airlineCompanyName) {
        this.airlineCompanyName = airlineCompanyName;
    }

    public String getAirportName1() {
        return airportName1;
    }

    public void setAirportName1(String airportName1) {
        this.airportName1 = airportName1;
    }

    public String getAirportName2() {
        return airportName2;
    }

    public void setAirportName2(String airportName2) {
        this.airportName2 = airportName2;
    }
}
