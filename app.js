// Game  values
let min = 1, max = 10, winningNumber = getWinningNumber(min, max), guessLeft = 3;

// UI elements
const game = document.getElementById('game'),
    minNum = document.querySelector('.min-num'),
    maxNum = document.querySelector('.max-num'),
    guessBtn = document.querySelector('#guess-btn'),
    guessInput = document.querySelector('#guess-input'),
    message = document.querySelector('.message');

// Assign UI min max
minNum.textContent = min;
maxNum.textContent = max;

// Play again listener
game.addEventListener('mousedown', function(e) {
    if (e.target.className === 'play-again'){
        window.location.reload();
    }
});

 // Listner for guess
 guessBtn.addEventListener('click',function() {
     message.style.display = 'none';
     let guess = parseInt(guessInput.value);
     console.log(guess);
     
     // Validate
     if (guess > max || guess < min || isNaN(guess))
     {
        setMassage("Enter a number in range", 'red');
     }

     // Chack if won
     if (guess === winningNumber){
         //Disable Input
         gameOver("You won !", 'green');
     }
     else {
         //Worng Number
         guessLeft--;
         if (guessLeft === 0) //game over
         {
            gameOver(`Game Over !, Lost, the currect nmber is ${winningNumber}`, 'red')
         } else {
            guessInput.value = '';
            setMassage(`Worng Anserr, still left ${guessLeft} guesses.`, 'red');
         }
        
     }
 });

function gameOver(messageText, color) {
    guessInput.disabled = true;
    guessInput.style.borderColor = color;
    guessBtn.value = "Play Agein";
    setMassage(messageText, color);
    guessBtn.className += 'play-again';
}

 function setMassage(messageText, color) {
    message.style.display = 'block';
    message.style.color = color;
    message.textContent = messageText;
 }

 function getWinningNumber(min, max) {
     return(parseInt((Math.random()*max)+min));
 }
