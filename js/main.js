// const myName = "Max";

// console.log("Привіт котики!");
// console.log(myName);
// console.log(40 + 40);
// console.log("Good bye");

const title = document.querySelector(".cats-title");

const logotype = document.querySelector('.site-logo img');
const body = document.querySelector('body');

console.log(logotype);

function onLogoClick() {
  body.style.backgroundColor = '#0f3f3c';
 };

logotype.addEventListener('click', onLogoClick)

// title.classList.remove('cats-title');

// console.log(title);

// title.style.cssText = "color: tomato; font-size: 50px";
// title.style.fontSize = "42px";