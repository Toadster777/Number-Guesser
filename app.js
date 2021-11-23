    //Game Values

let min = 1, max = 10, winningNum = Math.floor(Math.random() * 10) + 1, guessesLeft = 3;


    //UI Elements

const game = document.querySelector('#game');
const minNum = document.querySelector('.min-num');
const maxNum = document.querySelector('.max-num');
const guessBtn = document.querySelector('#guess-btn');
const guessInput = document.querySelector('#guess-input');
const message = document.querySelector('.message');

    //Assing UI min and max

minNum.textContent = min;
maxNum.textContent = max;
    //Listen for Play Again
// guessBtn.value = "Play Again";
// guessBtnla.cssName += 'play-again';


    //Listen for guess

guessBtn.addEventListener('click', function()
{
    let guess = (parseInt(guessInput.value))

        //Validate

        if(isNaN(guess))
        {
            setMessage(`Please input a number!`, 'red');
        }
        else if(guess < min || guess > max)
        {
            setMessage(`Number must be between ${min} and ${max}`, 'red');
        }
        // else
        // {  
        //     alert("Am trecut de verificari");
        // }
        else
        {
            winLose(guess);
        }
});
function winLose(guess)
    {
        if(guess === winningNum)
        {
            //     //Disable input
            // guessInput.disabled = true;
            //     //Change border color
            // guessInput.style.borderColor = "green";
            // guessInput.style.color = "green";
            setMessage(`${winningNum} is correct! YOU WIN!`, 'green')
            guessInput.disabled = true;
            guessBtn.disabled = true;
            setTimeout(function(){guessInput.disabled = false}, 2000);
            setTimeout(function(){guessBtn.disabled = false}, 2000);
            guessesLeft = 3;
            winningNum = Math.floor(Math.random() * 10) + 1;
            setTimeout(function(){guessInput.style.color = '#222'}, 2000);
            setTimeout(function(){guessInput.style.borderColor = '#222'}, 2000);
            setTimeout(function(){setMessage("Number has changed, give it another try!",'blue')}, 2000);
            guessInput.value = null;
        }
        else
        {
            guessesLeft --;
            setMessage(`${guess} is not correct! YOU HAVE ${guessesLeft} GUESSES LEFT!`, 'red');
            guessInput.value = null;
            if(guessesLeft === 0)
            {
                setMessage(`RAN OUT OF GUESSES! YOU LOSE! The correct number was ${winningNum}`);
                guessInput.style.borderColor = "red";
                guessInput.style.color = "red";
                guessInput.disabled = true;
                guessBtn.disabled = true;
                setTimeout(function(){guessInput.disabled = false}, 2000);
                setTimeout(function(){guessBtn.disabled = false}, 2000);
                guessesLeft = 3;
                winningNum = Math.floor(Math.random() * 10) + 1;
                setTimeout(function(){guessInput.style.color = '#222'}, 2000);
                setTimeout(function(){guessInput.style.borderColor = '#222'}, 2000);
                setTimeout(function(){setMessage("Number has changed, give it another try!",'blue')}, 2000);
            }


        }
    }

    //Set message

function setMessage(msg, color)
{
    message.style.color = color;
    message.textContent = msg;
}