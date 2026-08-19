package com.roomnext.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "issues")
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String issueId; // e.g., RN-025
    private String title;
    private String severity; // Critical, High, Medium, Low
    private String module;
    private String assignee;
    private String status; // Open, In Progress, Resolved

    private Date createdAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }
}
