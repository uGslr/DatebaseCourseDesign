package com.plane.service;

import com.plane.entity.ticket;

import java.util.List;

public interface ticketService {
    public boolean insertTicket (
            String flightNo,
            String account,
            String pIDNo,
            String Level1
    );
    public List<ticket> findTicket(String account);

    public boolean returnTicket(String ticketNo);
}
