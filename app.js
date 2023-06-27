const game = () => {
    let pScore = 0;
    let cScore = 0;

    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');

        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
    };

    //Play Match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand')
        const computerHand = document.querySelector('.computer-hand');
        //Computer options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option=> {
            option.addEventListener("click", function () {
                //Computer Choice
                const computerNumber = (Math.random() * 2).toFixed();
                const computerChoice = computerOptions[computerNumber]
                //call compare hands
                compareHands(this.textContent, computerChoice)

                //update Images
                playerHand.src = `./img/${this.textContent}.png`;
                computerHand.src = `./img/${computerChoice}.png`
            })
        })
    };

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p')
        const computerScore = document.querySelector('.computer-score p')
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector('.winner')

        if(playerChoice === computerChoice) {
            winner.textContent = "it's a tie";
            return;
        }

        if(playerChoice === 'rock') {
            if(computerChoice === 'scissors'){
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return;
            } else {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return;
            }
        }


        if(playerChoice === 'paper') {
            if(computerChoice === 'rock'){
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return;
            } else {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return;
            }
        }

        if(playerChoice === 'scissors') {
            if(computerChoice === 'paper'){
                winner.textContent = 'Player Wins'
                pScore++
                updateScore()
                return;
            } else {
                winner.textContent = 'Computer Wins'
                cScore++
                updateScore()
                return;
            }
        }
    }

    // call the inner function
    startGame();
    playMatch();
}
// start the game function
game();