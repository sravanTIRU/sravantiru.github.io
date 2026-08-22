# T G Sravan Teja — Developer & AI Educator Portfolio

> **Computer Applications | AI | Software Development**

A modern, responsive personal portfolio website showcasing my experience in **software development, Artificial Intelligence, teaching, cloud technologies, and practical projects**.

The portfolio is built from my professional background and is designed to provide recruiters, developers, educators, and potential collaborators with a clear overview of my skills, experience, education, projects, and career interests.

---

## ✨ About the Portfolio

This website serves as my personal professional presence on the web.

It highlights:

- 💻 Software development experience
- 🤖 Artificial Intelligence teaching and practical learning
- ☁️ Cloud and DevOps exposure
- 🧑‍🏫 Technical education and student mentoring
- 🎓 Academic background
- 🚀 Software projects
- 🛠️ Technical skills
- 📜 Certifications
- 📬 Contact and professional links

My current professional experience includes teaching Artificial Intelligence at Vignan University, where I work with undergraduate students on AI concepts, algorithms, practical implementations, laboratory assignments, and project mentoring.

---

# 🛠️ Tech Stack

| Technology       | Purpose                                  |
| ---------------- | ---------------------------------------- |
| **React 18**     | Frontend UI                              |
| **TypeScript**   | Type-safe development                    |
| **Vite 6**       | Development and production build tooling |
| **Tailwind CSS** | Styling and responsive design            |
| **Lucide React** | UI icons                                 |
| **HTML5**        | Semantic page structure                  |
| **CSS**          | Custom styling and visual effects        |

### Architecture

The application follows a component-based architecture with portfolio information separated from the presentation layer.

```text
React Components
       │
       ▼
Page Sections
       │
       ▼
Typed Portfolio Data
       │
       ▼
Resume / Professional Information
```

Portfolio content is centralized in:

```text
src/data/portfolioData.ts
```

This makes it easier to update personal information without modifying individual UI components.

---

# 🎨 Design

The portfolio uses a modern developer-oriented visual style featuring:

- Dark developer theme
- Glassmorphism-inspired UI
- Ambient background effects
- Subtle grid motifs
- Responsive layouts
- Smooth scrolling
- Section animations
- Interactive project cards
- Technology badges
- Accessible navigation
- Mobile-friendly layouts

The design intentionally avoids excessive visual effects so that the portfolio remains professional and readable.

---

# 📁 Project Structure

```text
MyPortfolio/
│
├── public/
│   ├── T_G_Sravan_Teja_Resume.docx
│   └── sravanTG.docx
│
├── src/
│   │
│   ├── assets/
│   │   └── Static media and visual assets
│   │
│   ├── components/
│   │   ├── Navbar.tsx
│   │   ├── SectionHeader.tsx
│   │   └── Footer.tsx
│   │
│   ├── data/
│   │   └── portfolioData.ts
│   │
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── ExperienceSection.tsx
│   │   ├── EducationSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── SkillsSection.tsx
│   │   ├── TeachingSection.tsx
│   │   ├── CertificationsSection.tsx
│   │   └── ContactSection.tsx
│   │
│   ├── styles/
│   │   └── globals.css
│   │
│   ├── App.tsx
│   └── main.tsx
│
├── index.html
├── package.json
├── tailwind.config.js
├── tsconfig.json
├── vite.config.ts
└── README.md
```

---

# 🚀 Features

### 🏠 Hero

Introduces my professional identity with quick access to:

- About
- Projects
- Resume
- Contact
- Professional profiles

### 👨‍💻 About

Provides an overview of my background in:

- Computer Applications
- Software Development
- Artificial Intelligence
- Teaching
- Cloud technologies
- Research and continued learning

### 💼 Experience

Includes my professional and internship experience, presented through a chronological timeline.

### 🎓 Education

Highlights:

- M.Tech — Vignan University
- MCA — Acharya Nagarjuna University
- BSc — Acharya Nagarjuna University

My MCA project, **String Similarity and Database Cleansing**, is also highlighted.

### 🚀 Projects

The portfolio currently showcases:

#### Task Management Application

**Angular v20 · Spring Boot**

Responsive task management application featuring REST APIs, JWT authentication, and user management.

#### String Similarity Search

**Python · Django · PostgreSQL**

Database-cleansing solution using hash-based string similarity algorithms.

#### High Card Duel

**Python**

Command-line card game implementing turn-based logic and score tracking.

#### Weather App

**JavaScript · OpenWeatherMap API**

Weather application with geolocation and temperature-unit selection.

#### QR Code Generator

**Python**

Utility for generating QR codes from URLs.

The projects and technologies above are based on the projects listed in my resume.

### 🧠 Skills

Technical skills are organized into:

- Programming
- Web & Backend
- Databases
- Cloud & DevOps
- Tools & Platforms

The portfolio reflects technologies such as Python, Java, JavaScript, SQL, Angular, Spring Boot, PostgreSQL, MySQL, AWS, Docker, Jenkins, Git, and GitHub.

### 🤖 AI & Teaching

A dedicated section highlights my Artificial Intelligence teaching experience, including:

- Machine learning fundamentals
- Algorithms
- Practical implementations
- Laboratory assignments
- Student mentoring
- AI projects and research-oriented learning

### 📜 Certifications

The portfolio presents my certifications and professional learning experiences from:

- Udemy
- Forage
- Acharya Nagarjuna University
- Codedamn

---

# 💻 Getting Started

## Prerequisites

Make sure the following are installed:

- **Node.js**
- **npm**

You can verify your installation with:

```bash
node --version
npm --version
```

---

## Installation

Clone the repository:

```bash
git clone <YOUR_REPOSITORY_URL>
```

Navigate to the project:

```bash
cd MyPortfolio
```

Install dependencies:

```bash
npm install
```

---

## ▶️ Run the Development Server

Start the development server:

```bash
npm run dev
```

Vite will display the local development URL in the terminal.

Open that URL in your browser.

Typically it will be similar to:

```text
http://localhost:5173
```

> Do not assume a fixed port if Vite selects another available port.

---

# 🏗️ Production Build

Create an optimized production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

---

# ✏️ Updating Portfolio Information

Portfolio information is centralized in:

```text
src/data/portfolioData.ts
```

This file contains the structured data used throughout the website.

You can update:

```text
personal
experience
education
projects
skills
certifications
```

without having to rewrite the UI components.

---

# 📄 Resume

The portfolio provides a downloadable copy of my resume.

Place the latest resume inside:

```text
public/
```

Then update the corresponding resume filename/path in:

```text
src/data/portfolioData.ts
```

Before deploying the website, make sure the resume contains the correct:

- Email
- Phone number
- LinkedIn URL
- GitHub URL

The current resume contains placeholder contact information, so these values should be replaced before publishing.

---

# 🔗 Professional Links

Replace the placeholders in the portfolio data with the actual professional profiles:

```text
LinkedIn: <YOUR_LINKEDIN_URL>

GitHub: <YOUR_GITHUB_URL>

Email: <YOUR_EMAIL>

Phone: <YOUR_PHONE>
```

Only publish links that actually exist.

---

# 📱 Responsive Design

The portfolio is designed for:

- 🖥️ Desktop
- 💻 Laptop
- 📱 Mobile
- 📟 Tablet

The interface adapts navigation, cards, typography, spacing, and section layouts according to screen size.

---

# ♿ Accessibility

The project aims to follow modern accessibility practices, including:

- Semantic HTML
- Keyboard-friendly navigation
- Accessible buttons
- Visible focus states
- Proper heading hierarchy
- Responsive layouts
- Reduced-motion support

---

# 🔍 SEO

The portfolio includes basic search-engine optimization through:

- Page title
- Meta description
- Semantic headings
- Open Graph metadata
- Responsive design

---

# 🔒 Content Integrity

The portfolio is intentionally built around verified information from my resume.

It does **not** intentionally include:

- Fake achievements
- Fake companies
- Fake projects
- Fake statistics
- Fake certifications
- Fake client information
- Fabricated experience
- Invented GitHub repositories

If information is not available, it should be added manually rather than fabricated.

---

# 📌 Current Professional Focus

My professional interests include:

**Software Development · Artificial Intelligence · Teaching · Research**

I am interested in opportunities that allow me to apply my technical and analytical skills while continuing to learn, build, teach, and contribute to meaningful projects.

---

# 🗺️ Future Improvements

Potential future enhancements include:

- [ ] Connect real GitHub repositories
- [ ] Add live project demonstrations
- [ ] Add project screenshots
- [ ] Add profile photograph
- [ ] Add downloadable PDF resume
- [ ] Add custom domain
- [ ] Deploy to production
- [ ] Add GitHub API integration
- [ ] Add project search/filtering
- [ ] Add dark/light theme toggle
- [ ] Add analytics
- [ ] Improve SEO and social sharing
- [ ] Add automated CI/CD deployment

These features should only be added when the corresponding real data, services, or repositories are available.

---

# 🌐 Deployment

The application can be deployed to modern static/frontend hosting platforms such as:

- Vercel
- Netlify
- GitHub Pages
- AWS

The production deployment method should be selected based on the final hosting requirements.

---

# 👨‍💻 Author

## T G Sravan Teja

**Computer Applications | AI | Software Development**

Currently working as a **Junior Lecturer at Vignan University**, with experience in Artificial Intelligence teaching, software development, and practical technology projects.

### Areas of Interest

- Software Development
- Artificial Intelligence
- Machine Learning
- Cloud Technologies
- Technical Education
- Research

---

## 📄 License

This project represents my personal portfolio.

Unless otherwise specified, the content, personal information, resume, and branding are not intended for redistribution or commercial reuse.

---

⭐ If you find the project interesting, feel free to explore the code and projects showcased in the portfolio.
