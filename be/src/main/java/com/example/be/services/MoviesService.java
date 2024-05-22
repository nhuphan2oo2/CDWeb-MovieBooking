package com.example.be.services;

import com.example.be.models.Movies;
import com.example.be.repositories.MoviesRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MoviesService {

    @Autowired
    private MoviesRepository moviesRepository;

    public List<Movies> all() {
        return moviesRepository.findAll();
    }

    public Optional<Movies> singleMovie(int id) {
        return moviesRepository.findById(id);
    }

    public List<Movies> getMoviesByType(String type){
        return moviesRepository.findByStatus(type);
    }

}
