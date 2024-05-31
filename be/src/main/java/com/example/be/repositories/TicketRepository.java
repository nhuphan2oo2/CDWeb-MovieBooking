package com.example.be.repositories;

import com.example.be.models.ShowTime;
import com.example.be.models.Ticket;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepository extends JpaRepository<Ticket, Integer> {
    Ticket findById(int id);

}
