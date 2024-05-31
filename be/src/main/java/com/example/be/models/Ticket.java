package com.example.be.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "tickets")
public class Ticket {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    private ShowTime showTime;
    @ManyToOne
    @JoinColumn(name = "booking_history_id",
            foreignKey = @ForeignKey(name = "fk_tickets_booking_histories"))
    private BookingHistory bookingHistory;
    @ManyToOne
    private Seat seat;
    private int status;
}

