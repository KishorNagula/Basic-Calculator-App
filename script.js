const display = document.getElementById("display");


function appendValue(val) {
    display.value += val;
}


function clearDisplay() {
    display.value = "";
}


function deleteLast() {
    display.value = display.value.slice(0, -1);
}


function calculate() {
    try {
        // Evaluate using JavaScript
        let result = eval(display.value);


        if (!isFinite(result)) {
            display.value = "Error";
        } else {
            display.value = result;
        }
    } catch {
        display.value = "Error";
    }
}


// Enable keyboard input
document.addEventListener("keydown", (event) => {
    if (!isNaN(event.key) || "+-*/.".includes(event.key)) {
        appendValue(event.key);
    } else if (event.key === "Enter") {
        calculate();
    } else if (event.key === "Backspace") {
        deleteLast();
    } else if (event.key.toLowerCase() === "c") {
        clearDisplay();
    }
});