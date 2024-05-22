package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

import java.time.LocalDateTime;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "show_times")
public class ShowTime {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @ManyToOne
    @JoinColumn(name = "movie_id",
            foreignKey = @ForeignKey(name = "fk_show_times_movies"))
    private Movie movie;
    @ManyToOne
    @JoinColumn(name = "screen_id",
            foreignKey = @ForeignKey(name = "fk_show_times_screens"))
    private Screen screen;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private int price;
    private int status;
}
