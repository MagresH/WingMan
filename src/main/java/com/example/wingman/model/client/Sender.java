package com.example.wingman.model.client;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;


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
//    @OneToMany(mappedBy = "sender")
//    private List<Order> orders;
}
