script>
  let memory = 0;
    let display = document.getElementById("display");
    function press(value) {
    display.value += value;

    if (navigator.vibrate) {
        navigator.vibrate(50);
    }
}

    function calculate() {
    try {
        let result = eval(display.value);

        history.innerHTML = display.value + " = " + result;

        display.value = result;

    } catch {
        display.value = "Error";
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

function clearHistory() {
    history.innerHTML = "";
    if (navigator.vibrate) navigator.vibrate(80);
}
let history = document.getElementById("history");
function memoryAdd() {
    memory += Number(display.value);
    if (navigator.vibrate) navigator.vibrate(50);
}
function memorySubtract() {
    memory -= Number(display.value);
    memory -= Number(display.value);
    if (navigator.vibrate) navigator.vibrate(50);
}
function memoryRecall() {
    display.value = memory;
    if (navigator.vibrate) navigator.vibrate(50);
}
function memoryClear() {
    memory = 0;
    if (navigator.vibrate) navigator.vibrate(80);
}
function calculate() {
    try {
        let expression = display.value;

        // convert readable math into JavaScript math
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

</script>
