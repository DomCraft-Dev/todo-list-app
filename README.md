# 📝 Todo App

A modern, minimal Todo application built with vanilla JavaScript. Features filter, localStorage persistence, and a clean UI.

![Todo App Screenshot](./screenshots/desktop.png)

## ✨ Features

- ➕ **Add tasks** — Add new tasks via button or Enter key
- ✅ **Toggle complete** — Click a task to mark it as done
- 🗑️ **Delete tasks** — Remove tasks with one click
- 🔍 **Filter tasks** — View All / Active / Completed
- 💾 **LocalStorage** — Tasks persist after page refresh
- 📊 **Stats** — See total, completed, and remaining tasks
- 📱 **Responsive** — Works on mobile and desktop
- 🎨 **Modern UI** — Clean design with smooth transitions
- ⌨️ **Keyboard support** — Press Enter to add a task

## 🛠️ Tech Stack

- **HTML5** — Semantic markup
- **CSS3** — Flexbox, custom properties, transitions
- **JavaScript (ES6+)** — Vanilla JS, no frameworks
- **LocalStorage API** — Data persistence

## 🔗 Live Demo

👉 [View Live Demo](https://your-project.vercel.app)

## 📸 Screenshots

### Desktop
![Desktop View](./screenshots/desktop.png)

### Mobile
![Mobile View](./screenshots/mobile.png)

## 🏃 How to Run

1. **Clone the repository**
```bash
git clone https://github.com/DomCraft-Dev/todo-list-app.git
Open the project folder

bash
cd todo-app
Open index.html in your browser

No build tools or dependencies required. Just open and use. ✨

📂 Project Structure
text
todo-app/
├── index.html          # Main HTML file
├── style.css           # Styles
├── script.js           # JavaScript logic
├── README.md           # This file
└── screenshots/        # App screenshots
    ├── desktop.png
    └── mobile.png
💡 How It Works
State Management
The app uses a simple state management approach:

js
let todos = [];        // Array of todo objects
let filter = "all";    // Current filter ("all" | "active" | "completed")
Each todo object:

js
{
  id: 1730000000000,   // Unique ID (timestamp)
  text: "Buy milk",    // Task text
  done: false          // Completion status
}
Render Function
The render() function is the single source of truth for the UI:

Filters todos based on the current filter

Rebuilds the DOM

Updates stats

Saves to LocalStorage

Every action (add, delete, toggle, filter) triggers render().

LocalStorage
Data persists using the LocalStorage API:

js
// Save
localStorage.setItem("todos", JSON.stringify(todos));

// Load
let todos = JSON.parse(localStorage.getItem("todos")) || [];
🎯 What I Learned
Building this project taught me:

✅ State → Render pattern (foundation of React)

✅ Event handling and stopPropagation()

✅ Array methods: map, filter, find, forEach

✅ LocalStorage API with JSON serialization

✅ Modern CSS: Flexbox, transitions, responsive design

✅ Keyboard events (keydown, e.key)

✅ Git workflow: meaningful commits, clean structure

✅ Deployment with Vercel

🗺️ Roadmap
☑ v1 — Basic functionality (add, delete)
☑ v2.1 — Toggle complete
☑ v2.2 — Stats counter
☑ v2.3 — Filters (All / Active / Completed)
☑ v2.4 — LocalStorage persistence
☑ v2.5 — Modern UI redesign
☑ v2.6 — Enter key support
□ v3 — React rewrite
□ v4 — Backend with Node.js + MongoDB
□ v5 — User authentication
🤝 Contributing
Contributions, issues, and feature requests are welcome!

📝 License
This project is MIT licensed.

👤 Author
Mohammad

GitHub: @DomCraft_Dev
Telgram: @The_M4a1

Telegram: @DomCraft

⭐ If you like this project, give it a star!
