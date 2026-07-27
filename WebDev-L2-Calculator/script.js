// ===========================================
// Calculator JavaScript
// Oasis Infobyte Level 2 - Task 1
// ===========================================


// Get Display
const display = document.getElementById("display");


// Get All Buttons
const buttons = document.querySelectorAll("button");


// ===========================================
// Calculate Function
// ===========================================
function calculate() {

    try {

        if (display.value === "") {
            return;
        }


        // Allow only calculator characters
        if (!/^[0-9+\-*/.]+$/.test(display.value)) {

            display.value = "Error";
            return;

        }


        let result = Function(
            "return " + display.value
        )();


        // Division by zero handling
        if (result === Infinity || isNaN(result)) {

            display.value = "Error";

        } 
        else {

            display.value = result;

        }


    } catch (error) {

        display.value = "Error";

    }

}



// ===========================================
// Button Click Support
// ===========================================

buttons.forEach(button => {


    button.addEventListener("click", () => {


        const value = button.dataset.value;



        // Clear
        if (value === "C") {

            display.value = "";

        }


        // Backspace
        else if (value === "backspace") {

            display.value =
                display.value.slice(0, -1);

        }


        // Percentage
        else if (value === "%") {


            if (display.value !== "") {

                display.value =
                    Number(display.value) / 100;

            }

        }


        // Equal
        else if (value === "=") {

            calculate();

        }


        // Decimal Handling
        else if (value === ".") {


            let currentNumber =
                display.value.split(/[+\-*/]/).pop();


            if (!currentNumber.includes(".")) {

                display.value += ".";

            }

        }


        // Operators and Numbers
        else {


            let lastCharacter =
                display.value.slice(-1);



            // Prevent multiple operators
            if (
                ["+", "-", "*", "/"].includes(lastCharacter) &&
                ["+", "-", "*", "/"].includes(value)
            ) {

                return;

            }


            display.value += value;

        }


    });


});



// ===========================================
// Keyboard Support
// ===========================================

document.addEventListener("keydown", function(event) {


    const key = event.key;



    // Numbers
    if (!isNaN(key) && key !== " ") {

        display.value += key;

    }



    // Operators
    else if (
        ["+", "-", "*", "/", "."].includes(key)
    ) {


        display.value += key;

    }



    // Enter = Calculate
    else if (key === "Enter") {

        event.preventDefault();

        calculate();

    }



    // Backspace
    else if (key === "Backspace") {

        event.preventDefault();

        display.value =
            display.value.slice(0, -1);

    }



    // Clear
    else if (key === "Escape") {

        display.value = "";

    }



    // Percentage
    else if (key === "%") {


        if (display.value !== "") {

            display.value =
                Number(display.value) / 100;

        }

    }


});