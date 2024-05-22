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
    @OneToOne
    private ShowTime showTime;
    @ManyToOne
    @JoinColumn(name = "booking_history_id",
            foreignKey = @ForeignKey(name = "fk_tickets_booking_histories"))
    private BookingHistory bookingHistory;
    @OneToOne
    private Seat seat;
    private int status;
}
