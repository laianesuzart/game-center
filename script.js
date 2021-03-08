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