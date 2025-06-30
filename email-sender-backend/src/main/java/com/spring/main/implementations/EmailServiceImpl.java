package com.spring.main.implementations;

import java.io.File;
// import java.io.IOException;
// import java.nio.file.Files;
// import java.nio.file.StandardCopyOption;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.FileSystemResource;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.spring.main.service.EmailService;

import jakarta.mail.MessagingException;
import jakarta.mail.internet.MimeMessage;

@Service
public class EmailServiceImpl implements EmailService {
    @Autowired
    private JavaMailSender mailSender;

    private Logger logger = LoggerFactory.getLogger(EmailServiceImpl.class);

    @Override
    public void sendEmail(String to, String subject, String message) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setFrom("amanpuskaremg25@gmail.com");
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(message);
        mailSender.send(simpleMailMessage);
        logger.info("Email has been sent...");
    }

    @Override
    public void sendEmail(String[] to, String subject, String message) {
        SimpleMailMessage simpleMailMessage = new SimpleMailMessage();
        simpleMailMessage.setTo(to);
        simpleMailMessage.setFrom("amanpuskaremg25@gmail.com");
        simpleMailMessage.setSubject(subject);
        simpleMailMessage.setText(message);
        mailSender.send(simpleMailMessage);
        logger.info("Email has been sent...");

    }

    @Override
    public void sendEmailWithHtml(String to, String subject, String htmlContent) {
        MimeMessage simpMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(simpMessage, true, "UTF-8");
            helper.setTo(to);
            helper.setFrom("amanpuskaremg25@gmail.com");
            helper.setSubject(subject);
            helper.setText(htmlContent, true);
            mailSender.send(simpMessage);
            logger.info("Email has been sent...");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

    }

    @Override
    public void sendEmailWithFile(String to, String subject, String message, File file) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(to);
            helper.setFrom("amanpuskaremg25@gmail.com");
            helper.setSubject(subject);
            // send htlm content also
            helper.setText(message, true);
            // when file path is there
            FileSystemResource fileSystemResource = new FileSystemResource(file);
            helper.addAttachment(fileSystemResource.getFilename(), file);

            mailSender.send(mimeMessage);
            logger.info("email has been sent...");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }

    }

    @SuppressWarnings("null")
    @Override
    public void sendEmailWithFile(String to, String subject, String message, MultipartFile multipartFile) {
        MimeMessage mimeMessage = mailSender.createMimeMessage();
        try {
            MimeMessageHelper helper = new MimeMessageHelper(mimeMessage, true);
            helper.setTo(to);
            helper.setFrom("amanpuskaremg25@gmail.com");
            helper.setSubject(subject);
            helper.setText(message, true);
            String fileName = multipartFile.getOriginalFilename();
            helper.addAttachment(fileName, multipartFile);
            mailSender.send(mimeMessage);
            logger.info("email has been sent...");
        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }

}
