const btnDigit = document.querySelectorAll("button.digit");
const btnOperator = document.querySelectorAll("button.operator");
const btnEqual = document.querySelector("#eq");
const screen = document.querySelector(".screen");
const btnClear = document.querySelector("#clear");
const btnFloat = document.querySelector("#dot");
const btnDelete = document.querySelector(".delete");

const displayContent = [];
let memory;
let operand;
let operatorInput;
let memoryClear = true;
let operatorPressed = false;
let equalPressed = false;

function add(a,b) {return a + b};
function substract(a,b) {return a - b};
function multiply(a,b) {return a * b};
function divide(a,b) {return a / b};

function roundNumber(num) {
    
}

function operate(a, operator, b) {
    switch (operator) {
        case "add": return add(+a, +b);
        case "sub": return substract(+a, +b);
        case "mul": return multiply(+a, +b);
        case "div": 
        if (+b === 0) { return "eRROR"
            // switch (Math.floor(Math.random()*4)) {
            //     case "1": return "That's not allowed";
            //     case "2": return "Please don't do that";
            //     case "3": return "STOP it now!";
            //     case "4": return "What the hell did you spect...";
            // }
        } else {return divide(+a, +b)}
    }
}

function displayClear() {
    screen.innerText = "";
    displayContent.splice(0);
}

function display(input) {    
    displayContent.push(input);
    screen.innerText = displayContent.join("");
}

btnDigit.forEach((digit) => {
    digit.addEventListener("click", () => {
            if (equalPressed) {memory = null}
            displayContent.push(digit.id.slice(3,4));
            screen.innerText = displayContent.join("");
            operand = displayContent.join("");
            operatorPressed = false;
            equalPressed = false;
console.clear()
console.log([memory,operand])
console.log(displayContent)
    })
})

btnOperator.forEach((operator) => {
    operator.addEventListener("click", () => {
        if (memory && !operatorPressed) {
            displayClear();
            display(operate(memory, operatorInput, operand));
        }
        if (!operatorPressed) {
            memory = displayContent.join("");
            operatorPressed = true;
        }
        displayContent.splice(0);
        operatorInput = operator.id;
        equalPressed = false;
console.clear()
console.log([memory,operand])
console.log(displayContent)
    })
})

btnEqual.addEventListener("click", () => {
    displayClear();
    display(operate(memory, operatorInput, operand));
    memory = displayContent.join("");
    operatorPressed = true;
    displayContent.splice(0);
    equalPressed = true;
console.clear()
console.log([memory,operand])
console.log(displayContent)
})

btnClear.addEventListener("click", () => {
    displayClear();
    memory = null;
    operand = null;
    operatorInput = "";
    activeOperator = false;
    memoryClear = true;
})

btnFloat.addEventListener("click", () => {
    if (!displayContent.includes(".")) {
        display(".");
    }
})

btnDelete.addEventListener("click", () => {
    if (!operatorPressed) {
        displayContent.pop();
        screen.innerText = displayContent.join("");
        operand = displayContent.join("");
    }
console.clear()
console.log([memory,operand])
console.log(displayContent)
})
