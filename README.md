# 📧 Email Sender Fullstack App

[🚀 Live Demo](https://email-sender-fullstack.vercel.app) | [📦 GitHub Repo](https://github.com/Aman-Puskar/email-sender-fullstack)

A simple, clean, and fully functional full-stack application to send emails using a frontend form. Built with React and Spring Boot, this project demonstrates form handling, backend communication, and real email sending via SMTP.

---

## 🌟 Features

- ✅ Simple and clean UI to send emails
- 📨 Real-time form validation
- 🛠️ Full-stack integration with React + Spring Boot
- 📤 Sends emails using SMTP (JavaMailSender)
- ⚙️ Custom configuration for sender email

---

## 🧱 Tech Stack

### Frontend
- ⚛️ React (with Vite)
- 🎨 Tailwind CSS
- 📦 Axios

### Backend
- ☕ Spring Boot
- 💌 JavaMailSender (SMTP email sending)
- 🔒 Spring Web MVC
- 🔧 CORS & REST APIs

---

## 📥 Getting Started

### 🔧 Backend Setup (Spring Boot)

1. Clone the repo and navigate:
   ```bash
   git clone https://github.com/Aman-Puskar/email-sender-fullstack
   cd email-sender-fullstack/backend



spring.mail.host=smtp.gmail.com
spring.mail.port=587
spring.mail.username=your_email@gmail.com
spring.mail.password=your_email_password
spring.mail.properties.mail.smtp.auth=true
spring.mail.properties.mail.smtp.starttls.enable=true
