package com.example.be.models;

import jakarta.persistence.*;
import lombok.*;

@Table(name = "movies")
@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class Movies {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
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
