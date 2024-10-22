CREATE DATABASE SchoolDB;

USE SchoolDB;

CREATE TABLE users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('student', 'teacher', 'admin') NOT NULL
);

CREATE TABLE students (
    student_id INT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    attendance INT,
    subject_ids TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE teachers (
    teacher_id INT PRIMARY KEY,
    user_id INT,
    name VARCHAR(100),
    subject_ids TEXT,
    timetable TEXT,
    FOREIGN KEY (user_id) REFERENCES users(user_id)
);

CREATE TABLE subjects (
    subject_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100)
);

CREATE TABLE timetable (
    timetable_id INT AUTO_INCREMENT PRIMARY KEY,
    teacher_id INT,
    subject_id INT,
    time_slot VARCHAR(50),
    FOREIGN KEY (teacher_id) REFERENCES teachers(teacher_id),
    FOREIGN KEY (subject_id) REFERENCES subjects(subject_id)
);
