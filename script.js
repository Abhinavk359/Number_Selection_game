let randomNumber=Math.floor(Math.random()*100)+1;
const guesses=document.querySelector('.guesses');
const lastresult=document.querySelector('.lastresult');
const loworhi=document.querySelector('.loworhi');
const guessSubmit=document.querySelector('.guessSubmit');
const guessField=document.querySelector('.guessField');
let guessCount=1;
let resetButton;
function checkGuess(){
    const userGuess=Number(guessField.value);
    if(guessCount===1){
        guesses.textContent='Previous guesses: ';
    }
    guesses.textContent+=userGuess+' ';
    if(userGuess===randomNumber){
        lastresult.textContent='Congratulations!! You got it!';
        lastresult.style.backgroundColor='green';
        loworhi.textContent='';
        setGameOver();
    }else if(guessCount===10){
        lastresult.textContent='!!!Game Over!!!';
        loworhi.textContent='';
        setGameOver();
    }else{
        lastresult.textContent='Wrong!';
        lastresult.style.backgroundColor='red';
        if(userGuess>randomNumber){
            loworhi.textContent='Your guess was too high!';
        }
        else{
            loworhi.textContent='Your guess was too low!';
        }
    }
    guessCount++;
    guessField.value='';
    guessField.focus();
}
guessSubmit.addEventListener('click',checkGuess);
function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement('button');
    resetButton.textContent='Start new game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame(){
    guessCount=1;
    const resetparse=document.querySelectorAll('.resultparse p');
    for(const res of resetparse){
        res.textContent='';
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value='';
    guessField.focus();
    lastresult.style.backgroundColor='rgb(0,0,255)';
    randomNumber=Math.floor(Math.random()*100)+1;
}