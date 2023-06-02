package com.example.wingman.service;

import com.example.wingman.model.Delivery;
import com.example.wingman.repository.DeliveryRepository;
import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class DeliveryServiceImpl implements DeliveryService{

    private final DeliveryRepository deliveryRepository;
    private final EntityManager entityManager;

    @Override
    public Delivery createDelivery(Delivery delivery) {
        Delivery createdDelivery = deliveryRepository.saveAndFlush(delivery);
        entityManager.refresh(delivery);
        return createdDelivery;
    }

    @Override
    public boolean validateDelivery(Delivery delivery) {
        return true;
    }
}
