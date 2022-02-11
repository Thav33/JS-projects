"use strict";

const counterDiv = document.querySelector('.counter-div');

const count = document.querySelector('.count');

const incrementBtn = document.querySelector('.increment');

const resetBtn = document.querySelector('.reset');

const decrementBtn = document.querySelector('.decrement');

//increment function
  incrementBtn.addEventListener('click', (e) => {
    // console.log('code is working...');

      //'count' increments when btn is clicked
    count.innerHTML++;
      //btn background changes to color green when clicked
    incrementBtn.id = 'increment-color-btn';
  });

  //decrement function
  decrementBtn.addEventListener('click', (e) => {
    console.log('decrement working...');
       //'count' increments when btn is clicked
    count.innerHTML--;
      //btn background changes to color red when clicked
    decrementBtn.id = 'decrement-color-btn'
  })

  //reset function
  resetBtn.addEventListener('click', (e) => {
       //'count' resets to 0 when btn is clicked
    count.innerHTML = 0;
  })