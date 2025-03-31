package com.stockup.backend.model;
import lombok.*;
@Data
@AllArgsConstructor
public class AuthResponse {
    private String token;
    private String email;
    private String username;
}