package com.roomnext.backend.security;

import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import jakarta.annotation.PostConstruct;
import java.security.Key;
import java.util.Date;

@Component
public class JwtUtil {

    // Using a default key for demo purposes, this should be overridden in .env via
    // application.properties
    @Value("${roomnext.app.jwtSecret:DefaultSecretKeyWhichIsVeryLongAndSecureForHS256AlgorithmRoomNext123!}")
    private String jwtSecret;

    @Value("${roomnext.app.jwtExpirationMs:86400000}")
    private int jwtExpirationMs;

    private Key key;

    @PostConstruct
    public void init() {
        if (jwtSecret.length() < 32) {
            jwtSecret = "DefaultSecretKeyWhichIsVeryLongAndSecureForHS256AlgorithmRoomNext123!";
        }
        this.key = Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateJwtToken(Authentication authentication) {
        UserDetails userPrincipal = (UserDetails) authentication.getPrincipal();

        return Jwts.builder()
                .setSubject((userPrincipal.getUsername()))
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpirationMs))
                .signWith(key, SignatureAlgorithm.HS256)
                .compact();
    }

    public String getUserNameFromJwtToken(String token) {
        return Jwts.parserBuilder().setSigningKey(key).build()
                .parseClaimsJws(token).getBody().getSubject();
    }

    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parserBuilder().setSigningKey(key).build().parseClaimsJws(authToken);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            System.err.println("Invalid JWT signature/token");
        }
        return false;
    }
}
