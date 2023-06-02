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
public class Package {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id")
    private Long id;

    @Column(name = "length", nullable = false)
    private Float length;

    @Column(name = "height", nullable = false)
    private Float height;

    @Column(name = "width", nullable = false)
    private Float width;

    @Column(name = "weight", nullable = false)
    private Float weight;

    @Column(name = "type_of_goods", nullable = false, length = 100)
    private String typeOfGoods;

    @Column(name = "is_fragile", nullable = false)
    private boolean isFragile;

//    //order
//    @OneToOne(mappedBy = "_package")
//    private Order _order;

}
