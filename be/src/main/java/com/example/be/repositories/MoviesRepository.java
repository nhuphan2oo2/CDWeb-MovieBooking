package com.example.be.repositories;

import com.example.be.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MoviesRepository extends JpaRepository<Movie, Integer> {
        List<Movie> findByStatus(String type);
        Optional<Movie> findById(int id);

}
