package com.spring.main.service;

import java.io.File;

import org.springframework.web.multipart.MultipartFile;

public interface EmailService {

    void sendEmail(String to, String subject, String message);

    void sendEmail(String[] to, String subject, String message);

    void sendEmailWithHtml(String to, String subject, String htmlContent);

    void sendEmailWithFile(String to, String subject, String message, File file);

    void sendEmailWithFile(String to, String subject, String message, MultipartFile multipartFile);

}
