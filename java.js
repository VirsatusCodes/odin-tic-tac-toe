'use strict'

const playerFactory = (name, icon) => {  
   return {name, icon};
};

const buttonSetup = (() => {
    const gridArray =Array.from(document.querySelectorAll('.box'));
    const startButton = document.querySelector('#start-button');
    const restartButton = document.querySelector('#restart-button');
    const playerTitleInput = document.querySelector('#player-title');
    const playerIconInput = document.querySelector('#player-icon');
    
    function newRound(box){
        box.textContent= '';
        boardDynamics.currentPlayer=boardDynamics.players[1];
        boardDynamics.winningPlayer=0; 
    }
    /* could setup inheritence here */
    function clearData(box) {
        box.textContent= '';
        boardDynamics.currentPlayer=boardDynamics.players[1];
        boardDynamics.winningPlayer=0;
        boardDynamics.players.splice(1, 1);
    };

    startButton.addEventListener('click', () => {
        if (playerTitleInput.value != '' &&  playerIconInput.value != '' && boardDynamics.players.length < 2) {
            let user = playerFactory(playerTitleInput.value.toString(), playerIconInput.value.toString());
            boardDynamics.players.push(user);
            boardDynamics.currentPlayer=boardDynamics.players[1];
        } else return
    });

    restartButton.addEventListener('click', () => {
        gridArray.forEach(clearData);
    });  
    return{gridArray, clearData, newRound}
})();

const boardDynamics = (() => {
    const players = [];
    const AI = playerFactory('Computron 9000' ,'Termination');
    players.push(AI);
    let currentPlayer = players[1];
    let winningPlayer = 0;

    function boardManagement(box) {
        box.addEventListener('click', () => {
        if(box.textContent=== ''){

            if(boardDynamics.currentPlayer === boardDynamics.players[1])   {
                box.textContent = boardDynamics.players[1].icon;
                boardDynamics.currentPlayer = boardDynamics.players[0];
                aICreation.AIController();
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

        if(buttonSetup.gridArray[0].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[1].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[2].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[3].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[5].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[6].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[7].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[0].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[3].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[6].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[1].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[7].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[2].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[5].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[0].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];

        else if(buttonSetup.gridArray[2].textContent === boardDynamics.players[1].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[1].icon && 
        buttonSetup.gridArray[6].textContent === boardDynamics.players[1].icon) boardDynamics.winningPlayer = boardDynamics.players[1];
        
        else if(buttonSetup.gridArray[0].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[1].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[2].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[3].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[5].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[6].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[7].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[0].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[3].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[6].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[1].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[7].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[2].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[5].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[0].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[8].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
        
        else if(buttonSetup.gridArray[2].textContent === boardDynamics.players[0].icon &&
        buttonSetup.gridArray[4].textContent === boardDynamics.players[0].icon && 
        buttonSetup.gridArray[6].textContent === boardDynamics.players[0].icon) boardDynamics.winningPlayer = boardDynamics.players[0];
            
        else return;
    }

    buttonSetup.gridArray.forEach(boardManagement);
    return{currentPlayer,winningPlayer, players}
})();

const aICreation = (() => {
    const difficultyChoice = document.querySelector('#difficulty-choice');
    let value = getRandomInt(0,8);
    let tieTicker= 0;

    function boardTieChecker() {
        tieTicker= 0;
        for(let i = 0; i<9; i++){
           if( buttonSetup.gridArray[i].textContent != '') tieTicker++;
        }
    };

    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
      };

   /*^  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random */
    

    function AIRandomMove() {
    if(buttonSetup.gridArray[value].textContent === '') {
     return 'its over';
      }
      return value = getRandomInt(0,8),  AIRandomMove();
  };

    function AIController() {
        boardTieChecker();
    if(difficultyChoice.value === 'easy' && tieTicker < 9) {

        if(boardDynamics.currentPlayer === boardDynamics.players[0]) {

            AIRandomMove();
            buttonSetup.gridArray[value].textContent= boardDynamics.players[0].icon;
            boardDynamics.currentPlayer = boardDynamics.players[1];
        }else return
    
    }else return
    
    }return{AIController}
})();