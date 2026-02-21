# 🧠 Quiz Game

<div align="center">

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Status](https://img.shields.io/badge/Status-Complete-brightgreen?style=for-the-badge)

**A simple multiple-choice quiz game built with Vanilla JavaScript**

</div>

---

## 👤 About

A clean and simple **Quiz Game** built with pure HTML, CSS, and JavaScript — no frameworks or libraries used. The player answers multiple-choice questions one by one. Correct answers turn **green**, wrong answers turn **red**. Click Next to move to the next question.

> This is a **practice project** to learn JavaScript DOM manipulation, arrays of objects, and basic game logic.

---

## ✨ Features

- ❓ **Multiple Choice Questions** — 4 answer options per question
- ✅ **Green = Correct** — Correct answer highlighted in green
- ❌ **Red = Wrong** — Wrong answer highlighted in red
- ➡️ **Next Button** — Move to next question
- 📋 **Static Questions** — All questions stored in a JavaScript array
- 🎨 **Clean UI** — White card on blue background

---

## 📝 Questions Included

| # | Question | Correct Answer |
|---|---|---|
| 1 | What is the capital of France? | Paris |
| 2 | What is 2+2? | 4 |
| 3 | Which planet is known as the Red Planet? | Mars |

> ✏️ You can easily add more questions by editing the `questions` array in `script.js`

---

## 🛠 Tech Stack

| Technology | Usage |
|---|---|
| HTML5 | Page structure |
| CSS3 | Styling & layout |
| JavaScript (ES6+) | Quiz logic & DOM manipulation |

> ⚠️ No API, no React, no packages — pure Vanilla JavaScript only.

---

## 📁 Project Structure

```
quiz-game/
│
├── Index.html      # Main HTML page
├── main.css        # All styles
└── script.js       # Quiz logic & questions array
```

---

## ⚙️ Installation

No installation needed! This is a plain HTML/CSS/JS project.

**1. Clone the repository**

```bash
git clone https://github.com/afghanyarrami-bit/quiz-game.git
```

**2. Open the project**

```bash
cd quiz-game
```

**3. Open in browser**

Just double-click `Index.html` — or open with **Live Server** in VS Code.

---

## 🎮 How It Works

```javascript
// All questions stored in script.js as an array of objects
const questions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "Barlin", correct: false },
      { text: "Madrid", correct: false },
      { text: "Paris", correct: true },   // ✅ correct
      { text: "Rome", correct: false }
    ]
  },
  // more questions...
];
```

**Flow:**
```
Page loads → Question 1 shown → Player clicks answer
        ↓
Green = Correct ✅  /  Red = Wrong ❌
        ↓
Player clicks Next → Question 2 shown
        ↓
Continues until all questions are answered
```

---

## ➕ How to Add More Questions

Open `script.js` and add a new object to the `questions` array:

```javascript
{
  question: "Your new question here?",
  answers: [
    { text: "Wrong answer", correct: false },
    { text: "Correct answer", correct: true },
    { text: "Wrong answer", correct: false },
    { text: "Wrong answer", correct: false }
  ]
}
```



---
## 📸 Screenshot

<img width="2772" height="1470" alt="Image" src="https://github.com/user-attachments/assets/6710a18a-eca9-4fe2-ac8f-ba472ecb08f1" />

<img width="1601" height="1263" alt="Image" src="https://github.com/user-attachments/assets/01d4a010-8fe9-441f-9c54-4156add58cd5" />

<img width="1602" height="1003" alt="Image" src="https://github.com/user-attachments/assets/6a0c494f-e68f-407b-a87b-b41aa94673d4" />

---

---
## 📬 Contact

**Ramin Afghanyar** — Junior Front-End Developer 🇨🇭 Switzerland

[![GitHub](https://img.shields.io/badge/GitHub-afghanyarrami--bit-black?style=flat&logo=github)](https://github.com/afghanyarrami-bit)
[![Email](https://img.shields.io/badge/Email-afghanyarrami@gmail.com-red?style=flat&logo=gmail)](mailto:afghanyarrami@gmail.com)

---

## 📄 License

MIT License © 2025 Ramin Afghanyar
