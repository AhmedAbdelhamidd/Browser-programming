# Lecture 04 – JavaScript Basics

## Features Implemented

### Feature 1: Theme Toggle (Dark/Light Mode)
- Click the **"🌙 Dark Mode"** button in the header
- The entire page switches between light and dark themes
- Button text changes to **"☀️ Light Mode"** when dark mode is active
- Check the browser console to see theme change messages

### Feature 2: Click Counter
- Click the green **"Click Me!"** button in the Portfolio section
- The button displays the current click count
- Every click is logged to the console
- Special milestone messages appear at 5, 10, and 20 clicks

## How to Test

1. **Open the page** in your browser
2. **Open Developer Tools** (F12 or Right-click → Inspect)
3. **Go to Console tab** to see all the log messages
4. **Click the "Dark Mode" button** → Watch the theme change + console logs
5. **Click the "Click Me!" button** multiple times → See the counter update + console logs

## JavaScript Requirements Met

✅ **Console + Variables**
- 3+ console.log() messages (page load, theme change, click events)
- 2+ variables used (portfolioOwner, currentYear, isDarkMode, clickCount)

✅ **Functions**
- toggleTheme() - Switches between light/dark mode
- incrementCounter() - Increases click count and updates UI

✅ **Events**
- Theme toggle button click event
- Click counter button click event

✅ **State**
- isDarkMode - Tracks current theme state
- clickCount - Tracks number of button clicks

## Files Structure
```
Lecture-04-responsive/
├── index.html
├── style.css
├── script.js
└── README.md
```

**Built with:** HTML5, CSS3, Vanilla JavaScript  
**Author:** Ahmed Abdelhamid  
**Course:** Browser Programming - Lecture 04