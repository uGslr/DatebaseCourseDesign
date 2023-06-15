package com.plane.service;

import com.plane.entity.flight;

import java.util.List;

public interface flightMessageService {
    public List<flight> getFlightMessage (String airportLocation1, String airportLocation2, String time);
}
