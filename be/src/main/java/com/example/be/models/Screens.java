package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "screens")
@Entity
@Data@NoArgsConstructor@AllArgsConstructor
@Getter@Setter@ToString
public class Screens {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private int capacity;
//    private List<Seats> seats;
    private String status;
}
