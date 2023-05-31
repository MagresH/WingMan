package com.example.wingman.model;

import com.example.wingman.model.client.Receiver;
import com.example.wingman.model.client.Sender;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "_order")
public class Order {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "sender_id")
    private Sender sender;

    @OneToOne
    @JoinColumn(name = "receiver_id")
    private Receiver receiver;

    @Column(name = "order_time")
    private LocalDateTime orderTime;

    @OneToOne
    @JoinColumn(name = "delivery_id")
    private Delivery delivery;

    @OneToOne
    @JoinColumn(name = "package_id")
    private Package _package;



}