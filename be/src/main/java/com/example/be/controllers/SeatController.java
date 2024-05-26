package com.example.be.controllers;

import com.example.be.models.Seat;
import com.example.be.services.SeatService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/seats")
public class SeatController {
    @Autowired
    private SeatService seatService;


    @GetMapping("/getByScreenId/{id}")
    public ResponseEntity<List<Seat>> getSeatsByScreenId(@PathVariable int id) {
        return new ResponseEntity<>(seatService.getSeatsByScreenId(id), HttpStatus.OK);
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


}
