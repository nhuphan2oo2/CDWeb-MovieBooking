package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "seats")
@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter@Setter@ToString
public class Seats {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String indexSeat;
    private String status;

}
