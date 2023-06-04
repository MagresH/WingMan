package com.example.wingman.service;

import com.example.wingman.model.Delivery;
import com.example.wingman.model.Order;

import java.util.List;

public interface OrderService {
    Order createOrder(Order order);
    boolean validateOrder(Order order);
    List<Order> getOrders();
}
