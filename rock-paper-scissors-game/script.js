let choices = ['rock', 'paper', 'scissors'];
let i = Math.floor(Math.random() * 3);
let compChoice = choices[i];
let userPoint = 0;
let compPoint = 0;

const score = () => {
  let score_div  = document.querySelector('.score');
  score_div.innerHTML = ` ${userPoint} - ${compPoint} `;
}
setInterval(score, 50);


const game = (userChoice) => {
  let box = document.querySelector('#challenge');
  box.style.display = 'inline-flex';

  let userDiv = document.querySelector('#YourObject');
  userDiv.innerHTML = userChoice;

  let compDiv = document.querySelector('#ComObject');
  compDiv.innerHTML = compChoice;
}
