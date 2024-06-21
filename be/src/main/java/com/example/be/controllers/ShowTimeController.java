package com.example.be.controllers;

import com.example.be.models.ShowTime;
import com.example.be.services.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/showtimes")
public class ShowTimeController {
    @Autowired
    private ShowTimeService showTimeService;

    @GetMapping("/{id}")
    public ResponseEntity<ShowTime> getById(@PathVariable int id) {
        return new ResponseEntity<>(showTimeService.getById(id), HttpStatus.OK);
    }

    @GetMapping("/dateByMovieId/{id}")
    public ResponseEntity<List<Date>> getShowTimesMovie(@PathVariable int id) {
        return new ResponseEntity<>(showTimeService.getDatesAvailableByMovieId(id), HttpStatus.OK);
    }

    @GetMapping("/movie/{id}")
    public ResponseEntity<List<ShowTime>> getShowTimesByMovieId(@PathVariable int id) {
        return new ResponseEntity<>(showTimeService.getByMovieId(id), HttpStatus.OK);
    }
    @GetMapping
    public ResponseEntity<List<ShowTime>> getAll(){
        return new ResponseEntity<>(showTimeService.getAll(), HttpStatus.OK);
    }

}
