'use strict'

const playerFactory = (playerNumber, playerIcon) => {
    const sayHi = () => console.log('hi');
   return {playerNumber, playerIcon, sayHi};
};

const playerOne = playerFactory(1, 'X');
const playerTwo = playerFactory(2, 'O');


const buttonSetup = (() => {
    const gridArray =Array.from(document.querySelectorAll('.box'))
    const restartButton = document.querySelector('#restart-button');
    const oButton = document.querySelector('#o');
    const xButton = document.querySelector('#x');

    function clearBoard(box) {
        box.textContent= '';
    };

    xButton.addEventListener('click', () => {
        boardDynamics.currentPlayer= playerOne
    });

    oButton.addEventListener('click', () => {
        boardDynamics.currentPlayer= playerTwo
    });

    restartButton.addEventListener('click', () => {
        gridArray.forEach(clearBoard);
    });  
})();

const boardDynamics = (() => {
    let currentPlayer = 0
    const gridArray =Array.from(document.querySelectorAll('.box'))

    function addEvent(box) {
        box.addEventListener('click', () => {
            if(box.textContent=== ''){
            if(boardDynamics.currentPlayer === playerOne){
                box.textContent = playerOne.playerIcon;
                boardDynamics.currentPlayer = playerTwo;
            }else if (boardDynamics.currentPlayer === playerTwo){
                box.textContent= playerTwo.playerIcon;
                boardDynamics.currentPlayer = playerOne;
            }else return
        }
        else return
        });
    };
    gridArray.forEach(addEvent);
    return{currentPlayer,}
})();



