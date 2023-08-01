package com.example.demo.Quizapp2;

import java.util.ArrayList;
import java.util.List;

public class QuizTopic extends QuizEntity {
    private List<Question> questions;

    public QuizTopic(String topicName) {
        super(topicName);
        this.questions = new ArrayList<>();
    }

    public String getTopicName() {
        return getName();
    }
    
    public List<Question> getQuestions() {
        return questions;
    }

    public void addQuestion(Question question) {
        questions.add(question);
    }

    @Override
    public void display() {
        System.out.println(getName() + ":");
        for (int i = 0; i < questions.size(); i++) {
            System.out.println((i + 1) + ". " + questions.get(i).getQuestionName());
        }
    }
}
