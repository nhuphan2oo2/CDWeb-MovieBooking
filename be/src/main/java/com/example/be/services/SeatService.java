package com.example.be.services;

import com.example.be.models.Seat;
import com.example.be.models.Ticket;
import com.example.be.repositories.SeatRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {
    @Autowired
    private SeatRepository seatRepository;

    public List<Seat> getSeatsByScreenId(int screenId) {
        return clearListSeat(seatRepository.findByScreenId(screenId));
    }

    public boolean checkSeatStatus(int id, int status) {
        Seat seatFind = seatRepository.findByIdAndStatus(id, status);
        return seatFind != null;
    }

    public Seat chooseSeat(int id) {
        Seat seatFind = seatRepository.findById(id);
        if (seatFind.getStatus() != 1) {
            return seatFind;
        }
        seatFind.setStatus(2);
        seatRepository.save(seatFind);
        return seatFind;
    }

    public Seat unChooseSeat(int id) {
        Seat seatFind = seatRepository.findById(id);
        if (seatFind.getStatus() != 2) {
            return seatFind;
        }
        seatFind.setStatus(1);
        seatRepository.save(seatFind);
        return seatFind;
    }

    public Seat get(int id){
        return clearSeat(seatRepository.findById(id));
    }


    private Seat clearSeat(Seat seat) {
        seat.setTickets(null);
        seat.setScreen(null);
        return seat;
    }

    private List<Seat> clearListSeat(List<Seat> seats) {
        for (Seat seat : seats) {
            clearSeat(seat);
        }
        return seats;
    }

}
