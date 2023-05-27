function appendNumber(number) {
    var result = document.getElementById("result");
    result.value += number;
}

function appendOperator(operator) {
    var result = document.getElementById("result");
    var lastChar = result.value.slice(-1);
    
    // Check if the last character is an operator and replace it
    if (lastChar == "+" || lastChar == "-" || lastChar == "*" || lastChar == "/") {
        result.value = result.value.slice(0, -1) + operator;
    } else {
        result.value += operator;
    }
}

function calculate() {
    var result = document.getElementById("result");
    
    try {
        result.value = eval(result.value);
    } catch (error) {
        result.value = "Error";
    }
}

function clear() {
    var result = document.getElementById("result");
    result.value = "";
}
