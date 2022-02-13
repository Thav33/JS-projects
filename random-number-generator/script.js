"use strict";

const countRandom = document.querySelector('.count');
const generateRandom = document.querySelector('.generate');

generateRandom.addEventListener('click', (e) => {
  const min = 1;
  const max = 100;
  //generate random between 1 and 100
  countRandom.innerHTML = Math.floor(Math.random() * (max - min + 1) + min)

  // countRandom.innerHTML = Math.min(1,2,3,4,0,-3,5,66,77,86,655,23);

  console.log('Generate Random number');

})