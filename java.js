'use strict'

const playerFactory = (number, icon, name) => {
    const sayHi = () => console.log('hi');
   return {number, icon, sayHi, name};
};

const playerOne = playerFactory(1, 'X', 'Bob');
const playerTwo = playerFactory(2, 'O', 'Carl');


const buttonSetup = (() => {
    const gridArray =Array.from(document.querySelectorAll('.box'))
    const restartButton = document.querySelector('#restart-button');
    const oButton = document.querySelector('#o');
    const xButton = document.querySelector('#x');

    function clearData(box) {
        box.textContent= '';
        boardDynamics.currentPlayer=0;
        boardDynamics.winningPlayer=0;
    };

    xButton.addEventListener('click', () => {
        boardDynamics.currentPlayer= playerOne
    });

    oButton.addEventListener('click', () => {
        boardDynamics.currentPlayer= playerTwo
    });

    restartButton.addEventListener('click', () => {
        gridArray.forEach(clearData);
    });  
    return{gridArray, clearData}
})();

const boardDynamics = (() => {
    let currentPlayer = 0;
    let winningPlayer = 0;

    function addEvent(box) {
        box.addEventListener('click', () => {
        if(box.textContent=== ''){

            if(boardDynamics.currentPlayer === playerOne)   {
                box.textContent = playerOne.icon;
                boardDynamics.currentPlayer = playerTwo;
                boardWinChecker();
                boardTieChecker();
                if (boardDynamics.winningPlayer != 0) {
                    alert(boardDynamics.winningPlayer.name + ' Wins!');
                    buttonSetup.gridArray.forEach(buttonSetup.clearData);
                } else return   

            }else if (boardDynamics.currentPlayer === playerTwo)    {
                
                box.textContent= playerTwo.icon;
                boardDynamics.currentPlayer = playerOne;
                boardWinChecker();
                boardTieChecker();
                if (boardDynamics.winningPlayer != 0) {
                    alert(boardDynamics.winningPlayer.name + ' Wins!');
                    buttonSetup.gridArray.forEach(buttonSetup.clearData);
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
        if(tieTicker === 9) alert('WOw a TIe!!!')
        else return
    }

    function boardWinChecker() {

        if(buttonSetup.gridArray[0].textContent === playerOne.icon &&
        buttonSetup.gridArray[1].textContent === playerOne.icon && 
        buttonSetup.gridArray[2].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[3].textContent === playerOne.icon &&
        buttonSetup.gridArray[4].textContent === playerOne.icon && 
        buttonSetup.gridArray[5].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[6].textContent === playerOne.icon &&
        buttonSetup.gridArray[7].textContent === playerOne.icon && 
        buttonSetup.gridArray[8].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[0].textContent === playerOne.icon &&
        buttonSetup.gridArray[3].textContent === playerOne.icon && 
        buttonSetup.gridArray[6].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[1].textContent === playerOne.icon &&
        buttonSetup.gridArray[4].textContent === playerOne.icon && 
        buttonSetup.gridArray[7].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[2].textContent === playerOne.icon &&
        buttonSetup.gridArray[5].textContent === playerOne.icon && 
        buttonSetup.gridArray[8].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[0].textContent === playerOne.icon &&
        buttonSetup.gridArray[4].textContent === playerOne.icon && 
        buttonSetup.gridArray[8].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;

        else if(buttonSetup.gridArray[2].textContent === playerOne.icon &&
        buttonSetup.gridArray[4].textContent === playerOne.icon && 
        buttonSetup.gridArray[6].textContent === playerOne.icon) boardDynamics.winningPlayer = playerOne;
        
        else if(buttonSetup.gridArray[0].textContent === playerTwo.icon &&
        buttonSetup.gridArray[1].textContent === playerTwo.icon && 
        buttonSetup.gridArray[2].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[3].textContent === playerTwo.icon &&
        buttonSetup.gridArray[4].textContent === playerTwo.icon && 
        buttonSetup.gridArray[5].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[6].textContent === playerTwo.icon &&
        buttonSetup.gridArray[7].textContent === playerTwo.icon && 
        buttonSetup.gridArray[8].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[0].textContent === playerTwo.icon &&
        buttonSetup.gridArray[3].textContent === playerTwo.icon && 
        buttonSetup.gridArray[6].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[1].textContent === playerTwo.icon &&
        buttonSetup.gridArray[4].textContent === playerTwo.icon && 
        buttonSetup.gridArray[7].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[2].textContent === playerTwo.icon &&
        buttonSetup.gridArray[5].textContent === playerTwo.icon && 
        buttonSetup.gridArray[8].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[0].textContent === playerTwo.icon &&
        buttonSetup.gridArray[4].textContent === playerTwo.icon && 
        buttonSetup.gridArray[8].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
        
        else if(buttonSetup.gridArray[2].textContent === playerTwo.icon &&
        buttonSetup.gridArray[4].textContent === playerTwo.icon && 
        buttonSetup.gridArray[6].textContent === playerTwo.icon) boardDynamics.winningPlayer = playerTwo;
            
        else return;
    }

    buttonSetup.gridArray.forEach(addEvent);
    return{currentPlayer,winningPlayer}
})();
