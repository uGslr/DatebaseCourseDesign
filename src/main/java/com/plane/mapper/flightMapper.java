package com.plane.mapper;

import com.plane.entity.flight;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface flightMapper {
    List<flight> getFlightMessage (@Param("airportLocation1") String airportLocation1,
                                   @Param("airportLocation2") String airportLocation2,
                                   @Param("time1") String time1,
                                   @Param("time2") String time2);
}
