let total = 0; 
let num1 = ''; 
let num2 = '';
let operator = ''; 
let equationExpression = '';

//get a hold of the btn values and save in variable
let expressionScreen = document.querySelector('#calculatorScreen');
let finalScoreScreen = document.querySelector('#finalScoreScreen');
let calculatorDiv = document.querySelector('#click-calculator-btns')

let btnOne = document.querySelector('#one');
let btnTwo = document.querySelector('#two');
let btnThree = document.querySelector('#three');
let btnFour = document.querySelector('#four');
let btnFive = document.querySelector('#five');
let btnSix = document.querySelector('#six');
let btnSeven = document.querySelector('#seven');
let btnEight = document.querySelector('#eight');
let btnNine = document.querySelector('#nine');
let btnZero = document.querySelector('#zero');
let btnDot = document.querySelector('#decimal');

let btnPlus = document.querySelector('#plus');
let btnTimes = document.querySelector('#times');
let btnMinus = document.querySelector('#minus');
let btnDivide = document.querySelector('#divide');
let btnEqualSign = document.querySelector('#equal-sign');
let btnClear = document.querySelector('#all-clear');

//function for btn one
const one = () => {
  //check if user hasn't press operator. if yes, value is assigned to num1 else assign to num2
  (operator === '') ? num1 += '1' : num2 += '1';
}

const two = () => {
  (operator === '') ? num1 += '2' : num2 += '2';
}

const three = () => {
  (operator === '') ? num1 += '3' : num2 += '3';
}
const four = () => {
  (operator === '') ? num1 += '4' : num2 += '4';
}
const five = () => {
  (operator === '') ? num1 += '5' : num2 += '5';
}
const six = () => {
  (operator === '') ? num1 += '6' : num2 += '6';
}
const seven = () => {
  (operator === '') ? num1 += '7' : num2 += '7';
}
const eight = () => {
  (operator === '') ? num1 += '8' : num2 += '8';
}
const nine = () => {
  (operator === '') ? num1 += '9' : num2 += '9';
}
const zero = () => {
  (operator === '') ? num1 += '0' : num2 += '0';
}
const dot = () => {
  (operator === '') ? num1 += '.' : num2 += '.';
}

//functions for add sign
const add = () => {
  operator = '+';
}
//functions for multiply sign
const multiply = () => {
  operator = '*';
}
//functions for subtract sign
const subtract = () => {
  operator = '-';
}
//functions for divide sign
const divide = () => {
  operator = '/';
}

//function to check with operator btn clicked. Then perform the operation based on the operator.
const equal = () => {

  //if the + operator is clicked, perform the addition operation
  (operator === '+') ? total = +(num1) + +(num2) :
  //if the * operator is clicked, perform the multiply operation
  (operator === '*') ? total = +(num1) * +(num2) :
  //if the - operator is clicked, perform the subtraction operation
  (operator === '-') ? total = +(num1) - +(num2) :
  //if the above 3 conditions are false, perform the division operation
  total = +(num1) / +(num2);
   
  //display the given result based on the conditions.
  finalScoreScreen.innerHTML = total;
}

//function to display whatever button is clicked
const display = () => {
  equationExpression = num1 + operator + num2
  expressionScreen.innerText = equationExpression;
}

//function to clear screen
const clearCalculatorScreen = () => {

  //if user click the clear btn, all variable should return to default
  num1 = '';
  num2 = '';
  operator = '';
  total = 0;

  //update the screen to reflect the current values
  finalScoreScreen.innerHTML = total;
  // expressionScreen.innerText = ' ';
}



calculatorDiv.addEventListener('click', display);

btnOne.addEventListener('click', one);
btnTwo.addEventListener('click', two);
btnThree.addEventListener('click', three);
btnFour.addEventListener('click', four);
btnFive.addEventListener('click', five);
btnSix.addEventListener('click', six);
btnSeven.addEventListener('click', seven);
btnEight.addEventListener('click', eight);
btnNine.addEventListener('click', nine);
btnZero.addEventListener('click', zero);
btnDot.addEventListener('click', dot);

btnPlus.addEventListener('click', add);
btnTimes.addEventListener('click', multiply);
btnMinus.addEventListener('click', subtract);
btnDivide.addEventListener('click', divide);
btnEqualSign.addEventListener('click', equal);
btnClear.addEventListener('click', clearCalculatorScreen)

