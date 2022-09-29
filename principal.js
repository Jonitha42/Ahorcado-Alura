const newWord = document.getElementById("newWord");
const btnSend = document.getElementById("btnSend");

const regEx = /[a-zA-Zñ]/g;


const sendWord = () => {
  let word = newWord.value;
  if (word.match(regEx)) {

  }
  
}

btnSend.addEventListener("click", sendWord);