package com.example.be.controllers;

import com.example.be.models.Movies;
import com.example.be.services.MoviesService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/movies")
public class MoviesController {
    @Autowired
    private MoviesService moviesService;

    @GetMapping
    public ResponseEntity<List<Movies>> getAll() {
        return new ResponseEntity<List<Movies>>(moviesService.all(), HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Optional<Movies>> getMovieById(@PathVariable int id) {
        return new ResponseEntity<Optional<Movies>>(moviesService.singleMovie(id), HttpStatus.OK);
    }

//    Get movies by type (Coming/Showing Movie)
//    @GetMapping("/type")
//    public ResponseEntity<List<Movies>> getMoviesByType(@RequestParam String type) {
//        return new ResponseEntity<>(moviesService.getMoviesByType(type),HttpStatus.OK);
//    }
    @PostMapping("/addMovie")
     String addMovie(@RequestBody Movies movies){
        return "heelo";
    }

}
