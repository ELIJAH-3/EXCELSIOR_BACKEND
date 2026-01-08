package com.example.demo;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
public class HelloController {

    // Initialize the logger
    private static final Logger logger = LoggerFactory.getLogger(HelloController.class);

    @GetMapping("/greet")
    public String sayHello(@RequestParam(defaultValue = "World") String name) {
        // Log the event
        logger.info("Greet endpoint was called with name: {}", name);
        
        return "Hello, " + name + "!";
    }
}