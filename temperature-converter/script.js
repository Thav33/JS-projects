const kelvinValue = document.querySelector('#kelvin');
const fahrenheitValue = document.querySelector('#fahrenheit');

//function to convert kelvin to fahrenheit
const convertKelvin = () => {
  //get the value of input 'kelvin' and convert to dataType Number
  const kelvinValue = +(document.querySelector('#kelvin').value);

  //convert the value in kelvin to celcius by subtracting 273
  let celcius;
  celcius = kelvinValue - 273;
  // console.log(celcius)

  //convert to fahrenheit
  let fahrenheit;
  // fahrenheit = celcius * (9/5) + 32;
  fahrenheit = celcius * (9/5);
  fahrenheit = fahrenheit + 32;

  //convert to whole number
  fahrenheit = Math.round(fahrenheit);

  // console.log(`the temperature is ${fahrenheit} degress fahrenheit`)
  //display the input value in fahrenheit in the 'fahrenheitValue' inputBox
  fahrenheitValue.value = fahrenheit;
}
//call to function event
kelvinValue.addEventListener('input', convertKelvin)


//function to convert fahrenheit to kelvin
const convertFahrenheit = () => {
    //get the value of input 'fahrenheit' and convert to dataType Number
  const fahrenheitValue = +(document.querySelector('#fahrenheit').value);

  let celcius;
  celcius = fahrenheitValue - 32;

  let kelvin;
  // kelvin = celcius * (9/5) + 273;
  kelvin = celcius * 5;
  kelvin = kelvin / 9;
  kelvin = kelvin + 273;

  //convert decimal to whole number
  kelvin = Math.round(kelvin)

  //display the input value in kelvin in the 'kelvinValue' inputBox
  kelvinValue.value = kelvin

}
//call to function event
fahrenheitValue.addEventListener('input', convertFahrenheit)