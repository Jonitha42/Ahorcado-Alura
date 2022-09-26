const words = ["corre", "perro", "gato", "casa", "hola"];
const wordContainer = document.getElementById("wordContainer");
const inputLetter = document.getElementById("inputLetter");
const btnCheck = document.getElementById("btnCheck");
const usedLettersContainers = document.getElementById("usedLetters");

const regEx = /[a-zA-Zñ]/g;

let wordSelected;
let usedLetters;
let error = 0;
let success = 0;

const randomWords = () => {
  let random = words[Math.floor(Math.random() * words.length)].toUpperCase();

  wordSelected = random.split("");

  return wordSelected;
};

const toDash = () => {
  console.log(wordSelected);
  wordSelected.forEach((letter) => {
    const pLetter = document.createElement("span");
    pLetter.innerHTML = letter.toUpperCase();
    pLetter.classList.add("wanted");
    pLetter.classList.add("letter");
    wordContainer.appendChild(pLetter);
  });
};

const youWin = () => {
  alert("ganaste")
  success = 0
}


const youLose = () => {
  alert("perdiste")
  error = 0
}

const incorrectLetter = () => {
  error++
  if(error == 5){
    youLose()

  }
}

const addLetter = (letter) => {
  const elementLetter = document.createElement("span");
  elementLetter.innerHTML = letter.toUpperCase();
  usedLettersContainers.appendChild(elementLetter)

}

const sendingLetter = (letter) => {
  if(wordSelected.includes(letter)){
    correctLetter(letter);

  }else{
    incorrectLetter();
    draw()
  }
  addLetter(letter)
  usedLetters.push(letter)
  inputLetter.value = ""
  inputLetter.focus()
}

const letterEvent = () => {
  let letter = inputLetter.value.toUpperCase();
  if (letter.match(regEx) && !usedLetters.includes(letter)) {
    sendingLetter(letter);
  }


};

const correctLetter = (letter) => {
  const { children } = wordContainer;
  for (let i = 0; i < children.length; i++) {
    if (letter === children[i].innerHTML) {
      children[i].classList.toggle("wanted");
      success++;
    }
  }

  if (success === wordSelected.length) {
    youWin();
  }
};


const draw = () => {

  const canvas = document.getElementById("canvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");

      //horca
    ctx.beginPath();
    ctx.moveTo(70,200)
    ctx.lineTo(70,10)
    ctx.lineTo(150,10);
    ctx.lineTo(150,20)
    ctx.stroke();


     if(error === 1){
    //Cabeza
    ctx.beginPath();
    ctx.arc(150,40,20,0, Math.PI * 2)
    ctx.stroke()

    }
    
    if( error === 2){
      //cuerpo
    ctx.beginPath();
    ctx.moveTo(150,60)
    ctx.lineTo(150,100)
    ctx.stroke()

    }
    
    if( error === 3){
      //brazos
    ctx.beginPath();
    ctx.moveTo(150,60)
    ctx.lineTo(130,100)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(150,60)
    ctx.lineTo(170,100)
    ctx.stroke()
  
    }

    if( error === 4) {
          //piernas
    ctx.beginPath();
    ctx.moveTo(150,100)
    ctx.lineTo(170,130)
    ctx.stroke()

    ctx.beginPath();
    ctx.moveTo(150,100)
    ctx.lineTo(130,130)
    ctx.stroke()
    }
    

  }

}

draw();

const iniciarJuego = () => {
  usedLetters = [];
  wordContainer.innerHTML = "";
  randomWords();
  toDash();

};

btnCheck.addEventListener("click", letterEvent);

iniciarJuego();
