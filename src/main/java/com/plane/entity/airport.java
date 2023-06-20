package com.plane.entity;

public class airport {
    int airportNo;
    String airportName;
    String airportLocation;

    public airport() {
    }

    public airport(int airportNo, String airportName, String airportLocation) {
        this.airportNo = airportNo;
        this.airportName = airportName;
        this.airportLocation = airportLocation;
    }

    public int getAirportNo() {
        return airportNo;
    }

    public void setAirportNo(int airportNo) {
        this.airportNo = airportNo;
    }

    public String getAirportName() {
        return airportName;
    }

    public void setAirportName(String airportName) {
        this.airportName = airportName;
    }

    public String getAirportLocation() {
        return airportLocation;
    }

    public void setAirportLocation(String airportLocation) {
        this.airportLocation = airportLocation;
    }
}
