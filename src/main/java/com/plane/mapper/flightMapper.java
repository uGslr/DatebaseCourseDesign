package com.plane.mapper;

import com.plane.entity.*;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface flightMapper {
    List<flight> getFlightByMessage (@Param("airportLocation1") String airportLocation1,
                                   @Param("airportLocation2") String airportLocation2,
                                   @Param("time1") String time1,
                                   @Param("time2") String time2);
    List<flight> getFlightByNo (@Param("flightNo") String flightNo);

    List<flight> getFlightAll ();

    void insertTicket (@Param("ticketNo") String ticketNo,
                       @Param("flightNo") String flightNo,
                       @Param("account") String account,
                       @Param("pIDNo") String pIDNo,
                       @Param("Level1") String Level1);

    void insertFlight (@Param("ectMoney") float ectMoney,
                       @Param("bctMoney") float bctMoney,
                       @Param("airlineNo") String airlineNo,
                       @Param("state") int state,
                       @Param("planeNo") String planeNo);

    int changeFlightTime (@Param("flightNo") String flightNo,
                          @Param("takeOffTime") String takeOffTime,
                          @Param("landTime") String landTime);

    List<ticket> findTicket (@Param("account") String account);

    int returnTicket (@Param("ticketNo") String ticketNo);

    List<plane> findPlane ();

    List<airline> findAirline ();

    int updateFlightNoMessage (@Param("flightNo") String flightNo);

    int insertAirlineCompany (@Param("airlineCompanyName") String airlineCompanyName,
                              @Param("airlineCompanyNo") String airlineCompanyNo);

    List<city> findHotCity ();
}
