function getMessage() {
    document.getElementById("loading").textContent = "Loading...";
    fetch("http://localhost:3000/api/message")
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").textContent = "";
            document.getElementById("message").innerText = data.message;
            document.getElementById("course").innerText = data.course;
            document.getElementById("year").innerText = data.year;
        })
        .catch(error => {
            document.getElementById("loading").textContent = "Error: " + error.message;
        });
}

function getStudent() {
    document.getElementById("loading").textContent = "Loading...";
    fetch("http://localhost:3000/api/student")
        .then(response => response.json())
        .then(data => {
            document.getElementById("loading").textContent = "";
            document.getElementById("studentName").innerText = data.name;
            document.getElementById("studentRole").innerText = data.role;
        })
        .catch(error => {
            document.getElementById("loading").textContent = "Error: " + error.message;
        });
}
