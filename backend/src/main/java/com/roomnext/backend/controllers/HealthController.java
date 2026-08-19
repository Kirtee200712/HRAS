package com.roomnext.backend.controllers;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public Map<String, String> getHealth() {
        Map<String, String> response = new HashMap<>();
        response.put("status", "UP");
        response.put("project", "RoomNext API");
        return response;
    }
}
