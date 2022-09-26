

  const getRandomWord = () => {
    fetch('https://palabras-aleatorias-public-api.herokuapp.com/random')
  .then(response => response.json())
  .then(data => console.log(data.body.Word));
  }

  getRandomWord()