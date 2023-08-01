package com.example.demo.Quizapp2;

import java.sql.*;
import java.util.*;

public class QuizApp {
    private Connection questionsConnection;
    private Connection resultsConnection;
    private static Scanner scanner;
    private List<QuizTopic> quizTopics;
    private int correctAnsCount;
    private int wrongAnsCount;
    private String user;
    private boolean quizResultSaved = false;

    public List<Question> getQuestionsForTopic(String topic) {
        for (QuizTopic quizTopic : quizTopics) {
            if (quizTopic.getTopicName().equals(topic)) {
                return quizTopic.getQuestions();
            }
        }
        return Collections.emptyList();
    }
    
    public QuizApp(Connection questionsConnection, Connection resultsConnection) {
        this.questionsConnection = questionsConnection;
        this.resultsConnection = resultsConnection;
        scanner = new Scanner(System.in);
        this.quizTopics = new ArrayList<>();
        setupQuizTopics();
    }

    private void setupQuizTopics() {
        QuizTopic topic1 = new QuizTopic("Java Basics");
        topic1.addQuestion(new Question("Which statement is true about Java?",
                Arrays.asList("A. Java is a sequence-dependent programming language.",
                        "B. Java is a code-dependent programming language.",
                        "C. Java is a platform-dependent programming language.",
                        "D. Java is a platform-independent programming language."), 'D'));
        topic1.addQuestion(new Question("What is the extension of Java code files?",
                Arrays.asList("A. .txt", "B. .pdf", "C. .sql", "D. .java"), 'D'));
        topic1.addQuestion(new Question("Who invented Java Programming?",
                Arrays.asList("A. Guido van Rossum",
                        "B. James Gosling",
                        "C. Dennis Ritchie",
                        "D. Bjarne Stroustrup"), 'B'));
        quizTopics.add(topic1);

        QuizTopic topic2 = new QuizTopic("OOPS Concepts");
        topic2.addQuestion(new Question("What is the main advantage of using OOP?",
                Arrays.asList("A. Reusability", "B. Speed", "C. Low memory usage", "D. None of the above."), 'A'));
        topic2.addQuestion(new Question("Which of the following is not an OOP concept?",
                Arrays.asList("A. Inheritance", "B. Polymorphism", "C. Encapsulation", "D. Compilation"), 'D'));
        topic2.addQuestion(new Question("Who invented OOP?",
                Arrays.asList("A. Andrea Ferro", "B. Adele Goldberg", "C. Alan Kay", "D. Dennis Ritchie"), 'C'));
        quizTopics.add(topic2);

        QuizTopic topic3 = new QuizTopic("Artificial Intelligence");
        topic3.addQuestion(new Question("What is the full form of AI?",
                Arrays.asList("A. Artificially Intelligent",
                        "B. Artificial Intelligence",
                        "C. Artificially Intelligence",
                        "D. Advanced Intelligence"), 'B'));
        topic3.addQuestion(new Question("Who is the inventor of Artificial Intelligence?",
                Arrays.asList("A. Geoffrey Hinton", "B. Andrew Ng", "C. John McCarthy", "D. Jürgen Schmidhuber"), 'C'));
        topic3.addQuestion(new Question("Which of the following is the branch of Artificial Intelligence?",
                Arrays.asList("A. Machine Learning",
                        "B. Cyber forensics",
                        "C. Full-Stack Developer",
                        "D. Network Design"), 'A'));
        quizTopics.add(topic3);
    }

    private void insertQuizQuestions() {
        try {
            for (QuizTopic quizTopic : quizTopics) {
                List<Question> questions = quizTopic.getQuestions();
                if (!questions.isEmpty()) {
                    for (Question question : questions) {
                        String insertQuery = "INSERT INTO quiz_questions (topic, question, option1, option2, option3, option4, correct_option) " +
                                "VALUES (?, ?, ?, ?, ?, ?, ?)";

                        PreparedStatement statement = questionsConnection.prepareStatement(insertQuery);
                        statement.setString(1, quizTopic.getTopicName());
                        statement.setString(2, question.getQuestionName());
                        List<String> options = question.getOptions();
                        statement.setString(3, options.get(0));
                        statement.setString(4, options.get(1));
                        statement.setString(5, options.get(2));
                        statement.setString(6, options.get(3));
                        statement.setString(7, String.valueOf(question.getCorrectOption()));
                        statement.executeUpdate();
                        statement.close();
                    }
                }
            }
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public static void main(String[] args) {
        try {
            String url = "jdbc:mysql://localhost:3306/quiz_db";
            String user = "root";
            String password = "DKSj@n12";
            
            Connection questionsConnection = DriverManager.getConnection(url, user, password);
            Connection resultsConnection = DriverManager.getConnection(url, user, password);

            QuizApp quizApp = new QuizApp(questionsConnection, resultsConnection);

            quizApp.insertQuizQuestions(); // Insert quiz questions into the database

            quizApp.startQuiz();

            if (!quizApp.quizResultSaved) {
                quizApp.saveQuizResult("No Topic", 0, 0, 0); // Save default quiz result
            }

            System.out.println("Do you want to view your past results?");
            System.out.println("1. Yes");
            System.out.println("2. No");
            int choice1 = quizApp.getValidChoice(1, 2); // Get valid choice (1 or 2)
            if (choice1 == 1) {
                scanner.nextLine();
                quizApp.viewPastResults(); // Call the method to view past results
            } else {
                System.out.println();
            }
            System.out.println("Do you want to view users whose score is above average percentage?");
            System.out.println("1. Yes");
            System.out.println("2. No");
            int choice2 = quizApp.getValidChoice(1, 2); // Get valid choice (1 or 2)
            if (choice2 == 1) {
                scanner.nextLine();
                quizApp.findUsersAboveAveragePercentage();
            } else {
                System.out.println();
                System.out.println();
            }
            System.out.println("Do you want to delete your past results?");
            System.out.println("1. Yes");
            System.out.println("2. No");
            int choice = quizApp.getValidChoice(1, 2); // Get valid choice (1 or 2)
            if (choice == 1) {
                scanner.nextLine();
                quizApp.deletePastResults(); // Call the method to delete past results
            } else {
                System.out.println("Thanks for attending the quiz!");
                System.exit(0);
            }

            questionsConnection.close();
            resultsConnection.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    public void startQuiz() {
        System.out.print("Enter your name: ");
        user = scanner.nextLine();
        System.out.println("Hello " + user + "!");
        selectQuizTopic();
    }

    private void selectQuizTopic() {
        System.out.println("\nChoose a Quiz Topic:");
        for (int i = 0; i < quizTopics.size(); i++) {
            System.out.println((i + 1) + ". " + quizTopics.get(i).getTopicName());
        }

        int choice = getValidChoice(1, quizTopics.size());
        QuizTopic selectedTopic = quizTopics.get(choice - 1);
        System.out.println("You have chosen the topic: " + selectedTopic.getTopicName());

        correctAnsCount = 0; // Reset correct answers count for the selected topic
        wrongAnsCount = 0; // Reset wrong answers count for the selected topic

        for (Question question : selectedTopic.getQuestions()) {
            displayQuestion(question);
        }

        // Display quiz results for the selected topic
        displayQuizResults(selectedTopic.getTopicName());
    }

    private void displayQuestion(Question question) {
        System.out.println("\n" + question.getQuestionName());
        List<String> options = question.getOptions();
        for (int i = 0; i < options.size(); i++) {
            System.out.println((char) ('A' + i) + ". " + options.get(i));
        }

        System.out.print("Enter Your Answer (A/B/C/D): ");
        char ans = Character.toUpperCase(scanner.next().charAt(0));

        if (ans == question.getCorrectOption()) {
            System.out.println("Correct!");
            correctAnsCount++;
        } else {
            System.out.println("Wrong! The correct answer is option " + question.getCorrectOption() + ".");
            wrongAnsCount++;
        }
    }

    private int getValidChoice(int min, int max) {
        int choice = -1;
        while (choice < min || choice > max) {
        	System.out.println();
            System.out.print("Enter your choice: ");
            
            if (scanner.hasNextInt()) {
                choice = scanner.nextInt();
                System.out.println();
            } else {
                scanner.next(); // Clear invalid input
            }
            if (choice < min || choice > max) {
                System.out.println("Invalid choice. Please enter a valid number.");
            }
        }
        return choice;
    }

    private void displayQuizResults(String quizTopic) {
        System.out.println("\n-------- Quiz Results ---------");
        int totalQuestions = correctAnsCount + wrongAnsCount;
        System.out.println("User_Name: " + user);
        System.out.println("Total Questions: " + totalQuestions);
        System.out.println("Correctly Answered Questions: " + correctAnsCount);
        System.out.println("Incorrectly Answered Questions: " + wrongAnsCount);

        int percentage = (100 * correctAnsCount) / totalQuestions;
        System.out.println("Percentage: " + percentage);

        if (percentage > 95) {
            System.out.println("Performance: Very Good");
        } else if (percentage < 35) {
            System.out.println("Performance: Very Low");
        } else {
            System.out.println("Performance: Medium");
        }
        System.out.println("-------------------------------");
        System.out.println();
        // Save quiz result to the database using the selected topic's name
        saveQuizResult(quizTopic, correctAnsCount, totalQuestions, percentage);

        // Set the flag to true, indicating that the quiz result has been saved
        quizResultSaved = true;
    }

    private void saveQuizResult(String quizTopic, int correctAnswers, int totalQuestions, int percentage) {
        try {
            PreparedStatement statement = resultsConnection.prepareStatement(
                    "INSERT INTO quiz_results (quiz_topic, correct_answers, total_questions, percentage, user) " +
                            "VALUES (?, ?, ?, ?, ?)"
            );
            statement.setString(1, quizTopic);
            statement.setInt(2, correctAnswers);
            statement.setInt(3, totalQuestions);
            statement.setInt(4, percentage);
            statement.setString(5, user); // Use the class member variable 'user'
            statement.executeUpdate();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void viewPastResults() {
        System.out.print("Enter your name to view past results: ");
        String usernameToView = scanner.nextLine();

        try {
            PreparedStatement statement = resultsConnection.prepareStatement(
                    "SELECT * FROM quiz_results WHERE user = ?"
            );
            statement.setString(1, usernameToView);
            ResultSet resultSet = statement.executeQuery();

            boolean hasResults = false;
            while (resultSet.next()) {
                hasResults = true;
                String quizTopic = resultSet.getString("quiz_topic");
                int correctAnswers = resultSet.getInt("correct_answers");
                int totalQuestions = resultSet.getInt("total_questions");
                int percentage = resultSet.getInt("percentage");

                System.out.println("\n-------- Past Quiz Result ---------");
                System.out.println("User_Name: " + usernameToView);
                System.out.println("Quiz Topic: " + quizTopic);
                System.out.println("Total Questions: " + totalQuestions);
                System.out.println("Correctly Answered Questions: " + correctAnswers);
                System.out.println("Percentage: " + percentage);
                System.out.println("-----------------------------------");
            }

            if (!hasResults) {
                System.out.println("\nNo quiz results found for username: " + usernameToView);
            }

            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    private void findUsersAboveAveragePercentage() {
        try {
            String subquery = "SELECT AVG(percentage) FROM quiz_results";
            String mainQuery = "SELECT user, percentage FROM quiz_results WHERE percentage > (" + subquery + ")";
            PreparedStatement statement = resultsConnection.prepareStatement(mainQuery);
            ResultSet resultSet = statement.executeQuery();

            System.out.println("Users with percentage above the average:");
            while (resultSet.next()) {
                String user = resultSet.getString("user");
                int percentage = resultSet.getInt("percentage");
                System.out.println(user + ": " + percentage + "%");
            }
            System.out.println();
            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }

    
    private void deletePastResults() {
        System.out.print("Enter your name to delete past results: ");
        String usernameToDelete = scanner.nextLine();

        try {
            PreparedStatement statement = resultsConnection.prepareStatement(
                    "DELETE FROM quiz_results WHERE user = ?"
            );
            statement.setString(1, usernameToDelete);
            int rowsDeleted = statement.executeUpdate();

            if (rowsDeleted > 0) {
                System.out.println("Successfully deleted past results for username: " + usernameToDelete);
            } else {
                System.out.println("No quiz results found for username: " + usernameToDelete);
            }

            statement.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }
    }
}
