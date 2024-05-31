package com.example.be.services;

import com.example.be.models.BookingHistory;
import com.example.be.models.Movie;
import com.example.be.models.Ticket;
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
//        clear(user);
        user.setBookingHistories(null);
        return user;
    }

    private void clear(User user) {
        for(BookingHistory bookingHistory: user.getBookingHistories()){
            bookingHistory.setUser(null);
            for(Ticket ticket: bookingHistory.getTickets()){
                ticket.setShowTime(null);
                ticket.setBookingHistory(null);
                ticket.getSeat().setTickets(null);
                ticket.getSeat().setScreen(null);
            }
        }
    }

    public User login(String email, String password) {
        User user = userRepository.findByEmailAndPassword(email, password);
        clear(user);
        return userRepository.findByEmailAndPassword(email, password);
    }
    public User update(User user){
        return  userRepository.save(user);
    }

}
