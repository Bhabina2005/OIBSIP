// ==========================================
// Get HTML Elements
// ==========================================

const loginForm = document.getElementById("loginForm");
const registerForm = document.getElementById("registerForm");

const showRegister = document.getElementById("showRegister");
const showLogin = document.getElementById("showLogin");

const loginBtn = document.getElementById("loginBtn");
const registerBtn = document.getElementById("registerBtn");

const message = document.getElementById("message");

// ==========================================
// Switch Between Login & Register
// ==========================================

showRegister.addEventListener("click", function () {

    loginForm.classList.add("hidden");
    registerForm.classList.remove("hidden");

    message.textContent = "";

});

showLogin.addEventListener("click", function () {

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

    message.textContent = "";

});

// ==========================================
// Register User
// ==========================================

registerBtn.addEventListener("click", function () {

    const name = document.getElementById("registerName").value.trim();
    const email = document.getElementById("registerEmail").value.trim();
    const password = document.getElementById("registerPassword").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    // Validation

    if (name === "" || email === "" || password === "" || confirmPassword === "") {

        message.style.color = "yellow";
        message.textContent = "Please fill all fields.";
        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        message.style.color = "yellow";
        message.textContent = "Please enter a valid email.";
        return;

    }

    if (password.length < 6) {

        message.style.color = "yellow";
        message.textContent = "Password should contain at least 6 characters.";
        return;

    }

    if (password !== confirmPassword) {

        message.style.color = "yellow";
        message.textContent = "Passwords do not match.";
        return;

    }

    // Check if already registered

    const existingUser = JSON.parse(localStorage.getItem("user"));

    if (existingUser && existingUser.email === email) {

        message.style.color = "orange";
        message.textContent = "User already registered.";
        return;

    }

    // Save User

    const user = {

        name: name,
        email: email,
        password: password

    };

    localStorage.setItem("user", JSON.stringify(user));

    message.style.color = "lightgreen";
    message.textContent = "Registration Successful! Please Login.";

    // Clear Register Form

    document.getElementById("registerName").value = "";
    document.getElementById("registerEmail").value = "";
    document.getElementById("registerPassword").value = "";
    document.getElementById("confirmPassword").value = "";

    registerForm.classList.add("hidden");
    loginForm.classList.remove("hidden");

});

// ==========================================
// Login User
// ==========================================

loginBtn.addEventListener("click", function () {

    const email = document.getElementById("loginEmail").value.trim();
    const password = document.getElementById("loginPassword").value;

    const savedUser = JSON.parse(localStorage.getItem("user"));

    if (!savedUser) {

        message.style.color = "yellow";
        message.textContent = "No registered user found.";
        return;

    }

    if (email === savedUser.email && password === savedUser.password) {

        message.style.color = "lightgreen";

        message.innerHTML = `
            <strong>Login Successful!</strong><br>
            Welcome, ${savedUser.name} 🎉
            <br><br>
            <button id="logoutBtn">Logout</button>
        `;

        document.getElementById("loginEmail").value = "";
        document.getElementById("loginPassword").value = "";

        document.getElementById("logoutBtn").addEventListener("click", function () {

            message.style.color = "white";
            message.textContent = "Logged out successfully.";

        });

    }

    else {

        message.style.color = "red";
        message.textContent = "Invalid Email or Password.";

    }

});

// ==========================================
// Show / Hide Password
// ==========================================

function togglePassword(inputId, iconId) {

    const input = document.getElementById(inputId);
    const icon = document.getElementById(iconId);

    icon.addEventListener("click", function () {

        if (input.type === "password") {

            input.type = "text";
            icon.textContent = "🙈";

        }

        else {

            input.type = "password";
            icon.textContent = "👁️";

        }

    });

}

togglePassword("loginPassword", "toggleLoginPassword");
togglePassword("registerPassword", "toggleRegisterPassword");
togglePassword("confirmPassword", "toggleConfirmPassword");