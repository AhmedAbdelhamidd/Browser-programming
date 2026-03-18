// DOM references
const cityText        = document.getElementById("city")
const temperatureText = document.getElementById("temperature")
const windText        = document.getElementById("wind")
const timeText        = document.getElementById("time")
const output          = document.getElementById("output")

// Helper: log to output box
function log(message) {
    output.textContent += message + "\n"
}

// Helper: clear output box
function clearOutput() {
    output.textContent = ""
}

// Reusable function for any city
async function loadWeatherByCity(cityName, latitude, longitude) {
    clearOutput()

    try {
        // Part A: fetch from API
        const response = await fetch(
            "https://api.open-meteo.com/v1/forecast?latitude=" +
            latitude +
            "&longitude=" +
            longitude +
            "&current=temperature_2m,wind_speed_10m"
        )

        // Part D: check HTTP status
        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status)
        }

        // Part A: convert to JSON
        const data = await response.json()
        console.log(data)

        // Part B: read correct nested fields
        const temperature = data.current.temperature_2m
        const wind        = data.current.wind_speed_10m
        const time        = data.current.time

        // Part B: update the DOM
        cityText.textContent        = cityName
        temperatureText.textContent = temperature + " °C"
        windText.textContent        = wind + " km/h"

        // Extension Task 2: show time of data
        timeText.textContent = time

        // Part C: print to output area
        log("City: "        + cityName)
        log("Temperature: " + temperature + " °C")
        log("Wind Speed: "  + wind + " km/h")
        log("Time: "        + time)

        // Extension Task 3: change background based on temperature
        if (temperature < 0) {
            document.body.className = "cold"
        } else {
            document.body.className = "mild"
        }

    } catch (error) {
        log("Error: " + error.message)
        console.log("Error: " + error.message)
    }
}

// Button event listeners
document.getElementById("btnKuopio").onclick = function () {
    loadWeatherByCity("Kuopio", 62.8924, 27.6770)
}

document.getElementById("btnHelsinki").onclick = function () {
    loadWeatherByCity("Helsinki", 60.1699, 24.9384)
}

document.getElementById("btnOulu").onclick = function () {
    loadWeatherByCity("Oulu", 65.0121, 25.4651)
}
