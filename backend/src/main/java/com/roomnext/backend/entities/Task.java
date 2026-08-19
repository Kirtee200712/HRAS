package com.roomnext.backend.entities;

import jakarta.persistence.*;
import lombok.Data;
import java.util.Date;

@Data
@Entity
@Table(name = "tasks")
public class Task {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String taskId; // e.g., RN-024
    private String title;
    private String description;

    @Column(name = "task_type")
    private String type; // e.g., AI, Frontend

    private String assignee;
    private String priority; // High, Medium, Low
    private String status; // Todo, In Progress, Done

    private String dueDate;

    private Date createdAt;
    private Date updatedAt;

    @PrePersist
    protected void onCreate() {
        createdAt = new Date();
    }

    @PreUpdate
    protected void onUpdate() {
        updatedAt = new Date();
    }
}
