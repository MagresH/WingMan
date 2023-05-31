package com.example.wingman.model.client;

import jakarta.persistence.*;
import lombok.Data;

@Data
@MappedSuperclass
public abstract class Client {

    @Column(name = "first_name", length = 50)
    private String firstName;

    @Column(name = "last_name", length = 50)
    private String lastName;

    @Column(name = "company_name", length = 50)
    private String companyName;

    @Column(name = "email", nullable = false, length = 100)
    private String email;

    @Column(name = "phone_number", nullable = false, length = 20)
    private String phoneNumber;

    @Column(name = "first_address_line", nullable = false, length = 100)
    private String firstAddressLine;

    @Column(name = "second_address_line", length = 100)
    private String secondAddressLine;

    @Column(name = "city", nullable = false, length = 50)
    private String city;

    @Column(name = "state", nullable = false, length = 50)
    private String state;

    @Column(name = "country", nullable = false, length = 50)
    private String country;

    @Column(name = "zip_code", nullable = false, length = 50)
    private String zipCode;

    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @Column(name = "longitude", nullable = false)
    private Double longitude;

}
