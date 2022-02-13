"use strict";

const count = document.querySelector('.count');

const incrementBtn = document.querySelector('.increment');

const resetBtn = document.querySelector('.reset');

const decrementBtn = document.querySelector('.decrement');

const paragraphDiv = document.querySelector('.paragraph');

const removeCount = document.querySelector('.remove');

//increment function
  incrementBtn.addEventListener('click', (e) => {
    // console.log('code is working...');

      //'count' increments when btn is clicked
    count.innerHTML++;
      //btn background changes to color green when clicked
    incrementBtn.id = 'increment-color-btn';
    setColor();

    paragraphDiv.append(`${count.innerHTML}, `);
    });

  //decrement function
  decrementBtn.addEventListener('click', (e) => {
    console.log('decrement working...');
       //'count' increments when btn is clicked
    count.innerHTML--;
      //btn background changes to color red when clicked
    decrementBtn.id = 'decrement-color-btn'
    setColor();

    paragraphDiv.append(`${count.innerHTML},`);

  })

  //reset functin
  resetBtn.addEventListener('click', (e) => {
       //'count' resets to 0 when btn is clicked
    count.innerHTML = 0;
    paragraphDiv.append(count.innerHTML);
    
  })

  removeCount.addEventListener('click', (e) => {
    count.remove();
  } )

  //function to add color to 'count' based on conditions
 
  const setColor = () => {
    if(count.innerHTML > 0) {
      count.style.color = 'green';
    } else if(count.innerHTML < 0) {
      count.style.color = 'red';
    } else {
      count.style.color = 'white';
    }
  }
  setColor();

  