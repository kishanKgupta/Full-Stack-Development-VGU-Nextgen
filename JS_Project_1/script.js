document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let isValid = true;

    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let gender = document.getElementById("gender").value;

    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";
    document.getElementById("mobileError").innerHTML = "";
    document.getElementById("genderError").innerHTML = "";
    document.getElementById("successMessage").innerHTML = "";

    if (name === "") {
        document.getElementById("nameError").innerHTML = "Name is required";
        isValid = false;
    }

    if (email === "") {
        document.getElementById("emailError").innerHTML = "Email is required";
        isValid = false;
    } else if (!email.includes("@") || !email.includes(".")) {
        document.getElementById("emailError").innerHTML = "Enter a valid email";
        isValid = false;
    }

    if (password === "") {
        document.getElementById("passwordError").innerHTML = "Password is required";
        isValid = false;
    } else if (password.length < 6) {
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    }

    if (mobile === "") {
        document.getElementById("mobileError").innerHTML = "Mobile number is required";
        isValid = false;
    } else if (mobile.length !== 10 || isNaN(mobile)) {
        document.getElementById("mobileError").innerHTML = "Enter a valid 10-digit mobile number";
        isValid = false;
    }

    if (gender === "") {
        document.getElementById("genderError").innerHTML = "Please select gender";
        isValid = false;
    }

    if (isValid) {
        document.getElementById("successMessage").innerHTML = "Form submitted successfully!";
        document.getElementById("registrationForm").reset();
    }
});