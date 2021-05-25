var word = "cucumber";
var wordStatus = [];
var lifes = 6;

buttons = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
for (let i = 0; i < buttons.length; i++) {
  let button = document.createElement("button");
  button.innerHTML = buttons[i];
  button.style.backgroundColor = 'Blue';
  button.style.borderRadius = '4px'
  let btn = document.querySelector('#button-container')
  btn.appendChild(button);
  button.addEventListener('click', (letter) => currentGuess(letter));
  
}

const status = () => {
  let index = 0;
  for (let letter of word){
    let button = document.createElement("button");
    button.style.backgroundColor = 'Yellow';
    button.style.borderRadius = '4px'
    button.innerHTML = '_';
    let btn = document.querySelector('#word-container')
    button.setAttribute('index', index);
    index ++;
    btn.appendChild(button);
    wordStatus.push('_');
    
  }
}

const currentGuess = (letter) => {
  let guessed = letter.target.textContent;
  let found = false;
  let win = false;
  for (let i = 0; i < word.length; i++) {
    if (guessed === word[i]) {
      wordStatus[i] = guessed;
      found = true;
      document.querySelector(`button[index="${i}"]`).innerHTML = guessed;
    } if (guessed !== word[i]) {
      letter.target.disabled = true;
    }
  } if (!found) {
    lifes--;
    document.querySelector('#guesses').innerHTML = lifes;
    img();
  } if (lifes === 0){
    alert ("You`ve lost :( !")
    location.reload();
  } if (!wordStatus.includes("_")){
    win = true;
    alert("You`ve won !")
    location.reload();
  }
}
      

const img = () => {
  let boardImages = document.querySelector('#id1');
  if (lifes === 6){
    boardImages.src = './images/6.png'
  } if (lifes === 5){
    boardImages.src = './images/5.png'
  } if (lifes === 4){
    boardImages.src = './images/4.png'
  } if (lifes === 3){
    boardImages.src = './images/3.png'
  } if (lifes === 2){
    boardImages.src = './images/2.png'
  } if (lifes === 1){
    boardImages.src = './images/1.png'
  }
}
    

status();

  

    




     

  





