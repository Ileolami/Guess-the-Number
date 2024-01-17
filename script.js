'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 5;
let highscoreCount = 0;
 console.log(secretNumber);

 
const number = document.querySelector('.number');
const displayMessage = document.querySelector('.message');
const highscore = document.querySelector('.highscore');
const scoreCount = document.querySelector('.score');
const body = document.querySelector('body');

    document.querySelector('.check').addEventListener('click', () => {
        const guess = Number(document.querySelector('.guess').value);
        
        if(!guess){
            displayMessage.textContent = '⛔No Number!';
            body.style.backgroundColor = '#8B0000';
        }
        else if(guess === secretNumber){
            displayMessage.textContent = '🎉Correct Number!';
            document.querySelector('body').style.backgroundColor = '#60b347';
            number.style.width = '30rem';
            number.textContent = secretNumber;

            if(score > highscoreCount){
                highscoreCount = score;
               highscore.textContent = highscoreCount;
            }
        }
        else if (guess !== secretNumber){
            if(score > 1){
                displayMessage.textContent = guess > secretNumber ? "📈Too High!" : "📉Too Low!";
                score--;
                scoreCount.textContent = score;
                body.style.backgroundColor = '#8B0000';
            }
            else{
                displayMessage.textContent = '💥You Lost the Game!';
                scoreCount.textContent = 0;
            }
        }
    });

document.querySelector('.again').addEventListener('click', () => {
    window.location.reload();
});