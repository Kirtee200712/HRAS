package com.roomnext.backend.controllers;

import com.roomnext.backend.dto.JwtResponse;
import com.roomnext.backend.dto.LoginRequest;
import com.roomnext.backend.dto.MessageResponse;
import com.roomnext.backend.dto.SignupRequest;
import com.roomnext.backend.entities.Role;
import com.roomnext.backend.entities.User;
import com.roomnext.backend.repositories.UserRepository;
import com.roomnext.backend.security.JwtUtil;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtil jwtUtil;

    @PostMapping("/login")
    public ResponseEntity<?> authenticateUser(@RequestBody LoginRequest loginRequest) {

        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtil.generateJwtToken(authentication);

        User user = userRepository.findByEmail(loginRequest.getEmail()).orElseThrow();

        return ResponseEntity.ok(new JwtResponse(jwt,
                user.getEmail(),
                user.getName(),
                user.getRole().name()));
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody SignupRequest signUpRequest) {
        if (userRepository.findByEmail(signUpRequest.getEmail()).isPresent()) {
            return ResponseEntity
                    .badRequest()
                    .body(new MessageResponse("Error: Email is already in use!"));
        }

        // Create new user's account
        User user = new User();
        user.setEmail(signUpRequest.getEmail());
        user.setName(signUpRequest.getName());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));

        String strRole = signUpRequest.getRole();
        Role role;

        if (strRole == null) {
            role = Role.VIEWER;
        } else {
            switch (strRole.toUpperCase()) {
                case "PROJECT_LEAD":
                    role = Role.PROJECT_LEAD;
                    break;
                case "DEVELOPER":
                    role = Role.DEVELOPER;
                    break;
                case "TESTER":
                    role = Role.TESTER;
                    break;
                default:
                    role = Role.VIEWER;
            }
        }

        user.setRole(role);
        userRepository.save(user);

        return ResponseEntity.ok(new MessageResponse("User registered successfully!"));
    }
}
