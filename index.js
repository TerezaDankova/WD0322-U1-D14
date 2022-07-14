const numberOfCells = 76

function displayCells() {
    let cellsContainer = document.getElementById('cells-container')
    for (let cellCount = 1 ; cellCount<=numberOfCells ; cellCount++)
    {
        let cellNode = document.createElement('div')
        let cellText = document.createElement('span')
        cellNode.appendChild(cellText)
        cellText.innerText = cellCount
        cellNode.classList.add('cell')
        cellsContainer.appendChild(cellNode)
    }
}
displayCells();


function randomNumber(){
    let cellList = document.querySelectorAll('.cell')
    let randomNumberNode = Math.floor((Math.random() * 76) +1);
    let buttonValue = document.getElementById('button')
    buttonValue.value = randomNumberNode
    cellList[randomNumberNode-1].style.backgroundColor='#436867'
}
randomNumber();