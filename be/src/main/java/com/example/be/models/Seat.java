package com.example.be.models;

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
    private ScreenShowTime screenShowTime;
    @OneToMany(mappedBy = "seat")
    private List<Ticket> tickets;
}
