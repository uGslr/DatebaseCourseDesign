package com.plane.service;

import com.plane.entity.flight;
import com.plane.entity.ticket;

import java.util.List;

public interface flightMService {
    public List<flight> getFlightByMessage (
            String airportLocation1,
            String airportLocation2,
            String time
    );
    public List<flight> getFlightByNo (String flightNo);
    public List<flight> getFlightAll ();

    public boolean insertFlight (
            int economyClassTicket,
            int businessClassTicket,
            float ectMoney,
            float bctMoney,
            String airlineNo,
            int state,
            String planeNo
    );

    public boolean changeFlightTime(String flightNo, String takeOffTime, String landTime);

}
