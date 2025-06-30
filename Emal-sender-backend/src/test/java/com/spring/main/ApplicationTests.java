// package com.spring.main;

// import java.io.File;
// import java.io.FileInputStream;
// import java.io.FileNotFoundException;
// import java.io.InputStream;

// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
// import org.springframework.boot.test.context.SpringBootTest;

// // import com.spring.main.service.EmailService;
// import com.spring.main.service.EmailService;

// @SpringBootTest
// class ApplicationTests {
// @Autowired
// private EmailService emailService;

// // @Test
// // void emailTest() {
// // System.out.println("Email is sending...");
// // eImpl.sendEmail("gopesirg@gmail.com", "This is first Email From Aman
// Puskar",
// // "Bhosdiwaale saale kutte teri aisi ki taisi");
// // }

// // @Test
// // public void sendEmailToMultiple() {
// // System.out.println("sending email to multiple person");
// // String[] emails = { "gopesirg@gmail.com", "amanpuskar618@gmail.com" };
// // eImpl.sendEmail(emails, "Multiple user", "Kya re Lucche du kya kaan k
// // neeche");
// // }

// // @Test
// // void sendHtmlEmail() {
// // String html = "<h1 style='color:red;'>Welcome to the Aman's Land. You are
// // very lucky</h1>";
// // System.out.println("Send Html Content via email....");
// // eImpl.sendEmailWithHtml("amanpuskar618@gmail.com", "Html content", html);
// // }

// // @Test
// // void sendEmailFile() {
// // System.out.println("sending file via email");
// // emailService.sendEmailWithFile("amanpuskar618@gmail.com",
// // "email with file",
// // "This email has file",
// // new File(
// //
// "C:\\Users\\amanp\\OneDrive\\Desktop\\Spring-Boot-Programs\\spring-mail-service\\src\\main\\resources\\static\\FilesForTest\\Details.text"));
// // }

// // @Test
// // void sendEmailFilewithStream() {
// // System.out.println("sending file via email");
// // File file = new File(
// //
// "C:\\Users\\amanp\\OneDrive\\Desktop\\Spring-Boot-Programs\\spring-mail-service\\src\\main\\resources\\static\\FilesForTest\\Details.text");
// // try {
// // InputStream is = new FileInputStream(file);
// // emailService.sendEmailWithFile("amanpuskar618@gmail.com",
// // "email with file",
// // "This email has file from Input stream",
// // is);
// // } catch (FileNotFoundException e) {
// // e.printStackTrace();
// // }
// // }
// }