package com.example.wingman.service;

import com.example.wingman.model.client.Sender;
import com.example.wingman.repository.SenderRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class SenderServiceImpl implements SenderService{

    private final SenderRepository senderRepository;

    @Override
    public Sender createSender(Sender sender) {
        return senderRepository.save(sender);
    }
}
