package com.example.demo.Quizapp2;

import java.util.List;

public class Question extends QuizEntity {
    private List<String> options;
    private char correctOption;

    public Question(String question, List<String> options, char correctOption) {
        super(question);
        this.options = options;
        this.correctOption = correctOption;
    }
    
    public String getQuestionName() {
    	return getName();
    }

    public List<String> getOptions() {
        return options;
    }

    public char getCorrectOption() {
        return correctOption;
    }

    @Override
    public void display() {
        System.out.println(getQuestionName());
        for (int i = 0; i < options.size(); i++) {
            System.out.println((char) ('A' + i) + ". " + options.get(i));
        }
    }
    
}
