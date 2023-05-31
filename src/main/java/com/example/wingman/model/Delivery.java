package com.example.wingman.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

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

    @Column(name = "delivery_date", nullable = false)
    private LocalDate deliveryDate;

    @Column(name = "status", nullable = false ,length = 50)
    private String status;

    @OneToOne
    @JoinColumn(name = "drone_id", nullable = false)
    private Drone drone;

    @OneToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;

}
