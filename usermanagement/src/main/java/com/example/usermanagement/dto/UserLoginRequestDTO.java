package com.example.usermanagement.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public class UserLoginRequestDTO {

    @Email(message = "Geçerli bir e-posta girin")
    @NotBlank(message = "E-posta boş olamaz")
    private String email;

    @NotBlank(message = "Şifre boş olamaz")
    private String password;

    // Getter Setter
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
