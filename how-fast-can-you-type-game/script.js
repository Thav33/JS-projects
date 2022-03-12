const quotes = [
  'When you have eliminated the impossible, whatever remains, however improbable, must be the truth.',
  'There is nothing more deceptive than an obvious fact.',
  'I ought to know by this time that when a fact appears to be opposed to a long train of deductions it invariably proves to be capable of bearing some other interpretation.',
  'I never make exceptions. An exception disproves the rule.',
  'What one man can invent another can discover.',
  'Nothing clears up a case so much as stating it to another person.',
  'Education never ends, Watson. It is a series of lessons, with the greatest for the last.',
];

//store list of words
let words = [];
//index of words being typed
let worrdIndex = 0;

//startTime
let startTime = Date.now();

const quotesElem = document.querySelector('#quotes');
const displayMsg = document.querySelector('#displayMsg');
const button = document.querySelector('#btn');

const getQuote = () => {
  const typedValue = document.querySelector('#inputBox').value;

  //get a quote from the quotes array
  const quoteIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[quoteIndex];
   words = quote.split(' ');

   console.log(words)
   wordIndex = 0;

  
  // const spanWords = words.map(function(word) { return `<span>${word} </span>`});
  const spanWords = words.map(function(word) {
    return `<span>${word} </span>`;
  });

  // Convert array into string and set as innerHTML on quote display
   quotesElem.innerHTML = spanWords.join('');

  //hightlight the first word
  quotesElem.childNodes[0].className = 'highlight';

  //clear any message prior to the 'click' event
  displayMsg.innerText =  ' ';

  typedValue = ' ';
  typedValue.focus();

  //timer
  startTime = new Date().getTime();


  }

button.addEventListener('click', getQuote)