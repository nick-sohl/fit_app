# 🏋️‍♂️ FitApp

A simple web application for fitness advisors to monitor and calculate the **Body Mass Index (BMI)** of their clients.

This project is developed as part of **Web Engineering WEE (Z-TIA-23-T-a)**.

---

## 🚀 Overview

FitApp allows users to:

- Understand what the **BMI** is and how it's calculated.
- View **BMI categories** and their classification.
- See **international BMI statistics**.
- Use a **form** to calculate their own BMI value.

---

## 📂 Project Structure

fit-app/
├── Dockerfile
├── README.md
├── astro.config.mjs
├── compose.yaml
├── nginx
│   └── default.conf
├── package-lock.json
├── package.json
├── php_script
│   └── calculate_bmi.php
├── public
│   └── robots.txt
├── src
│   ├── components
│   ├── layouts
│   ├── pages
│   └── styles
└── tsconfig.json

---

## 🧮 BMI Formula

The **Body Mass Index (BMI)** is calculated using the formula:

BMI = m / l²

where:

- `m` = body mass in **kilograms (kg)**
- `l` = body height in **meters (m)**

---

## 🧠 Requirements Summary (Sprint 01)

- Project reachable under `localhost/fit-app`
- Landing page with BMI info and formula
- Separate pages for BMI categories and statistics
- BMI calculation form (with PHP)
- Include developer comment with name and date in each file

---

## 🐳 Development Setup (Docker)

1. **Build and start containers**

   ```bash
   docker-compose up --build

   ```

2. Access in Browser
   <http://localhost/fit-app>

🧑‍💻 Author

[Nick Sohl]
Last modified: [02. 11. 2025]
Web Engineering WEE — Sprint 01
