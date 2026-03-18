// Console message 1: Page loaded
console.log("✅ Portfolio page loaded successfully!");

// Variable declarations
const portfolioOwner = "Ahmed Abdelhamid";
let currentYear = 2026;

// Console message 2: Welcome message
console.log(`Welcome to ${portfolioOwner}'s portfolio - ${currentYear}`);

// State variables
let isDarkMode = false;
let clickCount = 0;

// Function 1: Toggle Theme
function toggleTheme() {
    isDarkMode = !isDarkMode;

    const body = document.body;
    const themeButton = document.getElementById('themeToggle');

    body.classList.toggle('dark-mode');

    if (isDarkMode) {
        themeButton.textContent = '☀️ Light Mode';
        console.log("🌙 Dark mode activated");
    } else {
        themeButton.textContent = '🌙 Dark Mode';
        console.log("☀️ Light mode activated");
    }

    console.log(`Current theme: ${isDarkMode ? 'Dark' : 'Light'}`);
}

// Function 2: Increment Click Counter
function incrementCounter() {
    clickCount++;

    const counterButton = document.getElementById('clickCounter');

    counterButton.textContent = `Click Me! (Count: ${clickCount})`;

    console.log(`🖱️ Button clicked! Total clicks: ${clickCount}`);

    if (clickCount === 5) {
        console.log("🎉 Wow! You've clicked 5 times!");
    } else if (clickCount === 10) {
        console.log("🚀 Amazing! 10 clicks reached!");
    } else if (clickCount === 20) {
        console.log("💯 You're unstoppable! 20 clicks!");
    }
}

// Event Listeners
document.addEventListener('DOMConten