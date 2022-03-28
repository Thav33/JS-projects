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
  num1 = num1 + '2';
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
  

  // if(operator === '+') {
  //   finalScoreScreen.innerText = +(num1) + +(num2);
  // } else if(operator === '*') {
  //   finalScoreScreen.innerText = +(num1) * +(num2);
  // } else if(operator === '-') {
  //   finalScoreScreen.innerText = +(num1) - +(num2);
  // } else {
  //   finalScoreScreen.innerText = +(num1) / +(num2);
  // }
}

//function to display whatever button is clicked
const display = () => {
  equationExpression = num1 + operator + num2
  expressionScreen.innerText = equationExpression;
}



calculatorDiv.addEventListener('click', display);
btnOne.addEventListener('click', one);
btnTwo.addEventListener('click', two);
btnPlus.addEventListener('click', add);
btnTimes.addEventListener('click', multiply);
btnMinus.addEventListener('click', subtract);
btnDivide.addEventListener('click', divide);
btnEqualSign.addEventListener('click', equal);
btnClear.addEventListener('click', clearCalculator)

