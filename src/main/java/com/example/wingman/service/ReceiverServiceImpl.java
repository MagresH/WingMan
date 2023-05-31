package com.example.wingman.service;

import com.example.wingman.model.client.Receiver;
import com.example.wingman.repository.ReceiverRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class ReceiverServiceImpl implements ReceiverService{

    private final ReceiverRepository receiverRepository;

    @Override
    public Receiver createReceiver(Receiver receiver) {
        return receiverRepository.save(receiver);
    }
}
