'use strict';
/*
// console.log(document.querySelector(".message").textContent);

document.querySelector('.message').textContent = 'Correct Number!';

document.querySelector('.number').textContent = 20;
document.querySelector('.score').textContent = 20;


document.querySelector('.guess').value = 100;
console.log(document.querySelector('.guess').value);
*/


document.querySelector('.check').addEventListener('click', function () {

     const number = document.querySelector('.number').textContent
     const guess = Number(document.querySelector('.guess').value);


     if (!guess) {
          document.querySelector('.message').textContent = 'No number!';
     }
})