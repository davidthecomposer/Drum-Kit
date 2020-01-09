
let w = document.querySelector('.w');
let a = document.querySelector('.a');
let s = document.querySelector('.s');
let d = document.querySelector('.d');
let j = document.querySelector('.j');
let k = document.querySelector('.k');
let l = document.querySelector('.l');

let buttons = document.querySelectorAll('.drum');

const handleClick = () => {
    let audio = new Audio('sounds/tom-1.mp3');
    audio.play();
};

const addEventListener = (arr) => {
  for (let obj of arr){
     obj.addEventListener('click', handleClick);
  }
}

addEventListener(buttons);
