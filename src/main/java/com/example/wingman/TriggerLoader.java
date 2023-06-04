package com.example.wingman;

import jakarta.persistence.EntityManager;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.context.event.ApplicationReadyEvent;
import org.springframework.context.ApplicationListener;
import org.springframework.core.io.ClassPathResource;
import org.springframework.stereotype.Component;
import org.springframework.transaction.support.TransactionTemplate;
import org.springframework.util.FileCopyUtils;

import java.io.InputStreamReader;

@Component
@RequiredArgsConstructor
public class TriggerLoader implements ApplicationListener<ApplicationReadyEvent> {

    private static final int TRIGGERS = 4;

    private final EntityManager entityManager;

    private final TransactionTemplate transactionTemplate;

    @Override
    public void onApplicationEvent(ApplicationReadyEvent event) {
        transactionTemplate.execute(status -> {
            try {
                for (int i = 1; i <= TRIGGERS; i++) {
                    ClassPathResource resource = new ClassPathResource("sql/trigger" + i + ".sql");
                    String triggerScript = FileCopyUtils.copyToString(new InputStreamReader(resource.getInputStream()));
                    entityManager.createNativeQuery(triggerScript).executeUpdate();
                    System.out.println("Trigger "+i+" loaded successfully.");
                }

            } catch (Exception e) {
                System.err.println("Failed to load trigger: " + e.getMessage());
                status.setRollbackOnly();
            }
            return null;
        });
    }
}
