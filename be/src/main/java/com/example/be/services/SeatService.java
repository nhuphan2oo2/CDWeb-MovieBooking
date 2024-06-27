package com.example.be.services;

import com.example.be.models.Seat;
import com.example.be.models.ShowTime;
import com.example.be.repositories.SeatRepository;
import com.example.be.repositories.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SeatService {
    @Autowired
    private SeatRepository seatRepository;
    @Autowired
    private ShowTimeRepository showTimeRepository;

    public List<Seat> getSeatsByScreenShowtimeId(int id) {
        return clearListSeat(seatRepository.findByScreenShowTimeId(id));
    }

    public List<Seat> getSeatsByShowtimeId(int id) {
        ShowTime showTime = showTimeRepository.findById(id);
        return getSeatsByScreenShowtimeId(showTime.getScreenShowTime().getId());
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

    public Seat get(int id) {
        return clearSeat(seatRepository.findById(id));
    }

    public List<Seat> getListSeats(List<Integer> seatIds) {
        return seatRepository.findAllById(seatIds);
    }

    public Seat update(Seat seat) {
        return seatRepository.save(seat);
    }

    public List<Seat> updateList(List<Seat> seats) {
        return seatRepository.saveAll(seats);
    }

    private Seat clearSeat(Seat seat) {
        seat.setTickets(null);
        seat.getScreenShowTime().setSeats(null);
        seat.getScreenShowTime().setScreen(null);
//        seat.setScreen(null);
        return seat;
    }

    private List<Seat> clearListSeat(List<Seat> seats) {
        for (Seat seat : seats) {
            clearSeat(seat);
        }
        return seats;
    }

}
