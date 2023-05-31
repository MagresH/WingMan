package com.example.wingman.model.client;


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
public class Receiver extends Client {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;


}
