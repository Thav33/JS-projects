  let choices = ['rock', 'paper', 'scissors'];
  let i = Math.floor(Math.random() * 3);
  let compChoice = choices[i];
  let userPoint = 0;
  let compPoint = 0;

  const score = () => {
    let score_div  = document.querySelector('.score');
    score_div.innerHTML = ` ${userPoint} - ${compPoint} `;
  }
  setInterval(score, 50);

  const game = (userChoice) => {
    
    let box = document.querySelector('#challenge');
    box.style.display = 'inline-flex';

    let userDiv = document.querySelector('.userObject');
    userDiv.innerHTML = '<i class="far fa-hand-' +userChoice+ '">';

    let compDiv = document.querySelector('.compObject');
    compDiv.innerHTML = '<i class="far fa-hand-' +compChoice+ '">';

    console.log(userChoice);
    console.log(compChoice);

    if( (userChoice == "paper" && compChoice == "rock") || (userChoice == "scissors" && compChoice == "paper") || (userChoice == "rock" && compChoice == "scissors") ){
      winner();
      console.log('WINNERRR');
    } else if(userChoice == compChoice) {
      draw();
      console.log('DRAWWWWWW');
    } else {
      lose();
      console.log('LOSERRRR');
    }

    function winner(){
      userPoint++;
      const winnerStatus = document.querySelector('.result');
      winnerStatus.innerHTML = 'YOU WONNNN';
    }
    function draw(){
      const winnerStatus = document.querySelector('.result');
      winnerStatus.innerHTML = 'YOU DREW';
    }
    function lose(){
      compPoint++;
      const winnerStatus = document.querySelector('.result');
      winnerStatus.innerHTML = 'YOU LOST';
    }


  }





  //   if(userChoice === 'paper' && compChoice === 'rock' ||
  //       userChoice === 'scissors' && compChoice === 'paper' || 
  //       userChoice === 'rock' && compChoice === 'scissors') {
          
  //         winner();

  //       } else if(userChoice === compChoice) {
          
  //         draw();

  //       } else {
  //         lose();       
  //    }
  // }
 
  // let winner = () => {
  //   console.log('you won');
  // }
  // const draw = () => {
  //   console.log('you drew');
  // }
  // const lose = () => {
  //   console.log('you lost');
  // }