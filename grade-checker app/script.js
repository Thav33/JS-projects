const inputBtn = document.querySelector('#Btn');
const gradeOutput = document.querySelector('.output');

const checkGrade = () => {
  const inputName = document.querySelector('.inputName').value;

  //convert form inpurt to datatype 'Number'
  const inputGrade = +(document.querySelector('.inputGrade')).value;

  //form verification

  // let err = true;
  if(inputName === '') { 
    document.querySelector('.err').innerHTML = (`Name can't be empty`);
    return false;
  } else {
    document.querySelector('.err').innerHTML = ''; 
  } 
  
  if(inputGrade === '') { 
    document.querySelector('.err').innerHTML = (`Grade can't be empty`);
    return false;
  } else {
    document.querySelector('.err').innerHTML = ''; 
  }

  if(inputName && (inputGrade >= 75) && (inputGrade <= 100) ){

    console.log(`Hello ${inputName}, You got A!`)
    document.querySelector('.output').innerHTML = (`Hello ${inputName}, you Got A! `)
  
  } else if(inputName && (inputGrade < 75) && (inputGrade >= 60) ) {
  
    console.log(`Hello ${inputName}, you Got B `)
    document.querySelector('.output').innerHTML = (`Hello ${inputName}, you Got B! `)
  
  } else if(inputName && (inputGrade < 60 && inputGrade >= 50)) {
  
    console.log(`Hello ${inputName}, you Got C `)
    document.querySelector('.output').innerHTML = (`Hello ${inputName}, you Got C! `)
  
  } else if(inputName && (inputGrade < 50 && inputName >= 40)) {
  
    console.log(`Hello ${inputName}, you Got D `)
    document.querySelector('.output').innerHTML = (`Hello ${inputName}, you Got D! `)
  
  } else if(inputName && (inputGrade < 40 && inputGrade >= 0 && inputGrade !== '')) {

    console.log(`Hello ${inputName}, you Got F `)
    document.querySelector('.output').innerHTML = (`Hello ${inputName}, you Got F! `)
  
  } else{
    console.log(`Retake`)
    document.querySelector('.output').innerHTML = (`Invalid! Retake.`)
  }
}

inputBtn.addEventListener('click', checkGrade)