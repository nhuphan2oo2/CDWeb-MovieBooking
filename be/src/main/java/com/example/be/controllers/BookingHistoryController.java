package com.example.be.controllers;

import com.example.be.models.BookingHistory;
import com.example.be.services.BookingHistoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/bookingHistories")
public class BookingHistoryController {
    @Autowired
    private BookingHistoryService bookingHistoryService;
    @GetMapping("/{id}")
    public ResponseEntity<BookingHistory> get(@PathVariable  int id){
        return new ResponseEntity<>(bookingHistoryService.singleBookingHistory(id), HttpStatus.OK);
    }
    //  Booking feature
    @PostMapping
    ResponseEntity<BookingHistory> add(@RequestBody BookingHistory bookingHistory){
        return new ResponseEntity<>(bookingHistoryService.add(bookingHistory), HttpStatus.OK);
    }

    @GetMapping("")
    public ResponseEntity<List<BookingHistory>> getByUserId(@RequestParam  int userId){
        return new ResponseEntity<>(bookingHistoryService.getBookingHistoriesByUserId(userId), HttpStatus.OK);
    }

}
