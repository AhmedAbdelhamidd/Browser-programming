const output = document.getElementById("output");
const statusText = document.getElementById("status");

function log(message) {
    output.textContent += message + "\n";
}

function clearOutput() {
    output.textContent = "";
}

function setStatus(text) {
    statusText.textContent = "Status: " + text;
}

// ===================== PART B — TIMEOUT =====================
document.getElementById("btnTimeout").onclick = function () {
    clearOutput();
    log("Start");

    setTimeout(function () {
        log("Timeout finished after 500ms");
    }, 500);

    log("End");
};

// ===================== PART C — PROMISE =====================
function waitOneSecond() {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve("Promise resolved after 1 second!");
        }, 2000);
    });
}

document.getElementById("btnPromise").onclick = function () {
    clearOutput();
    setStatus("Waiting (Promise)...");

    waitOneSecond().then(function (result) {
        log(result);
        setStatus("Idle");
    });
};

// ===================== PART D — ASYNC/AWAIT =====================
async function runAwaitExample() {
    clearOutput();
    setStatus("Please wait, async/await running...");

    log("Before await");
    const result = await waitOneSecond();
    log("After await");

    log(result);
    setStatus("Idle");
}

document.getElementById("btnAwait").onclick = runAwaitExample;

// ===================== PART E — FETCH =====================
async function runFetchExample() {
    clearOutput();
    setStatus("Loading from API...");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/todos/1"
        );

        if (!response.ok) {
            throw new Error("HTTP Error: " + response.status);
        }

        const data = await response.json();

        log("ID: " + data.id);
        log("Title: " + data.title);

    } catch (error) {
        log("Error: " + error.message);

    } finally {
        setStatus("Idle");
    }
}

document.getElementById("btnFetch").onclick = runFetchExample;