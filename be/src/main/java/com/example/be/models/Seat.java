package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;


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
    private String status;
    @ManyToOne
    @JoinColumn(name = "screen_id",
            foreignKey = @ForeignKey(name = "fk_seats_screens"))
    private Screen screen;
}
