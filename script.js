const menu = document.querySelector(`#menu`);
const menuList = document.querySelector(`#menu-list`);
let clickCount = 0;

menu.addEventListener(`click`, () => {
    
    if (clickCount === 0) {
        menuList.classList.remove(`hidden`);
        clickCount++;
    } else {
        menuList.classList.add(`hidden`);
        clickCount--;
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
                 7: `Sim.`, 8: `Tudo indica que sim.`, 9: `Pergunte mais tarde.`, 10: `É melhor não te contar agora.`, 11: `Concentre-se e pergunte novamente.`,
                 12: `Não conte com isso.`, 13: `Minha resposta é não.`, 14: `Minhas fontes dizem não.`, 15: `Muito duvidoso.`};

const ballAnswers = () => {
    const ballAnswer = Math.floor(Math.random() * 15) + 1;
    return ballAnswer;
}

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

const img1 = document.querySelector(`#img1`);
const img2 = document.querySelector(`#img2`);
const img3 = document.querySelector(`#img3`);
const startBtn = document.querySelector(`#start`);
const prize = document.querySelector(`#prize`);

const randomPrize = () => {
    const img = Math.floor(Math.random() * 8) + 1;
    return img;
}

const prize1 = document.createElement(`img`);
prize1.src = `./img/bestPrize.png`;

const prize2 = document.createElement(`img`);
prize2.src = `./img/nintendo.png`;

const prize3 = document.createElement(`img`);
prize3.src = `./img/money.png`;

const prize4 = document.createElement(`img`);
prize4.src = `./img/chips.png`;

const prize5 = document.createElement(`img`);
prize5.src = `./img/nap.png`;

const prize6 = document.createElement(`img`);
prize6.src = `./img/play.png`;

const prize7 = document.createElement(`img`);
prize7.src = `./img/timeToRest.png`;

const prize8 = document.createElement(`img`);
prize8.src = `./img/unlucky.png`;

const prizes = {1: prize1, 2: prize2, 3: prize3, 4: prize4, 5: prize5, 6: prize6, 7: prize7, 8: prize8};

startBtn.addEventListener(`click`, () => {
    startBtn.disabled = true;

    img1.innerHTML = ``;
    img2.innerHTML = ``;
    img3.innerHTML = ``;
    prize.innerHTML = ``;

    const num1 = randomPrize();
    const num2 = randomPrize();
    const num3 = randomPrize();

   setTimeout( () => {
        img1.appendChild(prizes[num1].cloneNode(true));
   }, 500);

    setTimeout( () => {
        img2.appendChild(prizes[num2].cloneNode(true));
    }, 1000);

    setTimeout( () => {
        img3.appendChild(prizes[num3].cloneNode(true));
    }, 1500);

    setTimeout( () => {
        if (num1 === 8 && num2 === 8 && num3 === 8) {
            prize.innerHTML = `Oh não! Mais sorte na próxima vez~`
        } else if (num1 === num2 && num2 === num3) {
            prize.innerHTML = `Parabéns! Você ganhou um prêmio *-*`;
        } else {
            prize.innerHTML = `Tente novamente, não desista!`;
        }
    }, 1600);

    setTimeout( () => {
        startBtn.disabled = false;
    }, 1650);
   
});

const word = [`gato`, `cachorro`, `laranja`, `futebol`, `chocolate`, `zebra`, `manteiga`, `vermelho`, `rosa`, `margarida`,
                `borboleta`, `batata`, `abacaxi`, `basquete`, `abacate`, `manga`, `queijo`, `alface`, `tomate`, `pizza`];

const randomWord = () => {
   const randomWord = Math.floor(Math.random() * 20);
   return randomWord;
}

const randomWords = () => {
    const randomWords = [];

    let word1;
    let word2;
    let word3;
    
    do {
        word1 = word[randomWord()];
        word2 = word[randomWord()];
        word3 = word[randomWord()];

    } while (word1 === word2 || word2 === word3 || word1 === word3)

    randomWords.push(word1);
    randomWords.push(word2);
    randomWords.push(word3);

    return randomWords;
}

const randomPosition = () => {
    const position = Math.floor(Math.random() * 10);
    return position;
}

const randomPositions = () => {
    const randomPositions = [];

    let position1;
    let position2;
    let position3; 

    do {
        position1 = randomPosition();
        position2 = randomPosition();
        position3 = randomPosition();
    } while (position1 === position2 || position2 === position3 || position1 === position3)

    randomPositions.push(position1);
    randomPositions.push(position2);
    randomPositions.push(position3);

    return randomPositions;
}

const randomLetters = () => {
    const alphabet = `abcdefghijklmnopqrstuvwxyz`;
    const randomLetter = Math.floor(Math.random() * 26);

    return alphabet[randomLetter];
}

const wordGame = () => {
    const array = [];
    const selectWords = randomWords();
    const rowPositions = randomPositions();
    console.log(selectWords)
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
       }
       else {
           for (let i = 0; i < selectWords[0].length; i++) {
            word1.push(selectWords[0][i]);
           }     
       }
   } 

   for (let i = 0; i < 10; i++) {
        if (i < indexY2) {
        word2[i] = randomLetters();
        }
        else {
            for (let i = 0; i < selectWords[1].length; i++) {
                word2.push(selectWords[1][i]);
            }   
        }
    } 
    for (let i = 0; i < 10; i++) {
        if (i < indexY3) {
        word3[i] = randomLetters();
        }
        else {
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
 
    
   

    
}


    