const btn = document.querySelector('#inputBtn');
const displayText = document.querySelector('#placeToSee');
const displayImg = document.querySelector('#imageToSee');

const checkDay = () => {
  //get a hold of the value in the input form
  let day = document.querySelector('#pickDay').value;
  day = day.toLowerCase();

  //conditions
  //if input form is empty, alert message.
  if(day === '') {

    alert('INPUT CAN\'T BE EMPTY!')
  }

  //if input for says tuesday or thursday, display text and image
  else if(day === 'tuesday' || day === 'thursday') {
  
    document.querySelector('#placeToSee').innerHTML = `${day} is CLASSSSS DAY!`;
    document.querySelector('#imageToSee').innerHTML = ` <img src='./img/gif_1.gif'> `;
    
  //if input form says saturday or sunday, display text and image
  } else if(day === 'saturday' || day === 'sunday') {
  
    document.querySelector('#placeToSee').innerHTML = `${day} is WEEKENDDDDDD!`;
    document.querySelector('#imageToSee').innerHTML = ` <img src='./img/gif_2.gif'> `;
  
    //if input form says friday, display text and image
  } else if(day === 'friday') {
    document.querySelector('#placeToSee').innerHTML = `TURN UP ${day}!`;
    document.querySelector('#imageToSee').innerHTML = ` <img src='./img/gif_4.gif'> `;
  }
   else{

     //if the above conditions are not met, display the text and image below
    document.querySelector('#placeToSee').innerHTML = `${day} is BORINGGGGG!`;
    document.querySelector('#imageToSee').innerHTML = ` <img src='./img/gif_3.gif'> `;
  
  }

}
//a call to the function
btn.addEventListener('click', checkDay);