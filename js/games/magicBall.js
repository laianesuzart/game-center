const magicBall = document.querySelector(`#magic-ball`);
const answer = document.querySelector(`#answer`);

const answers = {
  1: `É certo.`,
  2: `Foi decidido assim.`,
  3: `Sem dúvidas.`,
  4: `Sim, com certeza.`,
  5: `A meu ver, sim.`,
  6: `Provavelmente.`,
  7: `Sim.`,
  8: `Tudo indica que sim.`,
  9: `Pergunte mais tarde.`,
  10: `É melhor não te contar agora.`,
  11: `Concentre-se e pergunte novamente.`,
  12: `Não conte com isso.`,
  13: `Minha resposta é não.`,
  14: `Minhas fontes dizem não.`,
  15: `Muito duvidoso.`,
};

const ballAnswers = () => {
  const ballAnswer = Math.floor(Math.random() * 15) + 1;
  return ballAnswer;
};

magicBall.addEventListener(`click`, () => {
  answer.classList.remove(`green`, `yellow`, `red`);

  const ballAnswer = ballAnswers();

  if (ballAnswer < 9) {
    answer.classList.add(`green`);
  } else if (ballAnswer < 12) {
    answer.classList.add(`yellow`);
  } else {
    answer.classList.add(`red`);
  }

  answer.innerHTML = `${answers[ballAnswer]}`;
});
