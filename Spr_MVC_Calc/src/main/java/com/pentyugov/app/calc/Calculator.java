package com.pentyugov.app.calc;

public class Calculator {
    private final String a;
    private final String b;
    private final String action;

    public Calculator(String a, String b, String action) {
        this.a = a;
        this.b = b;
        this.action = action;
    }

    public double calculate() {

        double result = 0;
        if (a != null && b != null && action != null) {

            int i = Integer.parseInt(a);
            int j = Integer.parseInt(b);
            switch (action) {
                case "multiplication":
                    result = i * j;
                    break;
                case "division":
                    result = i / (double) j;
                    break;
                case "subtraction":
                    result = i - j;
                    break;
                case "addition":
                    result = i + (double) j;
                    break;
                default:
                    result = 0;

            }
        }
        return result;
    }
}
