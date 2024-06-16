package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

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
    private BookingHistory bookingHistory;
    @ManyToOne
    private Seat seat;
    private int status;
}

