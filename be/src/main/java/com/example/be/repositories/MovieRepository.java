package com.example.be.repositories;

import com.example.be.models.Movie;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {
        List<Movie> findByStatus(String type);
        Movie findById(int id);
        List<Movie> findByNameVnContainingIgnoreCase(String nameVn);

}
