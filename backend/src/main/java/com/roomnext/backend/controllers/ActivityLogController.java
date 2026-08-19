package com.roomnext.backend.controllers;

import com.roomnext.backend.entities.ActivityLog;
import com.roomnext.backend.repositories.ActivityLogRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/activities")
@CrossOrigin(origins = "*")
public class ActivityLogController {

    @Autowired
    private ActivityLogRepository activityLogRepository;

    @GetMapping
    public List<ActivityLog> getRecentActivities() {
        return activityLogRepository.findTop50ByOrderByCreatedAtDesc();
    }
}
