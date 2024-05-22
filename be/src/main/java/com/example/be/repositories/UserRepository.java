package com.example.be.repositories;

import com.example.be.models.Movie;
import com.example.be.models.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Integer> {
    User findById(int id);

    User findByEmailAndPassword(String email, String password);
}
