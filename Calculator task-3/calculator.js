
const inputValue = document.getElementById("user-input");

function clearScreen() {
    inputValue.value = "";
}

function display(value) {
    inputValue.value += value;
}

function calculate() {
    var p = inputValue.value;
    var q = eval(p);
    inputValue.value = q;
}

function deleteLastValue() {
    inputValue.value = inputValue.value.slice(0,-1);
    
}