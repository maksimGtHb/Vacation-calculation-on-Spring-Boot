package com.example.calc.controllers;

import org.springframework.web.bind.annotation.*;

@RestController // Added to ensure this class handles REST requests
public class Controller {

    @GetMapping("/calculate")
    public String calculate(
            @RequestParam(value = "a", defaultValue = "0") double salary,
            @RequestParam(value = "b", defaultValue = "0") int vacationDays) {

        // Defining days in a month
        final double daysInMonth = 29.3;
        // Calculating the daily salary
        double salaryPerDay = salary / daysInMonth;
        // Calculating the vacation payout
        double result = salaryPerDay * vacationDays;

        // Building the response as a formatted string
        return String.format("Сумма отпускных составляет %.2f рублей", result);
    }
}

