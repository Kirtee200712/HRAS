package com.roomnext.backend.entities;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name = "test_cases")
public class TestCase {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String name;
    private String module;
    private String status; // Passed, Failed, Blocked, Not Run

    @Column(columnDefinition = "TEXT")
    private String errorLog;
}
