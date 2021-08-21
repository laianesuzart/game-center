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
turn.innerHTML = `É a vez do jogador <span class="highlight">${currentPlayer}</span>`;

let winX = 0;
let winO = 0;
let draw = 0;

const results = document.getElementById("results");
const textX = document.createElement("p");
const textO = document.createElement("p");
const textDraw = document.createElement("p");

const handleClick = function (event) {
  const cell = event.target;
  cell.style.backgroundColor = "#FFC0BE";

  if (cell.innerHTML == "") {
    cell.innerHTML = currentPlayer;

    if (currentPlayer === "X") {
      playerSelections = playerXSelections;
      nextPlayer = "O";
      turn.innerHTML = `É a vez do jogador <span class="highlight">${nextPlayer}</span>`;
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
      turn.innerHTML = `É a vez do jogador <span class="highlight">${nextPlayer}</span>`;
    }
    playerSelections.push(Number(cell.id));
  }

  if (checkWinner(playerSelections)) {
    alert("Jogador " + currentPlayer + " venceu!");

    if (currentPlayer === "X") {
      winX++;
    } else {
      winO++;
    }

    resetGame();
  }

  if (checkDraw()) {
    alert("Empate!");

    draw++;

    resetGame();
  }

  textX.innerHTML = `Vitórias do jogador <span class="highlight">X</span>: ${winX}`;
  results.appendChild(textX);
  textO.innerHTML = `Vitórias do jogador <span class="highlight">O</span>: ${winO}`;
  results.appendChild(textO);
  textDraw.innerText = `Empates: ${draw}`;
  results.appendChild(textDraw);

  currentPlayer = nextPlayer;
};

const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
  cells[i].addEventListener("click", handleClick);
}

function checkWinner() {
  for (let i = 0; i < winningCombinations.length; i++) {
    matches = 0;
    for (let j = 0; j < winningCombinations[i].length; j++) {
      if (playerSelections.includes(winningCombinations[i][j])) matches++;
      else break;
      if (matches === 3) return true;
    }
  }

  return false;
}

function checkDraw() {
  return playerOSelections.length + playerXSelections.length >= cells.length;
}

function resetGame() {
  playerXSelections = new Array();
  playerOSelections = new Array();
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerHTML = "";
    cells[i].style.backgroundColor = "var(--bg-color)";
  }
}
