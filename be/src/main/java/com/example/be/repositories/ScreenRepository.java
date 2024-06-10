package com.example.be.repositories;

import com.example.be.models.Screen;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ScreenRepository extends JpaRepository<Screen, Integer> {
    List<Screen> findAll();

    Screen findById(int id);
}
