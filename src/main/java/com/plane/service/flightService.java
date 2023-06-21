package com.plane.service;

import com.plane.entity.*;

import java.util.List;

public interface flightService {
    public List<flight> getFlightByMessage (
            String airportLocation1,
            String airportLocation2,
            String time
    );

    /**
     * 实现管理员主页的模糊查找
     * @param x
     * @return
     */
    public List<flight> getFlightByUnknown (String x);

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

    public boolean insertAirlineCompany (String airlineCompanyName, String airlineCompanyNo);

    public List<city> findHotCity ();

    public List<airport> findAirport ();

    public boolean insertAirline (int airportNo1, int airportNo2);

    public List<company> findCompany ();

    public boolean insertPlane (String planeNo, String airlineCompanyNo, String planeTypeNo, int ect, int bct);

    public boolean findAirlineIsRepeat (int airportNo1, int airportNo2);

    public boolean updateFlightMoney (float ectMoney, float bctMoney, String flightNo);

    public List<bill> findAllMoneyByFlightNo ();
}
