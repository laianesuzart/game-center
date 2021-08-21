const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);
let playerChoice;

const choices = { 1: `Pedra`, 2: `Papel`, 3: `Tesoura` };

const result = document.querySelector(`#result`);

rock.addEventListener(`click`, () => {
  playerChoice = 1;
  rockPaperScissors(playerChoice);
});

paper.addEventListener(`click`, () => {
  playerChoice = 2;
  rockPaperScissors(playerChoice);
});

scissors.addEventListener(`click`, () => {
  playerChoice = 3;
  rockPaperScissors(playerChoice);
});

const computer = () => {
  const computerChoice = Math.floor(Math.random() * 3) + 1;
  return computerChoice;
};

const rockPaperScissors = (playerChoice) => {
  const computerChoice = computer();

  result.innerHTML = `<p>O computador escolheu <strong>${choices[computerChoice]}</strong></p>`;

  if (playerChoice === computerChoice) {
    result.innerHTML += `<p>Empate!</p>`;
  } else if (
    (playerChoice === 1 && computerChoice === 3) ||
    (playerChoice === 2 && computerChoice === 1) ||
    (playerChoice === 3 && computerChoice === 2)
  ) {
    result.innerHTML += `<p>Você ganhou! Parabéns :D</p>`;
  } else {
    result.innerHTML += `<p>Você perdeu :c Tente de novo!</p>`;
  }
};
