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
});

const game1 = document.querySelector(`#game1`);
const game2 = document.querySelector(`#game2`);
const game3 = document.querySelector(`#game3`);
const game4 = document.querySelector(`#game4`);
const game5 = document.querySelector(`#game5`);

const container = document.queryCommandEnabled(`#container`);
const jokempo = document.querySelector(`#jokempo`);
const magic = document.querySelector(`#magic`);
const nickel = document.querySelector(`#nickel`);
const words = document.querySelector(`#words`);
const xoxo = document.querySelector(`#xoxo`);

const hideMenuAndGames = () => {
  menuList.classList.add(`hidden`);
  jokempo.classList.add(`hidden`);
  magic.classList.add(`hidden`);
  nickel.classList.add(`hidden`);
  words.classList.add(`hidden`);
  xoxo.classList.add(`hidden`);

  clickCount--;
};

game1.addEventListener(`click`, () => {
  hideMenuAndGames();
  jokempo.classList.remove(`hidden`);
});

game2.addEventListener(`click`, () => {
  hideMenuAndGames();
  magic.classList.remove(`hidden`);
});

game3.addEventListener(`click`, () => {
  hideMenuAndGames();
  nickel.classList.remove(`hidden`);
});

game4.addEventListener(`click`, () => {
  hideMenuAndGames();
  words.classList.remove(`hidden`);
});

game5.addEventListener(`click`, () => {
  hideMenuAndGames();
  xoxo.classList.remove(`hidden`);
});
