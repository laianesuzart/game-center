const menu = document.querySelector(`#menu`);
const menuList = document.querySelector(`#menu-list`);
let clickCount = 0;

menu.addEventListener(`click`, () => {
    
    if (clickCount === 0) {
        menuList.classList.remove(`hidden`);
        clickCount++;
        console.log(clickCount)
    } else {
        menuList.classList.add(`hidden`);
        clickCount--;
        console.log(clickCount)
    }
    
    
})

const game1 = document.querySelector(`#game1`);
const game2 = document.querySelector(`#game2`);
const game3 = document.querySelector(`#game3`);
const game4 = document.querySelector(`#game4`);

const container = document.queryCommandEnabled(`#container`);
const jokempo = document.querySelector(`#jokempo`);
const magic = document.querySelector(`#magic`);
const nickel = document.querySelector(`#nickel`);
const words = document.querySelector(`#words`);


game1.addEventListener(`click`, () => {
    menuList.classList.add(`hidden`);
    magic.classList.add(`hidden`);
    nickel.classList.add(`hidden`);
    words.classList.add(`hidden`);

    jokempo.classList.remove(`hidden`);

    clickCount--;
 
});

game2.addEventListener(`click`, () => {
    menuList.classList.add(`hidden`);
    jokempo.classList.add(`hidden`);
    nickel.classList.add(`hidden`);
    words.classList.add(`hidden`);

    magic.classList.remove(`hidden`);

    clickCount--;
});

game3.addEventListener(`click`, () => {
    menuList.classList.add(`hidden`);
    magic.classList.add(`hidden`);
    jokempo.classList.add(`hidden`);
    words.classList.add(`hidden`);

    nickel.classList.remove(`hidden`);

    clickCount--;
});

game4.addEventListener(`click`, () => {
    menuList.classList.add(`hidden`);
    magic.classList.add(`hidden`);
    jokempo.classList.add(`hidden`);
    nickel.classList.add(`hidden`);
 
    words.classList.remove(`hidden`);

    clickCount--;
});


const rock = document.querySelector(`#rock`);
const paper = document.querySelector(`#paper`);
const scissors = document.querySelector(`#scissors`);
let playerChoice;

const choices = {1: `Pedra`, 2: `Papel`, 3: `Tesoura`};

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
}

const rockPaperScissors = (playerChoice) => {
    const computerChoice = computer();
    
    result.innerHTML = `O computador escolheu <strong>${choices[computerChoice]}</strong>`;
    
    if (playerChoice === computerChoice) {
        result.innerHTML += `<p>Empate!</p>`;
    } else if ((playerChoice === 1 && computerChoice === 3) || (playerChoice === 2 && computerChoice === 1) || (playerChoice === 3 && computerChoice === 2)) {
        result.innerHTML += `<p>Você ganhou! Parabéns :D</p>`
    } else {
        result.innerHTML += `<p>Você perdeu :c Tente de novo!</p>`
    }
}

const magicBall = document.querySelector(`#magic-ball`);
const answer = document.querySelector(`#answer`);

const answers = {1: `É certo.`, 2: `Foi decidido assim.`, 3: `Sem dúvidas.`, 4: `Sim, com certeza.`, 5: `A meu ver, sim.`, 6: `Provavelmente.`,
                 7: `Sim.`, 8: `Sinais apontam que sim.`, 9: `Pergunte mais tarde.`, 10: `É melhor não te contar agora.`, 11: `Concentre-se e pergunte novamente.`,
                 12: `Não conte com isso.`, 13: `Minha resposta é não.`, 14: `Minhas fontes dizem não.`, 15: `Muito duvidoso.`};

const ballAnswers = () => {
    const ballAnswer = Math.floor(Math.random() * 15) + 1;
    return ballAnswer;
}

magicBall.addEventListener(`click`, () => {
    const ballAnswer = ballAnswers();

    answer.innerHTML = `${answers[ballAnswer]}`;
});


// ● It is certain.
// ● It is decidedly so.
// ● Without a doubt.
// ● Yes – definitely.

// ● As I see it, yes.
// ● Most likely.
// ● Yes.
// ● Signs point to yes.

// ● Ask again later.
// ● Better not tell you now.
// ● Concentrate and ask again.

// ● Don't count on it.
// ● My reply is no.
// ● My sources say no.
// ● Very doubtful.