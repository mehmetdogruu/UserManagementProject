package com.example.usermanagement.model;

import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

@Entity
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotBlank(message = "İsim boş bırakılamaz")
    private String name;

    @Column(unique = true)
    @Email(message = "Geçerli bir e-posta adresi girin")
    @NotBlank(message = "E-posta boş bırakılamaz")
    private String email;

    @Size(min = 6, message = "Şifre en az 6 karakter olmalı")
    @NotBlank(message = "Şifre boş bırakılamaz")
    private String password;
    // Constructors
    public User() {}

    public User(String name, String email, int age) {
        this.name = name;
        this.email = email;
    }

    // Getter ve Setter'lar

    public Long getId() {
        return id;
    }

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
