// Click Event
function showMessage() {
    document.getElementById("message").innerHTML = "Button Clicked!";
}

// Hover Event
function hoverIn() {
    document.querySelector(".box").style.backgroundColor = "green";
}

function hoverOut() {
    document.querySelector(".box").style.backgroundColor = "lightblue";
}

// Input Event
function displayName() {
    let name = document.getElementById("nameInput").value;
    document.getElementById("output").innerHTML = "Hello " + name;
}

// Double Click Event
function changeBackground() {
    document.body.style.background = "lightgray";
}