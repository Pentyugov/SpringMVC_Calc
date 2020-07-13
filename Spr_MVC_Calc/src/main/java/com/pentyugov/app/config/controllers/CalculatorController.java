package com.pentyugov.app.config.controllers;

import com.pentyugov.app.calc.Calculator;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@Controller
public class CalculatorController {

    @GetMapping("/calc")
    public String calculator(@RequestParam(value = "a",      required = false) String a,
                             @RequestParam(value = "b" ,     required = false) String b,
                             @RequestParam(value = "action", required = false) String action,
                             Model model
                             ){
        try {
            model.addAttribute("result", new Calculator(a, b, action).calculate());
        }
        catch (NumberFormatException e) {
            model.addAttribute("result", 0);
        }

        return "/calculator/calculator";
    }
}
