// DOM references
const output = document.getElementById("output")
const list   = document.getElementById("userList")

// Function: log to output box
function log(text){
    output.textContent += text + "\n"
}

// Function: clear output
function clearOutput(){
    output.textContent = ""
}

// Button click triggers loadUsers
document.getElementById("btnLoadUsers").onclick = loadUsers

// Async function: fetch users from API
async function loadUsers(){
    clearOutput()
    list.innerHTML = ""

    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users")

        if(!response.ok){
            throw new Error("HTTP error: " + response.status)
        }

        const data = await response.json()

        console.log(data)

        // Part B: loop through users and print Name, Email, City
        data.forEach(function(user){
            const name  = user.name
            const email = user.email
            const city  = user.address.city

            // Print to console
            console.log(name + " - " + email + " - " + city)

            // Print to output box
            log(name + " - " + email + " - " + city)

            // Part E: display in webpage as list items
            const li = document.createElement("li")
            li.textContent = name + " - " + email + " - " + city
            list.appendChild(li)
        })

    } catch(error){
        log("Error: " + error.message)
        console.log("Error: " + error.message)
    }
}
