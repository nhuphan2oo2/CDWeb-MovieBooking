package com.example.be.services;

import com.example.be.models.ShowTime;
import com.example.be.models.Ticket;
import com.example.be.repositories.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class ShowTimeService {
    @Autowired
    private ShowTimeRepository showTimeRepository;

    public ShowTime getById(int id) {
        ShowTime result = showTimeRepository.findById(id);
        return clearShowTime(result);
    }

    public List<ShowTime> getByMovieId(int id) {
        return clearShowTimes(showTimeRepository.findByMovieId(id));
    }

    public List<Date> getDatesAvailableByMovieId(int id) {
        return showTimeRepository.findDistinctStartDatesByMovieId(id);
    }

    private ShowTime clearShowTime(ShowTime showTime) {
        showTime.getMovie().setShowTimes(null);
        showTime.getScreenShowTime().setSeats(null);
        if (showTime.getScreenShowTime().getScreen() != null)
            showTime.getScreenShowTime().getScreen().setScreenShowTimes(null);
        for (Ticket ticket : showTime.getTickets()) {
            ticket.getShowTime().getMovie().setShowTimes(null);
            ticket.getSeat().setScreenShowTime(null);
            ticket.getSeat().setTickets(null);
            ticket.setBookingHistory(null);
            ticket.setShowTime(null);
        }
        return showTime;
    }

    private List<ShowTime> clearShowTimes(List<ShowTime> showTimes) {
        for (ShowTime showTime : showTimes) {
            clearShowTime(showTime);
        }
        return showTimes;
    }

    public List<ShowTime> getAll() {
        return clearShowTimes(showTimeRepository.findAll());
    }

}
