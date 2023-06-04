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
public class Delivery {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private Long id;

    @Column(name = "delivery_hours")
    private Integer deliveryHours;

    //distance
    @Column(name = "distance")
    private Integer distance;

    @Column(name = "status", nullable = false ,length = 50)
    private String status;

    @OneToOne
    @JoinColumn(name = "drone_id")
    private Drone drone;


}
