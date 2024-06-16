package com.example.be.services;

import com.example.be.models.ShowTime;
import com.example.be.models.Ticket;
import com.example.be.repositories.TicketRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TicketService {
    @Autowired
    private TicketRepository ticketRepository;
    public Ticket get(int id){
        return clearTicket(ticketRepository.findById(id));
    }
    public Ticket add(Ticket ticket) {
        return ticketRepository.save(ticket);
    }
    public static Ticket clearTicket(Ticket ticket) {
        ticket.getShowTime().getMovie().setShowTimes(null);
//        ticket.getSeat().setScreen(null);
//        ticket.setBookingHistory(null);
//        ticket.getShowTime().getScreen().setSeats(null);
//        ticket.getShowTime().getScreen().setShowtimes(null);
        ticket.getShowTime().setTickets(null);
        return ticket;
    }

    public static List<Ticket> clearTickets(List<Ticket> tickets) {
        for (Ticket ticket : tickets) {
            clearTicket(ticket);
        }
        return tickets;
    }

}
