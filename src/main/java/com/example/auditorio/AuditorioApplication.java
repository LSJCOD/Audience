package com.example.auditorio;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.boot.context.properties.EnableConfigurationProperties;

@EnableConfigurationProperties
@EntityScan(basePackages = {"com/example/auditorio"})  // scan JPA entities
@SpringBootApplication


public class AuditorioApplication {

    public static void main(String[] args) {
        SpringApplication.run(AuditorioApplication.class, args);
    }

}
