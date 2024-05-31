package com.example.be.services;

import com.example.be.models.Movie;
import com.example.be.models.User;
import com.example.be.repositories.MovieRepository;
import com.example.be.repositories.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    @Autowired
    private UserRepository userRepository;

    public List<User> all() {
        return userRepository.findAll();
    }

    public User get(int id) {
        User user = userRepository.findById(id);
//        user.setBookingHistories(null);
        return user;
    }

    public User login(String email, String password) {
        return userRepository.findByEmailAndPassword(email, password);
    }


}
