package com.example.wingman.model;

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
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "model", nullable = false ,length = 50)
    private String model;

    @Column(name = "status", nullable = false ,length = 50)
    private String status;

    @Column(name = "battery_level", nullable = false)
    private Integer batteryLevel;

    @Column(name = "speed", nullable = false)
    private Integer speed;

    @Column(name = "payload_capacity", nullable = false)
    private Float payloadCapacity;

    @Column(name = "latitude", nullable = false)
    private Double latitude;

    @Column(name = "longitude", nullable = false)
    private Double longitude;

    @Column(name = "is_assigned", nullable = false)
    private boolean isAssigned;
}
