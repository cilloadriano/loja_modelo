package br.com.testviaLaser.springbootcompostgre;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;

@SpringBootApplication(scanBasePackages = "br.com.testviaLaser.springbootcompostgre")
@EntityScan(basePackages = "br.com.testviaLaser.springbootcompostgre.model")
public class BackendApplication {

    public static void main(String[] args) {
        SpringApplication.run(BackendApplication.class, args);
    }

}
