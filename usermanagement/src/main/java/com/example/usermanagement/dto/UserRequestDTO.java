package com.example.usermanagement.dto;

import jakarta.persistence.Column;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public class UserRequestDTO {

    @NotBlank(message = "İsim boş bırakılamaz")
    private String name;

    @Email(message = "Geçerli bir e-posta adresi girin")
    @NotBlank(message = "E-posta boş bırakılamaz")
    private String email;

    @Column(unique = true)
    @NotBlank(message = "Şifre boş bırakılamaz")
    @Size(min = 6, message = "Şifre en az 6 karakter olmalı")
    private String password;

    // Getter & Setter
    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }

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
