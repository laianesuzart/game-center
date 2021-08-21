const word = [
  `gato`,
  `cachorro`,
  `laranja`,
  `futebol`,
  `chocolate`,
  `zebra`,
  `manteiga`,
  `vermelho`,
  `rosa`,
  `margarida`,
  `borboleta`,
  `batata`,
  `abacaxi`,
  `basquete`,
  `abacate`,
  `manga`,
  `queijo`,
  `alface`,
  `tomate`,
  `pizza`,
];

const randomWord = () => {
  const randomWord = Math.floor(Math.random() * 20);
  return randomWord;
};

const randomWords = () => {
  const randomWords = [];

  let word1;
  let word2;
  let word3;

  do {
    word1 = word[randomWord()];
    word2 = word[randomWord()];
    word3 = word[randomWord()];
  } while (word1 === word2 || word2 === word3 || word1 === word3);

  randomWords.push(word1);
  randomWords.push(word2);
  randomWords.push(word3);

  return randomWords;
};

const randomPosition = () => {
  const position = Math.floor(Math.random() * 10);
  return position;
};

const randomPositions = () => {
  const randomPositions = [];

  let position1;
  let position2;
  let position3;

  do {
    position1 = randomPosition();
    position2 = randomPosition();
    position3 = randomPosition();
  } while (
    position1 === position2 ||
    position2 === position3 ||
    position1 === position3
  );

  randomPositions.push(position1);
  randomPositions.push(position2);
  randomPositions.push(position3);

  return randomPositions;
};

const randomLetters = () => {
  const alphabet = `abcdefghijklmnopqrstuvwxyz`;
  const randomLetter = Math.floor(Math.random() * 26);

  return alphabet[randomLetter];
};

const wordGame = () => {
  const array = [];
  const selectWords = randomWords();
  const rowPositions = randomPositions();

  let word1 = [];
  let word2 = [];
  let word3 = [];

  let position1 = rowPositions[0];
  let position2 = rowPositions[1];
  let position3 = rowPositions[2];

  let indexY1 = 10 - selectWords[0].length;
  let indexY2 = 10 - selectWords[1].length;
  let indexY3 = 10 - selectWords[2].length;

  for (let i = 0; i < 10; i++) {
    if (i < indexY1) {
      word1[i] = randomLetters();
    } else {
      for (let i = 0; i < selectWords[0].length; i++) {
        word1.push(selectWords[0][i]);
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    if (i < indexY2) {
      word2[i] = randomLetters();
    } else {
      for (let i = 0; i < selectWords[1].length; i++) {
        word2.push(selectWords[1][i]);
      }
    }
  }

  for (let i = 0; i < 10; i++) {
    if (i < indexY3) {
      word3[i] = randomLetters();
    } else {
      for (let i = 0; i < selectWords[2].length; i++) {
        word3.push(selectWords[2][i]);
      }
    }
  }

  for (let row = 0; row < 10; row++) {
    array[row] = [];
    for (let column = 0; column < 10; column++) {
      if (row === position1) {
        array[row][column] = word1[column];
      } else if (row === position2) {
        array[row][column] = word2[column];
      } else if (row === position3) {
        array[row][column] = word3[column];
      } else {
        array[row][column] = randomLetters();
      }
    }
  }
  return array;
};

const startBtn2 = document.querySelector(`#start2`);
const findWords = document.querySelector(`#find-words`);
const timer = document.querySelector(`#timer`);
const gratz = document.querySelector(`#gratz`);

let correctWords = [];
let timeID = null;

document.onselectionchange = () => {
  let selection = document
    .getSelection()
    .toString()
    .replace(/\s/g, ``)
    .toLowerCase();

  if (word.includes(selection) && !correctWords.includes(selection)) {
    correctWords.push(selection);
  }

  if (correctWords.length === 3) {
    setTimeout(() => {
      findWords.classList.add(`hidden`);
      timer.classList.add(`hidden`);
      gratz.classList.remove(`hidden`);
    }, 1000);

    correctWords = [];
  }
};

const setTimer = (counter) => {
  timer.innerHTML = `${counter} segundo(s)`;
  timeID = setTimeout(() => {
    counter--;
    timer.innerHTML = `${counter} segundo(s)`;
    setTimer(counter);
  }, 1000);

  if (counter === 0) {
    findWords.classList.add(`hidden`);
    timer.classList.add(`hidden`);
    gratz.classList.add(`hidden`);
    clearTimeout(timeID);
  }

  return timeID;
};

startBtn2.addEventListener(`click`, () => {
  const matrix = wordGame();
  findWords.classList.remove(`hidden`);
  timer.classList.remove(`hidden`);
  gratz.classList.add(`hidden`);

  clearTimeout(timeID);
  setTimer(30);

  findWords.innerHTML = ``;

  for (let row = 0; row < matrix.length; row++) {
    let rowText = document.createElement(`p`);
    findWords.appendChild(rowText);

    for (let column = 0; column < matrix[row].length; column++) {
      let columnText = document.createElement(`span`);
      columnText.innerHTML += `${matrix[row][column]} `;
      rowText.appendChild(columnText);
    }
  }
});
