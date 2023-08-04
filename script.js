let display = document.getElementById("display");
let currentExpression = "";

function appendToDisplay(value) {
    currentExpression += value;
    display.value = currentExpression;
    console.log("display value:"+display.value);
    console.log(currentExpression);
}

function clearDisplay() {
    currentExpression = "";
    display.value = "";
}

function calculateResult() {
    try {
        let result = eval(currentExpression);
        console.log("ans" + result);
        display.value = result;
        currentExpression = result.toString();
    } catch (error) {
        display.value = "Error";
    }
}
