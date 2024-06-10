package com.example.be.models;

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
@Table(name = "screen_showtime")
public class ScreenShowTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToMany(mappedBy = "screenShowTime")
    private List<Seat> seats;
    @ManyToOne
    private Screen screen;
//    @OneToOne
//    private ShowTime showtimes;
    private LocalDateTime createTime;
    private String status;
}
