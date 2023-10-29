let userInput =''; 
let compInput = '';
let player = document.getElementById("player")
let cpu = document.getElementById('cpu')
let winner = document.getElementById("result")
let win = 0; //win++
let loss = 0; //loss++

  function playerChoice (choice) {
    userInput = choice
    computerChoice ();
   
    
}

 function computerChoice () {
    let randNum = Math.floor(Math.random()*3);
    switch (randNum){
        case 0: 
            compInput = 'rock';
            break;
        case 1:
            compInput = 'paper';
            break;
        case 2:
            compInput = 'scissors'
            break;
        default:
            break;
            
    }
    determineWinner();

}
//chooses cpu's choice//

 function determineWinner () {
    if (userInput === compInput) {
        winner.textContent = "TIE!";
    } else if (
        (userInput === 'rock' && compInput === 'scissors') ||
        (userInput === 'paper' && compInput === 'rock') ||
        (userInput === 'scissors' && compInput === 'paper')
    ){
        winner.textContent = 'YOU WIN!'
        win++
    } else {
        
        winner.textContent = 'YOU LOSE!';
        loss++
        
    }

updateStats();
}
// compares user choice vs cpu choice to determine winner//

function updateStats() {
    player.textContent = `Player: ${userInput}`;
    cpu.textContent = `CPU: ${compInput}`;
    document.getElementById("win-count").textContent = `Wins: ${win}`;
    document.getElementById("loss-count").textContent = `Losses: ${loss}`;
}
// displays the users choice and cpu choice and displays wins and loss count//