// Create a calculator that can add, substract, multiply and divide
// Clicking on a number should display the number on the display
// If another number is clicked then the concatenation of those numbers should be displayed

/*
  EXAMPLE:

  user clicks number 2 - DISPLAY: 2
  user clicks number 3 - DISPLAY: 23
  user clicks number 0 - DISPLAY: 230

*/

// Clicking on an operator (+ - / x) will reset the display (remember to save the number for later)
// When the display resets, then the operation should also be shown
// Clicking on further number will start displaying the numbers in the display again, concatenated after each other

/*
  EXAMPLE:

  user clicks number 2 - DISPLAY: 2
  user clicks number 3 - DISPLAY: 23
  user clicks number 0 - DISPLAY: 230

  user clicks operator + - Display +

  user clicks number 3 - DISPLAY: +3
  user clicks number 3 - DISPLAY: +33
  user clicks number 2 - DISPLAY: +332

*/

// When the = sign is pressed the result of the operation and the two number should be displayed

const display = document.querySelector('.display');
let inputNumber = 0, addInputDot = false, calcNumber = 0, operator;
document.querySelectorAll('.key').forEach(key=>{
  key.addEventListener('click', e => {
    
    const clicked = e.target
  
    if (clicked.classList.contains('num')) {
      inputNumber = parseFloat('' + inputNumber + ((addInputDot) ? '.' : '') + clicked.innerText);
      if (clicked.innerText == '.') {
        addInputDot = true;
      }
      else {
        addInputDot = false;
      }
      display.innerText += clicked.innerText;
    }
    else if (clicked.classList.contains('ope')){
      if (operator != undefined) {
        calcNumber = calcResult(calcNumber, inputNumber, operator);
      }
      else {
        calcNumber = inputNumber;
      }
      operator = clicked.innerText
      inputNumber = 0;
      addInputDot = false;
      display.innerText += clicked.innerText;
    }
    else if (clicked.classList.contains('enter') && operator != undefined){
      display.innerText = inputNumber = calcResult(calcNumber, inputNumber, operator);
      calcNumber = 0;
      addInputDot = false;
      operator = undefined;
    }
    else if (clicked.classList.contains('clear')){
       operator = undefined;
       calcNumber = inputNumber = 0;
       addInputDot = false;
      display.innerText = '';
    }
  });
});

function calcResult (number1, number2, operator) {
  if (operator == 'x'){
    return number1 * number2
  }
  if (operator == '/'){
    return number1 / number2
  }
  if (operator == '-'){
    return number1 - number2
  }
  if (operator == '+'){
    return number1 + number2
  }
  return false;
}