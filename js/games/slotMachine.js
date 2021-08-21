const img1 = document.querySelector(`#img1`);
const img2 = document.querySelector(`#img2`);
const img3 = document.querySelector(`#img3`);
const startBtn = document.querySelector(`#start`);
const prize = document.querySelector(`#prize`);

const randomPrize = () => {
  const index = Math.floor(Math.random() * 8) + 1;
  return index;
};

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

const prizes = {
  1: prize1,
  2: prize2,
  3: prize3,
  4: prize4,
  5: prize5,
  6: prize6,
  7: prize7,
  8: prize8,
};

startBtn.addEventListener(`click`, () => {
  const num1 = randomPrize();
  const num2 = randomPrize();
  const num3 = randomPrize();

  startBtn.disabled = true;
  prize.innerHTML = ``;

  img1.children[0].classList.add(`spin`);

  setTimeout(() => {
    img2.children[0].classList.add(`spin`);
  }, 100);

  setTimeout(() => {
    img3.children[0].classList.add(`spin`);
  }, 200);

  setTimeout(() => {
    img1.innerHTML = ``;
    img1.appendChild(prizes[randomPrize()].cloneNode(true));
    img1.children[0].classList.add(`spin`);
  }, 300);

  setTimeout(() => {
    img1.innerHTML = ``;
    img1.appendChild(prizes[randomPrize()].cloneNode(true));
    img1.children[0].classList.add(`spin`);
  }, 600);

  setTimeout(() => {
    img1.innerHTML = ``;
    img1.appendChild(prizes[randomPrize()].cloneNode(true));
    img1.children[0].classList.add(`spin`);
  }, 900);

  setTimeout(() => {
    img1.innerHTML = ``;
    img1.appendChild(prizes[randomPrize()].cloneNode(true));
    img1.children[0].classList.add(`spin`);
  }, 1200);

  setTimeout(() => {
    img1.innerHTML = ``;
    img1.appendChild(prizes[num1].cloneNode(true));
  }, 1500);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 400);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 700);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1000);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1300);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1100);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1300);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1500);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[randomPrize()].cloneNode(true));
    img2.children[0].classList.add(`spin`);
  }, 1800);

  setTimeout(() => {
    img2.innerHTML = ``;
    img2.appendChild(prizes[num2].cloneNode(true));
  }, 2100);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 500);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 800);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 1100);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 1300);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 1500);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 1800);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 2100);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[randomPrize()].cloneNode(true));
    img3.children[0].classList.add(`spin`);
  }, 2400);

  setTimeout(() => {
    img3.innerHTML = ``;
    img3.appendChild(prizes[num3].cloneNode(true));
  }, 2700);

  setTimeout(() => {
    if (num1 === 8 && num2 === 8 && num3 === 8) {
      prize.innerHTML = `Oh não! Mais sorte na próxima vez~`;
    } else if (num1 === num2 && num2 === num3) {
      prize.innerHTML = `Parabéns! Você ganhou um prêmio *-*`;
    } else {
      prize.innerHTML = `Tente novamente, não desista!`;
    }
  }, 2750);

  setTimeout(() => {
    startBtn.disabled = false;
  }, 2800);
});
