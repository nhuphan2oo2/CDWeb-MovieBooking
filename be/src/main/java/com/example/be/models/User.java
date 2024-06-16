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
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    private String name;
    private String password;
    private String email;
    private String phone;
    private LocalDateTime birth;
    private int role;
    private int status;
    @OneToMany(mappedBy = "user")
    private List<BookingHistory> bookingHistories;
}
