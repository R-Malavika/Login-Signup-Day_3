package com.example.demo.Quizapp2;

import java.sql.*;

public class Main {
    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/quiz_db";
            String user = "root";
            String password = "DKSj@n12";
            
            try {
				Class.forName("com.mysql.cj.jdbc.Driver");
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
            
            Connection questionsConnection = DriverManager.getConnection(url, user, password);
            Connection resultsConnection = DriverManager.getConnection(url, user, password);

            QuizApp quizApp = new QuizApp(questionsConnection, resultsConnection);

            quizApp.startQuiz();

            questionsConnection.close();
            resultsConnection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
