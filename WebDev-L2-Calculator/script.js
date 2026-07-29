// ===========================================
// Calculator - Oasis Infobyte Level 2
// ===========================================

// Get the display element
const display = document.getElementById("display");

// Get all calculator buttons
const buttons = document.querySelectorAll("button");

// ===========================================
// Function to calculate result
// ===========================================
function calculateResult() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

// ===========================================
// Mouse Click Support
// ===========================================
buttons.forEach((button) => {

    button.addEventListener("click", () => {

        const value = button.dataset.value;

        switch (value) {

            case "C":
                display.value = "";
                break;

            case "backspace":
                display.value = display.value.slice(0, -1);
                break;

            case "%":
                if (display.value !== "") {
                    display.value = Number(display.value) / 100;
                }
                break;

            case "=":
                calculateResult();
                break;

            default:
                display.value += value;

        }

    });

});

// ===========================================
// Keyboard Support
// ===========================================
document.addEventListener("keydown", (event) => {

    const key = event.key;

    // Numbers
    if (!isNaN(key) && key !== " ") {
        display.value += key;
    }

    // Operators
    else if (["+", "-", "*", "/", "."].includes(key)) {
        display.value += key;
    }

    // Enter
    else if (key === "Enter") {
        event.preventDefault();
        calculateResult();
    }

    // Backspace
    else if (key === "Backspace") {
        event.preventDefault();
        display.value = display.value.slice(0, -1);
    }

    // Escape
    else if (key === "Escape") {
        display.value = "";
    }

    // Percentage
    else if (key === "%") {
        if (display.value !== "") {
            display.value = Number(display.value) / 100;
        }
    }

});