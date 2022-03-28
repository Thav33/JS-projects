let total = 0; 
let num1 = ''; 
let num2 = '';
let operator = ''; 
let equationExpression = '';

//get a hold of the btn values
let displayScreen = document.querySelector('#calculatorScreen');
let calculatorDiv = document.querySelector('#click-calculator-btns')
let btnOne = document.querySelector('#one');
let btnTwo = document.querySelector('#two');
let btnPlus = document.querySelector('#plus');

const one = () => {
  //check if user hasn't press operator. if yes, value is assigned to num1
  (operator === '') ? num1 = num1 + '1' : num2 = num2 + '1';
}

const two = () => {
  num1 = num1 + '2';
}

const plus = () => {
  operator = '+';
}

//function to display whatever button is clicked
const display = () => {
  equationExpression = num1 + operator + num2
  displayScreen.innerText = equationExpression;

}

calculatorDiv.addEventListener('click', display);
btnOne.addEventListener('click', one);
btnTwo.addEventListener('click', two);
btnPlus.addEventListener('click', plus);


