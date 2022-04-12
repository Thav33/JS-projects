"use strict"
const startBtn = document.querySelector('.start-btn');
const infoBox = document.querySelector('.info_box');
const exitBtn = document.querySelector('.quit');
const proceedBtn = document.querySelector('.proceed');
const quizBox = document.querySelector('.quiz-box');

//function to start quiz when start button is clicked
const start_Btn = () => {
  quizBox.classList.add('activeQuiz')
  showQuestions(0)
}
//when start button is clicked, run the function
startBtn.addEventListener('click', start_Btn)

//display questions and options from array-object
const showQuestions = (index) => {
  //get a hold of the question and option text div
  let question_list = document.querySelector('.question_text');
  let option_list = document.querySelector('.option_list');


  //create a new span for question and pass the value using array index
  let question_tag = `<span> ${questions[index].number}. ${questions[index].question} </span>`;

  //create a new div for options and pass the value using array index
  let option_tag = `<div class='option'><span> ${questions[index].options[0]} </span></div>` +
  `<div class='option'><span> ${questions[index].options[1]} </span></div>` +
  `<div class='option'><span> ${questions[index].options[2]} </span></div>` +
  `<div class='option'><span> ${questions[index].options[3]} </span></div>`;

  question_list.innerHTML = question_tag;
  option_list.innerHTML = option_tag;



}
