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
  logotype.classList.toggle('is-hidden');
};
 
title.addEventListener('click', onLogoClick);




const catPhoto = document.querySelector(".cat-photo");

function onPhotoClick() {
  catPhoto.src = 'https://picsum.photos/200/300';
  catPhoto.width = '296';
  catPhoto.height = '370';
 };

catPhoto.addEventListener('click', onPhotoClick);

// title.classList.remove('cats-title');

// console.log(title);

// title.style.cssText = "color: tomato; font-size: 50px";
// title.style.fontSize = "42px";