package com.example.be.models;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "booking_histories")
public class BookingHistory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "user_id",
            foreignKey = @ForeignKey(name = "fk_booking_histories_users"))
    private User user;
    @OneToMany(mappedBy = "bookingHistory")
    private List<Ticket> tickets;
    private int discount;
    private int total;
    private LocalDateTime time;
    private int status;
}
