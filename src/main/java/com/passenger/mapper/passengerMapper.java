package com.passenger.mapper;

import com.passenger.entity.PandU;
import com.passenger.entity.passenger;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;

import java.util.List;

@Mapper
public interface passengerMapper {
    passenger findPassenger(@Param("pIDNo") String pIDNo);
    int addPassenger(@Param("pName") String pName, @Param("pIDNoType") String pIDNoType, @Param("pIDNo") String pIDNo);
    int addPhone(@Param("pIDNo") String pIDNo, @Param("pPhone") String pPhone);
    PandU findConnect(@Param("pIDNo") String pIDNo, @Param("account") String account);
    int addConnect(@Param("pIDNo") String pIDNo, @Param("account") String account);
    List<passenger> findPassengerByAccount(@Param("account") String account);
}
