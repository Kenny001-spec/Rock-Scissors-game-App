const choices = document.querySelectorAll('.choice');
const score =  document.getElementById('score');
const result = document.getElementById('result');
const restart = document.getElementById('restart');
const modal = document.querySelector('.modal');


const scoreBoard = {
    player:  0,
    computer: 0

}

// Play Game

const play  = (e) => {
    const playChoice = e.target.id;
    restart.style.display = 'inline-block';
    const computerChoice = getComputerChoice();
    const winner = getWinner(playChoice, computerChoice);
    console.log(playChoice, computerChoice, winner);
    showWinner(winner, computerChoice);

}


// Computer Choices
const getComputerChoice = () => {
    const rand = Math.random();
    if (rand <= 0.34) {
        return 'rock';
    } else if (rand <= 0.67) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


// Get Game Winnner
const getWinner = (player, computer) => {
    if (player === computer) {
        return 'draw';

    } else if (player === 'rock') {
        if (computer === 'paper') {
            return 'computer';

        } else {
            return 'player';
        }
    } else if (player === 'paper') {
        if (computer ===  'scissors') {
            return 'computer';
        } else {
            return 'player';
        }
    } else if (player === 'scissors') {
        if (computer === 'rock') {
            return 'computer';
        } else {
            return 'player';
        }
    }

}

// Show Winner

function showWinner(winner, computerChoice) {
    if(winner === 'player') {
        // Show Us Player Result Score
        scoreBoard.player++;
        // Show Modal Result Score
        result.innerHTML = `
        <h1 class="text-win">You Win</h1>
        <i class="fas fa-hand${computerChoice}
        fa-10x"></i>

        <p>Computer Chose <strong>${computerChoice}</p>
        `
        
    }else if (winner === 'computer') {
        // incrrease Player score
        scoreBoard.player++
        // Show Modal result
        result.innerHTML = `<h1 class="text-win">You Lose</h1>
        <i class="fas fa-hand${computerChoice}
        fa-10x"></i>
        
        <p>Computer Chose <strong>${computerChoice}</p>
        `;
    } else {
        result.innerHTML = `
        <h1>Draw</h1>
        <i class="fas fa-hand${computerChoice}
        fa-10x"></i>

        <p>Computer Chose <strong>${computerChoice}</p>
        `;
    }

    // Show Score 
    score.innerHTML = `
    <p>player: ${scoreBoard.player}</p>
    <p>computer: ${scoreBoard.computer}</p>
    `;
    modal.style.display = 'block';
    
}


// Restat Game Function
const restartGame = () => {
    scoreBoard.player = 0;
    scoreBoard.computer = 0;
    score.innerHTML = `
    <p>Player: 0</p>
    <p>Computer: 0</p>
    `;
}


// Clear Modal Function
function clearModal (e) {
    if (e.target == modal) {
        modal.style.display = 'none';
    }
}


//Event Listener
choices.forEach(choice => choice.addEventListener('click', play));
window.addEventListener('click', clearModal);
restart.addEventListener('click', restartGame);
