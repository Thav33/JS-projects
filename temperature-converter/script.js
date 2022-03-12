const kelvinValue = document.querySelector('#kelvin');
const fahrenheitValue = document.querySelector('#fahrenheit');

const convertKelvin = () => {
  //get the value of input 'kelvin' and convert to dataType Number
  const kelvinValue = +(document.querySelector('#kelvin').value);
alert (typeof kelvinValue)
  //convert the value in kelvin to celcius by subtracting 273
  let celcius;
  celcius = kelvinValue - 273;
  // console.log(celcius)

  //convert to fahrenheit
  let fahrenheit;
  fahrenheit = celcius * (9/5) + 32;

  //convert decimals to whole number
  fahrenheit = Math.floor(fahrenheit);

  // console.log(`the temperature is ${fahrenheit} degress fahrenheit`)
  //display the value in fahrenheit in the 'fahrenheitValue' inputBox
  fahrenheitValue.value = fahrenheit;
} 

kelvinValue.addEventListener('input', convertKelvin)