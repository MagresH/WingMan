package com.example.wingman.service;

import com.example.wingman.model.Delivery;
import com.example.wingman.model.Order;
import com.example.wingman.repository.OrderRepository;
import jakarta.persistence.EntityManager;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final PackageService packageService;
    private final ReceiverService receiverService;
    private final SenderService senderService;
    private final DeliveryService deliveryService;
    private final EntityManager entityManager;

    @Override
    @Transactional
    public Order createOrder(Order order) {
        if (!validateOrder(order)) {
            throw new IllegalArgumentException("Invalid order details");
        }
        senderService.createSender(order.getSender());
        receiverService.createReceiver(order.getReceiver());
        packageService.createPackage(order.get_package());

        Delivery delivery = new Delivery().builder()
                .status("In progress")
                .build();


        Delivery savedDelivery = deliveryService.createDelivery(delivery);
        order.setDelivery(savedDelivery);

        Order savedOrder = orderRepository.saveAndFlush(order);

        entityManager.refresh(savedOrder);
        entityManager.refresh(savedOrder.getDelivery());
        entityManager.refresh(savedDelivery);
        return savedOrder;
    }


    @Override
    public boolean validateOrder(Order order) {

        if (order.getSender().getFirstName() == null || order.getSender().getLastName() == null) {
            return false;
        }

        if (order.getReceiver().getFirstName() == null || order.getReceiver().getLastName() == null) {
            return false;
        }


        return true;
    }

    public List<Order> getOrders() {
        return orderRepository.findAll();
    }
}
