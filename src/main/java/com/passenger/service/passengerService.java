package com.passenger.service;

import com.passenger.entity.passenger;

import java.util.List;

public interface passengerService {

    String newPassenger(String account, String pName, String pIDNoType, String pIDNo, String pPhone);
    List<passenger> findPassengerByAccount(String account);
}
