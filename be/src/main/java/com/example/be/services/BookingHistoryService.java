package com.example.be.services;

import com.example.be.models.BookingHistory;
import com.example.be.models.Movie;
import com.example.be.models.Ticket;
import com.example.be.repositories.BookingHistoryRepository;
import com.example.be.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@Service
public class BookingHistoryService {
    @Autowired
    private BookingHistoryRepository bookingHistoryRepository;
    @Autowired
    private TicketRepository ticketRepository;

    public BookingHistory singleBookingHistory(int id) {
        return clearBookingHistory(bookingHistoryRepository.findById(id));
    }
//  Booking feature
    public BookingHistory add(BookingHistory bookingHistory) {
        BookingHistory bookingHistorySaved = bookingHistoryRepository.save(bookingHistory);
        for (Ticket ticket : bookingHistory.getTickets()) {
            ticket.setBookingHistory(bookingHistorySaved);
        }
        ticketRepository.saveAll(bookingHistory.getTickets());
        for(Ticket ticket: bookingHistorySaved.getTickets()){
            ticket.setBookingHistory(null);
        }
        return bookingHistorySaved;
    }

    private BookingHistory clearBookingHistory(BookingHistory bookingHistory) {
        bookingHistory.getUser().setBookingHistories(null);
        for (Ticket ticket : bookingHistory.getTickets()) {
            ticket.setShowTime(null);
            ticket.setBookingHistory(null);
            ticket.getSeat().setScreen(null);
        }
        return bookingHistory;
    }

    private List<BookingHistory> clearBookingHistories(List<BookingHistory> bookingHistoryList) {
        for (BookingHistory bookingHistory : bookingHistoryList) {
            clearBookingHistory(bookingHistory);
        }
        return bookingHistoryList;
    }
}
