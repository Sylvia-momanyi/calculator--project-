console.log("JS is working");

// =====================
// VARIABLES
// =====================
let memory = 0;
let display = document.getElementById("display");
let history = document.getElementById("history");

// =====================
// INPUT FUNCTIONS
// =====================
function press(value) {
    display.value += value;

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function clearDisplay() {
    display.value = "";

    if (navigator.vibrate) {
        navigator.vibrate(80);
    }
}

function backspace() {
    display.value = display.value.slice(0, -1);

    if (navigator.vibrate) {
        navigator.vibrate(30);
    }
}

// =====================
// CALCULATION FUNCTION
// =====================
function calculate() {
    try {
        let expression = display.value;

        // Convert scientific functions into JavaScript math
        expression = expression
            .replace(/sin/g, "Math.sin")
            .replace(/cos/g, "Math.cos")
            .replace(/tan/g, "Math.tan")
            .replace(/sqrt/g, "Math.sqrt")
            .replace(/log/g, "Math.log10")
            .replace(/ln/g, "Math.log");

        let result = eval(expression);

        history.innerHTML =
            display.value + " = " + result + "<br>" + history.innerHTML;

        display.value = result;

    } catch {
        display.value = "Error";
    }
}

// =====================
// HISTORY FUNCTION
// =====================
function clearHistory() {
    history.innerHTML = "";

    if (navigator.vibrate) {
        navigator.vibrate(80);
    }
}

// =====================
// MEMORY FUNCTIONS
// =====================
function memoryAdd() {
    memory += Number(display.value);

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function memorySubtract() {
    memory -= Number(display.value);

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function memoryRecall() {
    display.value = memory;

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

function memoryClear() {
    memory = 0;

    if (navigator.vibrate) {
        navigator.vibrate(80);
    }
}

document.addEventListener("keydown", function(event) {
    let key = event.key;

    // Numbers and operators
    if (!isNaN(key) || "+-*/.".includes(key)) {
        press(key);
    }

    // Enter = calculate
    if (key === "Enter") {
        calculate();
    }

    // Backspace = delete last character
    if (key === "Backspace") {
        backspace();
    }

    // Escape = clear display
    if (key === "Escape") {
        clearDisplay();
    }
});
