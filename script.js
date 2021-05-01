const buttonValue = document.querySelectorAll("button")
const screenValue = document.querySelector("#number");
let isOperator;
let isdot;
let isNumber;
screenValue.value = '0';
function refreshCalculator() {
    isOperator = true;
    isdot = false;
    isNumber = true;
    screenValue.value = "0"
}
refreshCalculator();
buttonValue.forEach(element => {
    element.addEventListener('click', e => {


        let buttonText = e.target.innerText;

        if (buttonText === "C") {
            refreshCalculator();
        }
        else if (buttonText === '.' && !isdot) {
            screenValue.value += buttonText;
            isdot = true;
        }

        else if (buttonText === '+' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
            }
            else {
                screenValue.value = buttonText;
            }
            isOperator = false;
            isNumber = true;
            isdot = false;

        }
        else if (buttonText === '-' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
            }
            else {
                screenValue.value = buttonText;
            }
            isOperator = false;
            isNumber = true;
            isdot = false;
        }
        else if (buttonText === '*' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
                isOperator = false;
                isNumber = true;
                isdot = false;
            }

        }
        else if (buttonText === '/' && isOperator) {
            if (screenValue.value != '0') {
                screenValue.value += buttonText;
                isOperator = false;
                isNumber = true;
                isdot = false;
            }

        }
       
        else if (buttonText >= '0' && buttonText <= 9 && isNumber) {
            if (buttonText === '0' && screenValue.value === '0') {
                isNumber = true;
            }
            else if (screenValue.value === '0') {
                screenValue.value = buttonText;
            }
            else {
                screenValue.value += buttonText;
            }
            isOperator = true;
        }
        else if (buttonText === '=') {
            screenValue.value = eval(screenValue.value)

            isNumber = false;
        }

    })







});