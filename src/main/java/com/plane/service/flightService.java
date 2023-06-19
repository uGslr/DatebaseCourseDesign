package com.plane.service;

import com.plane.entity.airline;
import com.plane.entity.flight;
import com.plane.entity.plane;

import java.util.List;

public interface flightService {
    public List<flight> getFlightByMessage (
            String airportLocation1,
            String airportLocation2,
            String time
    );
    public List<flight> getFlightByNo (String flightNo);
    public List<flight> getFlightAll ();

    public boolean insertFlight (
            float ectMoney,
            float bctMoney,
            String airlineNo,
            int state,
            String planeNo
    );

    public boolean changeFlightTime(String flightNo, String takeOffTime, String landTime);

    public List<plane> findPlane ();

    public List<airline> findAirline ();

    public boolean updateFlightNoMessage (String flightNo);
}
