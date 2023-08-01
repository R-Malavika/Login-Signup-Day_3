package com.example.demo.Quizapp2;

import java.util.List;

public abstract class QuizEntity {
    private String name;

    public QuizEntity(String name) {
        this.name = name;
    }

    public String getName() {
        return name;
    }

    public abstract void display();
}
