package com.plane.service;

import com.plane.entity.flight;

import java.util.List;

public interface flightMessageService {
    public List<flight> getFlightByMessage (String airportLocation1, String airportLocation2, String time);
    public List<flight> getFlightByNo (String flightNo);
    public List<flight> getFlightAll ();
}
