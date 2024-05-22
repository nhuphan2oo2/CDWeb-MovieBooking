package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Table(name = "movies")
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @OneToMany(mappedBy = "movie")
    private List<Image> images;
    @OneToMany(mappedBy = "movie")
    private List<ShowTime> showTimes;
    private String name_vn;
    private String director;
    private String actor;
    private String country_name_vn;
    private String type_name_vn;
    private String release_date;
    private String end_date;
    private String brief_vn;
    private String image;
    private String trailer;
    private String status;
    private String ratings;
    private String time;
    private String limitage_vn;
    private int sort_order;
}
