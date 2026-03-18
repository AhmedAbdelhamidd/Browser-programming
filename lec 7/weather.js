// Console message: Page loaded
console.log("✅ Weather page loaded successfully!");

// DOM references
const cityText        = document.getElementById("city");
const temperatureText = document.getElementById("temperature");
const windText        = document.getElementById("wind");
const output          = document.getElementById("output");

// State
let isDarkMode = false;

// Function: log to output box
function log(message) {
    output.textContent += message + "\n";
}

// Function: clear output box
function clearOutput() {
    output.textContent = "";
}

// Function: Toggle Theme
function toggleTheme() {
    isDarkMode = !isDarkMode;
    document.body.classList.toggle("dark-mode");
    const btn = document.getElementById("themeToggle");
    if (isDarkMode) {
        btn.textContent = "☀️ Light Mode";
        console.log("🌙 Dark mode activated");
    } else {
        btn.textContent = "🌙 Dark Mode";
        console.log("☀️ Light mode activated");
    }
    console.log(`Current theme: ${isDarkMode ? "Dark" : "Light"}`);
}

// Function: Fetch weather from Open-Meteo API
async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput();
    log("Loading weather for " + cityName + "...");

    try {
        const url =
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,wind_speed_10m";

        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        const temperature = data.current.temperature_2m;
        const wind        = data.current.wind_speed_10m;

        cityText.textContent        = cityName;
        temperatureText.textContent = temperature + " °C";
        windText.textContent        = wind + " km/h";

        clearOutput();
        log("City: "        + cityName);
        log("Temperature: " + temperature + " °C");
        log("Wind Speed: "  + wind + " km/h");

        console.log("🌤️ Weather loaded for " + cityName);

    } catch (error) {
        clearOutput();
        log("Error: " + error.message);
        console.log("❌ Error: " + error.message);
    }
}

// Event Listeners
document.addEventListener("DOMContentLoaded", function () {
    console.log("✅ Weather page DOM ready");

    document.getElementById("themeToggle").addEventListener("click", toggleTheme);

    document.getElementById("btnKuopio").addEventListener("click", function () {
        loadWeatherByCity("Kuopio", 62.8924, 27.6770);
    });
});
