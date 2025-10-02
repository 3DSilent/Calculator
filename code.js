const btnDigit = document.querySelectorAll("button.digit");
const btnOperator = document.querySelectorAll("button.operator");
const btnEqual = document.querySelector("#eq");
const screen = document.querySelector(".screen");
const btnClear = document.querySelector("#clear");

const displayContent = [];
let a;
let b;
let operatorInput;
let activeOperator = false;

function add(a,b) {return a + b};
function substract(a,b) {return a - b};
function multiply(a,b) {return a * b};
function divide(a,b) {return a / b};

function operate(a, operator, b) {
    switch (operator) {
        case "add": return add(+a, +b);
        case "sub": return substract(+a, +b);
        case "mul": return multiply(+a, +b);
        case "div": return divide(+a, +b);
    }
}

function displayClear() {
    displayContent.splice(0);
    screen.innerText = "";
}

function display(input) {    
    displayContent.push(input);
    screen.innerText = displayContent.join("");
    console.log(displayContent);
}

btnDigit.forEach((digit) => {
    digit.addEventListener("click", () => {
        if (activeOperator === false) {
            display(digit.id.slice(3,4));
        } else {
            activeOperator = false;
            displayClear();
            display(digit.id.slice(3,4));
        }
    });
});

btnOperator.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (activeOperator === false) {
            activeOperator = true;
            a = displayContent.join("");
            operatorInput = operator.id;
        } else {
            b = displayContent.join("");
            operatorInput = operator.id;
        }
    });
});

btnEqual.addEventListener("click", () => {
    if (activeOperator === false) {
        b = displayContent.join("");
        activeOperator = true;
        displayClear();
        display(operate(a, operatorInput, b));
    } else {
        a = displayContent.join("");
        displayClear();
        display(operate(a, operatorInput, b));
    }
});

btnClear.addEventListener("click", () => {
    displayClear();
    a = "";
    b = "";
    operatorInput = "";
    activeOperator = false;
})

