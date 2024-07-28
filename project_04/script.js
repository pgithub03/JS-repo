let randomNumber = parseInt(Math.random()*100+1)


const sumbit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guestSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver= document.querySelector('.resultParas')

const p = document.createElement('p')



let prevGuess = []
let numGuess = 1

let playGame = true


if(playGame){
    sumbit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userInput.value)
        console.log(guess);
        validateGuess(guess)
    })
}


function validateGuess(guess){
    //check if input is valid number (1-100)
    if(isNaN(guess)){
        alert('Please enter valid number');
    }else if(guess < 1){
        alert('Please enter valid number above 0');
    }else if(guess > 100){
        alert('Please enter valid number under 100');
    }else{
        prevGuess.push(guess)
        if(numGuess===11){
            displayGuess(guess);
            displayMessage(`Game Over. RANDOM number was ${randomNumber}`);
            endGame();
        }else{
            displayGuess(guess);
            checkGuess(guess);
        }
    }
}

function checkGuess(guess){
    //check if input === guess then player wins 
    if(guess === randomNumber){
        displayMessage(`You guessed it right !`)
        endGame()
    }else if(guess < randomNumber){
        displayMessage(`Guessed Number is too low`)
    }else if(guess > randomNumber){
        displayMessage(`Guessed Number is too high`)
    }
}

function displayGuess(guess){
    //will update total wrong guesses
    userInput.value = ''
    guestSlot.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11-numGuess}`
}

function displayMessage(message){
    //will pass a message just
    lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function endGame(){
    //ends current game 
    //clean user input
    userInput.value = ''
    //disable the user input so that no new value can be input after end game
    userInput.setAttribute('disabled','')
    p.classList.add('button')
    p.innerHTML = `<h2 id="newGame">Start new Game</h2>`
    startOver.appendChild(p)
    playGame = false
    newGame()
}

function newGame(){
    //starts new game
    const newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click',function(e){
        randomNumber = parseInt(Math.random()*100+1)
        prevGuess = []
        numGuess = 1
        guestSlot.innerHTML = ''
        remaining.innerHTML = `${11-numGuess}`
        userInput.removeAttribute('disabled')
        startOver.removeChild(p)   
        playGame = true
    })
}

