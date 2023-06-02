package com.example.wingman.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Drone {
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "id")
    private Long id;

    @Column(name = "model", nullable = false ,length = 50)
    private String model;

    @Column(name = "status", nullable = false ,length = 50)
    private String status;

    @Column(name = "battery_level", nullable = false)
    private Integer batteryLevel;

    @Column(name = "speed", nullable = false)
    private Integer speed;

    @Column(name = "payload_capacity")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Float payloadCapacity;

    @Column(name = "latitude")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private Double latitude;
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    @Column(name = "longitude")
    private Double longitude;

    @Column(name = "is_in_delivery")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private boolean isInDelivery;

    @Column(name = "is_assigned")
    @JsonProperty(access = JsonProperty.Access.READ_ONLY)
    private boolean isAssigned;
}
