package com.plane.entity;

public class airline {
    String airlineNo;
    String airportName1;
    String airportName2;

    public airline(String airlineNo, String airportName1, String airportName2) {
        this.airlineNo = airlineNo;
        this.airportName1 = airportName1;
        this.airportName2 = airportName2;
    }

    public airline() {
    }

    public String getAirlineNo() {
        return airlineNo;
    }

    public void setAirlineNo(String airlineNo) {
        this.airlineNo = airlineNo;
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
