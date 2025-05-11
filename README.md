# 🌟 User Authentication System (Frontend Only) 🌟

<p align="center">
  <strong>A simple yet powerful authentication system built with HTML, CSS, and JavaScript.</strong>
</p>

<p align="center">
  <a href="https://github.com/aman-ap-official" target="_blank">Visit my GitHub</a> • <a href="#installation">Installation</a> • <a href="#license">License</a>
</p>

---

## ✨ Project Overview

This project simulates **user registration**, **login**, and an **admin dashboard** entirely with **HTML**, **CSS**, and **JavaScript**. With no backend required, it demonstrates basic frontend capabilities such as saving data to `localStorage` and switching views between users and admins.

- **User Registration**: Register a new user and save their details.
- **User Login**: Validate user credentials against `localStorage`.
- **Admin Dashboard**: Admin logs in with hardcoded credentials to view all users.

---

## 🎬 Video Demo

<p align="center">
  <a href=" https://github.com/user-attachments/assets/d23d3b0b-b817-439a-b222-9a49f5dc5079">
  </a>
</p>

> **Click on the video preview above to watch the full demo.**

---

## 🔧 How It Works

### 1. **User Registration**

- The user registers by providing a **username**, **email**, and **password**.
- If the **username** already exists in `localStorage`, the system shows an error message.
- On successful registration, the data is saved to the browser’s **localStorage**.

### 2. **User Login**

- The user logs in by entering their **username** and **password**.
- The credentials are verified against the data stored in **localStorage**.
- On success, the user is shown a **personalized home page**.

### 3. **Admin Login**

- Admin uses hardcoded credentials:
  - **Username**: `admin`
  - **Password**: `admin123`
- On successful login, the **admin dashboard** displays a list of all registered users.

### 4. **Navigation & UI**

- Simple navigation is achieved using **JavaScript** functions to switch between **Login**, **Signup**, and **Admin** tabs.
- Upon successful login, the user is directed to the relevant homepage view.

---

## 🛠️ Technologies Used

- **HTML**: Structure of the forms, inputs, and navigation.
- **CSS**: Styling to ensure a clean, responsive, and attractive design.
- **JavaScript**: Handling logic for user registration, login, and managing dynamic content.

---

## 📥 Installation

### To get started, simply:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/aman-ap-official/user-authentication-system.git
