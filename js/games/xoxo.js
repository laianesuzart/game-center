let currentPlayer = "X";
let nextPlayer = "O";

let playerXSelections = [];
let playerOSelections = [];

const winningCombinations = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [1, 4, 7],
  [2, 5, 8],
  [3, 6, 9],
  [1, 5, 9],
  [3, 5, 7],
];

const turn = document.getElementById("turn");
turn.innerHTML = `É a sua vez`;

let winX = 0;
let winO = 0;
let draw = 0;

const results = document.getElementById("results");
const textX = document.createElement("p");
const textO = document.createElement("p");
const textDraw = document.createElement("p");

const score = () => {
  textX.innerHTML = `Vitórias do <span class="highlight">jogador</span>: ${winX}`;
  results.appendChild(textX);
  textO.innerHTML = `Vitórias do <span class="highlight">computador</span>: ${winO}`;
  results.appendChild(textO);
  textDraw.innerText = `Empates: ${draw}`;
  results.appendChild(textDraw);
};

const computerChoice = () => {
  let cell = Math.floor(Math.random() * 9) + 1;

  while (playerXSelections.includes(cell) || playerOSelections.includes(cell)) {
    cell = Math.floor(Math.random() * 9) + 1;
  }
  document.getElementById(`${cell}`).classList.add("selected-cell");
  document.getElementById(`${cell}`).innerHTML = "O";
  playerOSelections.push(cell);

  nextPlayer = "X";
  turn.innerHTML = `É a sua vez`;

  if (checkWinner(playerOSelections)) {
    displayWinner(currentPlayer);
  }

  if (checkDraw()) {
    alert("Empate!");

    draw++;

    resetGame();
  }

  score();

  currentPlayer = nextPlayer;
};

const handleClick = (event) => {
  const cell = event.target;

  if (cell.innerHTML == "" && currentPlayer === "X") {
    cell.classList.add("selected-cell");
    cell.innerHTML = currentPlayer;

    nextPlayer = "O";
    turn.innerHTML = `É a vez do computador`;
    playerXSelections.push(Number(cell.id));

    setTimeout(() => {
      computerChoice();
    }, 1000);

    if (checkWinner(playerXSelections)) {
      displayWinner(currentPlayer);
    }

    if (checkDraw()) {
      alert("Empate!");

      draw++;

      resetGame();
    }

    score();

    currentPlayer = nextPlayer;
  }
};

const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}

const checkWinner = (playerSelections) => {
  for (let i = 0; i < winningCombinations.length; i++) {
    matches = 0;
    for (let j = 0; j < winningCombinations[i].length; j++) {
      if (playerSelections.includes(winningCombinations[i][j])) matches++;
      else break;
      if (matches === 3) return true;
    }
  }

  return false;
};

const checkDraw = () => {
  return playerOSelections.length + playerXSelections.length >= cells.length;
};

const resetGame = () => {
  playerXSelections = new Array();
  playerOSelections = new Array();
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].classList.remove("selected-cell");
  }
};

const displayWinner = (player) => {
  if (player === "X") {
    winX++;
  } else {
    winO++;
  }
  alert(`O ${player} venceu!`);
  resetGame();
};
