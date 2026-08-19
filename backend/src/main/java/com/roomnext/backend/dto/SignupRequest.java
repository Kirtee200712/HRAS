package com.roomnext.backend.dto;

import lombok.Data;

@Data
public class SignupRequest {
    private String email;
    private String name;
    private String role; // Needs to map to Role enum
    private String password;
}
