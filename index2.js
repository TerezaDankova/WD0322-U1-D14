// create an numbers from 1-76 
const generateMainBoard = function() {
  const board = document.querySelector('.main-board');
  for (let i = 0; i < 76; i++) {
  board.innerHTML += `<div class='cell'>${i + 1}</div>`;
 }
};
// create an array in range [1,....76]
const fillArray = function() {
  const arr = [];
  for(let i = 0; i < 76; i++) {
    arr.push(i + 1)
  }
  return arr
};
// generate random index in the range of the array length


// get an element in the array under the index
// remove the element form the array

const getRandomNumber = function(range) {
  const randIndex = Math.floor(Math.random()*range.length);
  const random = range.splice(randIndex, 1)[0]
  return random;
};

// generating an random number
const generateRandomNumber = function(range) {
  const random = getRandomNumber(range);
  const randNumbDiv = document.getElementById('randomNum');
  randNumbDiv.innerText = 'Number: '+ random;
  const cells = document.querySelectorAll('.main-board .cell'); //giving a background color to cell
  cells[random - 1].classList.add('highlight'); //background color from class we created

  const userCells = document.querySelectorAll('.user-board .cell')
  userCells.forEach(cell => {
    if (parseInt(cell.innerText) === random){
      cell.classList.add('highlight');
    }
  })
}

const generateUserBoards = function() {
  const usersNumber = document.getElementById('usersNumber').value;
  const container = document.querySelector('.container')
  if(parseInt(usersNumber)>0) {
    for(let i = 0; i <parseInt(usersNumber); i++) {
      const range = fillArray();
      const board = document.createElement('div') //creating and user boards 
      board.className = 'board user-board';  //creating and user boards with class just made in css
      for(let i = 0; i <24; i++){  //generating a random boards
        const random = getRandomNumber(range);
        board.innerHTML += `<div class='cell'>${random}</div>`; 
      }
      container.appendChild(board);
    }
  }
};

// it shows emediatly when we load the page 
window.onload = function() {
  generateMainBoard();
  const randBtn = document.getElementById("randBtn");
  const range = fillArray();
  randBtn.addEventListener('click', function(){
    generateRandomNumber(range);
  })
  const userBoardBtn = document.getElementById('userBoardBtn')
  userBoardBtn.onclick = generateUserBoards;
};