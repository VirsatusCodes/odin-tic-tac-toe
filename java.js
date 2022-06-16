'use strict'

const playerFactory = (name, icon) => {  
   return {name, icon};
};
const players = [];
const AI = playerFactory('Computron 9000' ,'Termination');
players.push(AI);

const buttonSetup = (() => {
    const gridArray =Array.from(document.querySelectorAll('.box'));
    const startButton = document.querySelector('#start-button');
    const restartButton = document.querySelector('#restart-button');
    const playerTitleInput = document.querySelector('#player-title');
    const playerIconInput = document.querySelector('#player-icon');

    function newRound(box){
        box.textContent= '';
        boardDynamics.currentPlayer=players[1];
        boardDynamics.winningPlayer=0; 
    }

    function clearData(box) {
        box.textContent= '';
        boardDynamics.currentPlayer=players[1];
        boardDynamics.winningPlayer=0;
        players.splice(1, 1);
    };

    startButton.addEventListener('click', () => {
        if (playerTitleInput.value != '' &&  playerIconInput.value != '' && players.length < 2) {
            let user = playerFactory(playerTitleInput.value.toString(), playerIconInput.value.toString());
            players.push(user);
            boardDynamics.currentPlayer=players[1];
        } else return
    });

    restartButton.addEventListener('click', () => {
        gridArray.forEach(clearData);
    });  
    return{gridArray, clearData, newRound}
})();

const boardDynamics = (() => {
    let currentPlayer = players[1];
    let winningPlayer = 0;

    function boardManagement(box) {
        box.addEventListener('click', () => {
        if(box.textContent=== ''){

            if(boardDynamics.currentPlayer === players[1])   {
                box.textContent = players[1].icon;
                boardDynamics.currentPlayer = AI;
                boardWinChecker();
                boardTieChecker();
                if (boardDynamics.winningPlayer != 0) {
                    alert(boardDynamics.winningPlayer.name + ' Wins!');
                    buttonSetup.gridArray.forEach(buttonSetup.newRound);
                } else return   

            }else if (boardDynamics.currentPlayer === AI)    {
                
                box.textContent= AI.icon;
                boardDynamics.currentPlayer = players[1];
                boardWinChecker();
                boardTieChecker();
                if (boardDynamics.winningPlayer != 0) {
                    alert(boardDynamics.winningPlayer.name + ' Wins!');
                    buttonSetup.gridArray.forEach(buttonSetup.newRound);
                } else return

            }else return
        }
        else return
        });
    };

    /* theres got to be a better way to do this though i cant think of it in a short time */

    function boardTieChecker() {
        let tieTicker= 0;
        for(let i = 0; i<9; i++){
           if( buttonSetup.gridArray[i].textContent != '') tieTicker++;
        }
        if(tieTicker === 9 && boardDynamics.winningPlayer === 0) {
            alert('WOw a TIe!!!');
            buttonSetup.gridArray.forEach(buttonSetup.newRound);
        }
        else return
    }

    function boardWinChecker() {

        if(buttonSetup.gridArray[0].textContent === players[1].icon &&
        buttonSetup.gridArray[1].textContent === players[1].icon && 
        buttonSetup.gridArray[2].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[3].textContent === players[1].icon &&
        buttonSetup.gridArray[4].textContent === players[1].icon && 
        buttonSetup.gridArray[5].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[6].textContent === players[1].icon &&
        buttonSetup.gridArray[7].textContent === players[1].icon && 
        buttonSetup.gridArray[8].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[0].textContent === players[1].icon &&
        buttonSetup.gridArray[3].textContent === players[1].icon && 
        buttonSetup.gridArray[6].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[1].textContent === players[1].icon &&
        buttonSetup.gridArray[4].textContent === players[1].icon && 
        buttonSetup.gridArray[7].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[2].textContent === players[1].icon &&
        buttonSetup.gridArray[5].textContent === players[1].icon && 
        buttonSetup.gridArray[8].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[0].textContent === players[1].icon &&
        buttonSetup.gridArray[4].textContent === players[1].icon && 
        buttonSetup.gridArray[8].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];

        else if(buttonSetup.gridArray[2].textContent === players[1].icon &&
        buttonSetup.gridArray[4].textContent === players[1].icon && 
        buttonSetup.gridArray[6].textContent === players[1].icon) boardDynamics.winningPlayer = players[1];
        
        else if(buttonSetup.gridArray[0].textContent === AI.icon &&
        buttonSetup.gridArray[1].textContent === AI.icon && 
        buttonSetup.gridArray[2].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[3].textContent === AI.icon &&
        buttonSetup.gridArray[4].textContent === AI.icon && 
        buttonSetup.gridArray[5].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[6].textContent === AI.icon &&
        buttonSetup.gridArray[7].textContent === AI.icon && 
        buttonSetup.gridArray[8].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[0].textContent === AI.icon &&
        buttonSetup.gridArray[3].textContent === AI.icon && 
        buttonSetup.gridArray[6].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[1].textContent === AI.icon &&
        buttonSetup.gridArray[4].textContent === AI.icon && 
        buttonSetup.gridArray[7].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[2].textContent === AI.icon &&
        buttonSetup.gridArray[5].textContent === AI.icon && 
        buttonSetup.gridArray[8].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[0].textContent === AI.icon &&
        buttonSetup.gridArray[4].textContent === AI.icon && 
        buttonSetup.gridArray[8].textContent === AI.icon) boardDynamics.winningPlayer = AI;
        
        else if(buttonSetup.gridArray[2].textContent === AI.icon &&
        buttonSetup.gridArray[4].textContent === AI.icon && 
        buttonSetup.gridArray[6].textContent === AI.icon) boardDynamics.winningPlayer = AI;
            
        else return;
    }

    buttonSetup.gridArray.forEach(boardManagement);
    return{currentPlayer,winningPlayer}
})();
