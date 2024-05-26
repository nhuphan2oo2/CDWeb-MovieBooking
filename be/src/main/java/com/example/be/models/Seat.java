package com.example.be.models;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.*;

import java.util.List;


@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "seats")
public class Seat {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String seatIndex;
    private int status;
    @ManyToOne
    @JoinColumn(name = "screen_id",
            foreignKey = @ForeignKey(name = "fk_seats_screens"))
    private Screen screen;
    @OneToMany(mappedBy = "seat")
    private List<Ticket> tickets;
}
