package com.plane.service;

import com.plane.entity.flight;
import org.apache.ibatis.annotations.Param;

import java.util.List;

public interface flightMessageService {
    public List<flight> getFlightByMessage (
            String airportLocation1,
            String airportLocation2,
            String time
    );
    public List<flight> getFlightByNo (String flightNo);
    public List<flight> getFlightAll ();
    public boolean insertTicket (
            String flightNo,
            String account,
            String pIDNo,
            String Level1
    );
    public boolean insertFlight (
            String takeOffTime,
            String landTime,
            int economyClassTicket,
            int businessClassTicket,
            float ectMoney,
            float bctMoney,
            String airlineNo,
            int state,
            String planeNo
    );
}
