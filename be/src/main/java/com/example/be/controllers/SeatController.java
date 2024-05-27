package com.example.be.controllers;

import com.example.be.models.Seat;
import com.example.be.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/seats")
public class SeatController {
    @Autowired
    private SeatService seatService;


    @GetMapping
    public ResponseEntity<List<Seat>> getSeatsByScreenId(@RequestParam int screenId) {
        return new ResponseEntity<>(seatService.getSeatsByScreenId(screenId), HttpStatus.OK);
    }

    @GetMapping("/chooseSeat/{id}")
    public ResponseEntity<List<Seat>> chooseSeat(@PathVariable int id) {
        boolean checkSeat = seatService.checkSeatStatus(id, 1);
        Seat seat = seatService.chooseSeat(id);
        if (checkSeat) {
            return new ResponseEntity<>(seatService.getSeatsByScreenId(seat.getScreen().getId()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(seatService.getSeatsByScreenId(seat.getScreen().getId()), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/unChooseSeat/{id}")
    public ResponseEntity<List<Seat>> unChooseSeat(@PathVariable int id) {
        boolean checkSeat = seatService.checkSeatStatus(id, 2);
        Seat seat = seatService.unChooseSeat(id);
        if (checkSeat) {
            return new ResponseEntity<>(seatService.getSeatsByScreenId(seat.getScreen().getId()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(seatService.getSeatsByScreenId(seat.getScreen().getId()), HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Seat> get(@PathVariable int id) {
        return new ResponseEntity<>(seatService.get(id), HttpStatus.OK);
    }

    @PostMapping("/isBookingList")
    public ResponseEntity<List<Seat>> chooseSeat(@RequestBody List<Seat> seats) {
        List<Seat> seatBooked = new ArrayList<>();
        for (Seat seat : seats) {
            boolean checkSeat = seatService.checkSeatStatus(seat.getId(), 0);
            if (checkSeat) {
                seatBooked.add(seatService.get(seat.getId()));
            }
        }
        if (seatBooked.size() > 0) {
            return new ResponseEntity<>(seatBooked, HttpStatus.IM_USED);
        }
        return new ResponseEntity<>(null, HttpStatus.OK);
    }
}
