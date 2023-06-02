package com.example.wingman.service;

import com.example.wingman.model.Delivery;

public interface DeliveryService {
    Delivery createDelivery(Delivery delivery);
    boolean validateDelivery(Delivery delivery);
}
