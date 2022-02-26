const btn = document.querySelector('#inputBtn');
const displayText = document.querySelector('#placeToSee');
const displayImg = document.querySelector('#imageToSee');

const checkDay = () => {
  //get a hold of the value in the input form
  const day = document.querySelector('#pickDay').value;

  //conditions
  //if input form is empty, alert message.
  if(day === '') {

    alert('INPUT CAN\'T BE EMPTY!')
  }

  //if input for says tuesday or thursday, display text and image.
  else if(day === 'tuesday' || day === 'thursday') {
  
    document.querySelector('#placeToSee').innerHTML = `${day} is CLASSSSS DAY!`

  } else if(day === 'saturday' || day === 'sunday') {
  
    document.querySelector('#placeToSee').innerHTML = `${day} is WEEKENDDDDDD!`
  
  } else if(day === 'friday') {
    document.querySelector('#placeToSee').innerHTML = `TURN UP ${day}!`
  }
   else{
  
    document.querySelector('#placeToSee').innerHTML = `${day} is BORINGGGGG!`
  
  }

}

btn.addEventListener('click', checkDay);