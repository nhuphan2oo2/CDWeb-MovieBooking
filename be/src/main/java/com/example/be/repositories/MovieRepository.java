package com.example.be.repositories;

import com.example.be.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MovieRepository extends JpaRepository<Movie, Integer> {
    List<Movie> findByStatus(String type);

    Movie findById(int id);

    Movie findByIdAndStatusNot(int id, String status);

    List<Movie> findByStatusIsNot(String status);
    List<Movie> findByNameVnContainingIgnoreCase(String nameVn);
}
