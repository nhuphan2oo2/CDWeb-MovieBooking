package com.example.be.repositories;

import com.example.be.models.Movies;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface MoviesRepository extends JpaRepository<Movies, Integer> {
        List<Movies> findByStatus(String type);
        Optional<Movies> findById(int id);

}
