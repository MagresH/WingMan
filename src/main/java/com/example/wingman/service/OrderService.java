package com.example.wingman.service;

import com.example.wingman.model.Order;

public interface OrderService {
    Order createOrder(Order order);
    boolean validateOrder(Order order);
}
