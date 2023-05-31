package com.example.wingman.model.client;

import com.example.wingman.model.Order;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;


@Entity
@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Sender extends Client{
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
    //order
    @OneToMany(mappedBy = "sender")
    private List<Order> orders;
}
