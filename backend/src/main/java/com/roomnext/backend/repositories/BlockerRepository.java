package com.roomnext.backend.repositories;

import com.roomnext.backend.entities.Blocker;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BlockerRepository extends JpaRepository<Blocker, Long> {
    List<Blocker> findByStatus(String status);
}
