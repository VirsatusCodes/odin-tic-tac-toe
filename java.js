'use strict'
const xButton = document.querySelector('#x');
const oButton = document.querySelector('#o');
/* const restartButton = document.querySelector('#restart-button') */


const gridArray =Array.from(document.querySelectorAll('.box'))

const playerFactory = (playerNumber, playerIcon) => {
    const sayHi = () => console.log('hi');
   return {playerNumber, playerIcon, sayHi};
};

const playerOne = playerFactory(1, 'X');
const playerTwo = playerFactory(2, 'O');

/*  const restartButton = document.querySelector('#restart-button');
 function clearBoard(box) {
    box.textContent= '';
};
restartButton.addEventListener('click', () => {
    gridArray.forEach(clearBoard);
});  */ 

const setupRestartButton = (() => {
    const gridArray =Array.from(document.querySelectorAll('.box'))
    const restartButton = document.querySelector('#restart-button');

    function clearBoard(box) {
        box.textContent= '';
    };

    restartButton.addEventListener('click', () => {
        gridArray.forEach(clearBoard);
    });  
})();

const setupObutton = (() => {
    let currentPlayer = 0
    const gridArray =Array.from(document.querySelectorAll('.box'))
    const oButton = document.querySelector('#o');

    function addEvent(box) {
        box.addEventListener('click', () => {
            if(box.textContent=== ''){
            if(setupObutton.currentPlayer === playerOne){
                box.textContent = 'X';
                setupObutton.currentPlayer = playerTwo;
            }else if (setupObutton.currentPlayer === playerTwo){
                box.textContent= 'O';
                setupObutton.currentPlayer = playerOne;
            }else return
        }
        else return
        });
    };
    gridArray.forEach(addEvent);
    return{currentPlayer,}
})();

const toggleListener = (() => {
    const oButton = document.querySelector('#o');
    const xButton = document.querySelector('#x');

    xButton.addEventListener('click', () => {
        setupObutton.currentPlayer= playerOne
    });

    oButton.addEventListener('click', () => {
        setupObutton.currentPlayer= playerTwo
    });
})();


/* function addEvent(box) {
    box.addEventListener('click', () => {
        oButton.textContent = 'test'
    });
}

gridArray.forEach(addEvent) */