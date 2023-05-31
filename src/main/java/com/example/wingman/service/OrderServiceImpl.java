package com.example.wingman.service;

import com.example.wingman.model.Order;
import com.example.wingman.model.Package;
import com.example.wingman.repository.OrderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {

    private final OrderRepository orderRepository;

    private final PackageService packageService;
    private final ReceiverService receiverService;
    private final SenderService senderService;


    @Override
    public Order createOrder(Order order) {
        if (!validateOrder(order)) {
            throw new IllegalArgumentException("Nieprawidłowe dane zamówienia.");
        }
        senderService.createSender(order.getSender());
        receiverService.createReceiver(order.getReceiver());
        packageService.createPackage(order.get_package());

        return orderRepository.save(order);
    }

    @Override
    public boolean validateOrder(Order order) {

        // Sprawdź inne warunki walidacji na podstawie Twoich wymagań
        if (order.getSender().getFirstName() == null || order.getSender().getLastName() == null) {
            return false;
        }

        if (order.getReceiver().getFirstName() == null || order.getReceiver().getLastName() == null) {
            return false;
        }


        // Dodaj inne warunki walidacji według potrzeb

        return true;
    }

}
