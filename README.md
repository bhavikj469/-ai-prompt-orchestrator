# AI Prompt Orchestrator & Business Planner

An AI-powered prompt generation and business planning tool designed to help **developers, automation engineers, and complete beginners** generate **execution-ready prompts** and **step-by-step business growth plans**.

This project demonstrates **AI prompt engineering, product thinking, and frontend architecture**, with a strong focus on **real-world usability**.

---

## 🔥 Key Highlights

- Dual-mode system:
  - **Prompt Generator** for roles & tasks
  - **Business Planner** for non-technical entrepreneurs
- Beginner-friendly, execution-ready outputs
- Platform-specific guidance (LinkedIn, Instagram, Facebook, etc.)
- Modular and scalable architecture
- Resume-ready, SaaS-expandable project

---

## 🚀 Features

### 1️⃣ AI Prompt Generator Mode
Generate high-quality prompts by selecting:

- **Role Category** (Developer, Marketing, Automation, etc.)
- **Role** (Frontend Developer, AI Engineer, Content Writer, etc.)
- **Task Type** (Code, Strategy, Writing, Planning, etc.)
- **Dependency Level** (Beginner → Expert)
- **Target Platform** (ChatGPT, Claude, Gemini, etc.)
- **User Context** (custom problem description)

📌 Output:
- Step-by-step, execution-ready AI prompts
- Clear instructions
- Structured and reusable format

---

### 2️⃣ Business Planner Mode (Beginner Friendly)
Designed for users with **zero business knowledge**.

Helps create a complete plan from **scratch to scale**.

Includes:
- Business type & stage selection
- Budget & target audience inputs
- Marketing & growth roadmap
- Platform-wise strategy:
  - LinkedIn (connections, posting strategy)
  - Instagram (reels, posts, timing, hashtags)
  - Facebook (pages, content, engagement)
- Strengths, weaknesses, opportunities
- 30–60–90 day execution plan
- Tools, metrics, and growth tips

📌 Perfect for:
- Small businesses
- Freelancers
- Local service providers
- First-time entrepreneurs

---

## 🧠 Why This Project Stands Out

- Focuses on **execution**, not theory
- Converts AI into **actionable workflows**
- Solves real problems for **non-technical users**
- Designed with a **future SaaS mindset**
- Demonstrates both **technical skill and product thinking**

---

## 🧱 Tech Stack

- **React.js** – Frontend
- **JavaScript (ES6+)**
- **Node.js / npm**
- Modular prompt engine architecture
- Reusable UI components

---

## 📂 Project Structure
frontend/
├── src/
│ ├── engine/
│ │ ├── promptEngine.js
│ │ └── businessPromptEngine.js
│ ├── config/
│ │ ├── roles.js
│ │ ├── roleCategories.js
│ │ ├── tasks.js
│ │ ├── dependencyLevels.js
│ │ ├── platforms.js
│ │ └── businessOptions.js
│ ├── ui/
│ │ ├── SearchableSelect.js
│ │ ├── TextArea.js
│ │ ├── GenerateButton.js
│ │ ├── PromptPreview.js
│ │ └── ModeToggle.js
│ └── App.js
├── public/
└── package.json

## Install dependencies
npm install

## Run the project
npm start

## The app will run on:
http://localhost:3000

## Future Enhancements
More roles & industries
Save & export prompts (PDF / Markdown)
User accounts & prompt history
Analytics & performance tracking
SaaS-based monetization model
