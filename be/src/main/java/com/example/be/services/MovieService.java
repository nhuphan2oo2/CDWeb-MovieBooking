package com.example.be.services;

import com.example.be.models.Movie;

import com.example.be.repositories.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class MovieService {

    @Autowired
    private MovieRepository movieRepository;

    public List<Movie> all() {
        return clearListMovie(movieRepository.findAll());
    }

    public Movie singleMovie(int id) {
        return clearMovie(movieRepository.findById(id));
    }

    public List<Movie> getMoviesByType(String type) {
        return clearListMovie(movieRepository.findByStatus(type));
    }

    private Movie clearMovie(Movie movie) {
        movie.setShowTimes(null);
        return movie;
    }

    private List<Movie> clearListMovie(List<Movie> movies) {
        for (Movie movie : movies) {
            clearMovie(movie);
        }
        return movies;
    }

}
