function appendToDisplay(value) {
    document.getElementById("display").value += value;
}

function calculate() {
    const display = document.getElementById("display");
    try {
        display.value = eval(display.value); // Caution: eval can be dangerous if used improperly
    } catch (error) {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}

function deleteLast() {
    const display = document.getElementById("display");
    display.value = display.value.slice(0, -1); // Remove the last character
}

// document.addEventListener('keydown', function(event) {
//     const key = event.key;
//     if ('0123456789+-*/.'.includes(key)) {
//         appendToDisplay(key);
//     } else if (key === 'Enter') {
//         calculate();
//     } else if (key === 'Backspace') {
//         deleteLast();
//     } else if (key === 'Escape') {
//         clearDisplay();
//     }
// });