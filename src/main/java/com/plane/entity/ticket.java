package com.plane.entity;

public class ticket {
    String ticketNo;
    String flightNo;
    String airportName1;
    String airportName2;
    String takeOffTime;
    float money;
    String Level1;
    String pName;
    String account;

    public ticket() {
    }

    public ticket(String ticketNo, String flightNo, String airportName1, String airportName2,
                  String takeOffTime, float money, String level, String pName, String account) {
        this.ticketNo = ticketNo;
        this.flightNo = flightNo;
        this.airportName1 = airportName1;
        this.airportName2 = airportName2;
        this.takeOffTime = takeOffTime;
        this.money = money;
        Level1 = level;
        this.pName = pName;
        this.account = account;
    }

    public String getTicketNo() {
        return ticketNo;
    }

    public void setTicketNo(String ticketNo) {
        this.ticketNo = ticketNo;
    }

    public String getFlightNo() {
        return flightNo;
    }

    public void setFlightNo(String flightNo) {
        this.flightNo = flightNo;
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

    public String getTakeOffTime() {
        return takeOffTime;
    }

    public void setTakeOffTime(String takeOffTime) {
        this.takeOffTime = takeOffTime;
    }

    public float getMoney() {
        return money;
    }

    public void setMoney(float money) {
        this.money = money;
    }

    public String getLevel1() {
        return Level1;
    }

    public void setLevel1(String level) {
        Level1 = level;
    }

    public String getpName() {
        return pName;
    }

    public void setpName(String pName) {
        this.pName = pName;
    }

    public String getAccount() {
        return account;
    }

    public void setAccount(String account) {
        this.account = account;
    }
}
