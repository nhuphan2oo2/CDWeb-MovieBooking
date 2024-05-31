package com.example.be.repositories;

import com.example.be.models.BookingHistory;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BookingHistoryRepository extends JpaRepository<BookingHistory,Integer> {
    BookingHistory findById(int id);
    List<BookingHistory> findByUserId(int userId);
}
