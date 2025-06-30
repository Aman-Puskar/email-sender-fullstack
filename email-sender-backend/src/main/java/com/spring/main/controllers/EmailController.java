package com.spring.main.controllers;

import java.io.IOException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.spring.main.customResponse.EmailCustomResponse;
import com.spring.main.emailEntity.EmailRequest;
import com.spring.main.service.EmailService;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/v1/email")
public class EmailController {

        @Autowired
        private EmailService emailService;

        @PostMapping("/send")
        public ResponseEntity<EmailCustomResponse> sendEmail(@RequestBody EmailRequest request) {
                emailService.sendEmailWithHtml(request.getTo(), request.getSubject(), request.getMessage());
                return ResponseEntity.ok(EmailCustomResponse.builder()
                                .message("Email send successfully!")
                                .httpStatus(HttpStatus.OK)
                                .success(true)
                                .build());
        }

        @PostMapping("/send-with-file")
        public ResponseEntity<EmailCustomResponse> sendWithFile(@RequestPart("request") EmailRequest request,
                        @RequestPart("file") MultipartFile file) throws IOException {

                emailService.sendEmailWithFile(request.getTo(), request.getSubject(), request.getMessage(),
                                file);

                return ResponseEntity.ok(EmailCustomResponse.builder()
                                .message("Email send successfully with file")
                                .httpStatus(HttpStatus.OK)
                                .success(true)
                                .build());
        }

}
