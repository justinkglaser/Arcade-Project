// Tic-Tac-Toe

// What would the starting state look like?

    // empty tic-tac-toe board - two vertical/horizontal lines
    // reset/start button
    // entering your name
    // randomely assigning you X or O
    // choosing option for different difficulties if going for stretch goals
    // win property to keep track of wins

// What things do we need to keep track of as players play?

    // Who's turn it is to play next
    // If a move is being selected
    // If a move results in a win
    // If a move by computer will block a win for the human opponent (track best move for computer)
    // If a legal move is available
    // win property to keep track of wins


// What functions might be helpful?

    // if functions
    // rand functions
    // loops
    // event listeners
    // initialize game start
    // flow of game
    // how the game ends
    // resetting the game when finished
    // updating html (CSS if changing color/border/etc)
    // switching turns
    // check status of X/O's on grid
    // check for a win/losing game


const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    " ",  " ", " ",  " ", " ",  " ", " ",  " ", " ",
]

let go = "circle"
infoDisplay.textContent = "Circle Goes First!"


function createBoard() {
    startCells.forEach ((_cell, index) => {
        const cellElement = document.createElement ("div")
        cellElement.classList.add ("square")
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
        
    })    
}
createBoard()

function addGo (i){
    const goDisplay = document.createElement("div")
    goDisplay.classList.add(go)
    i.target.append(goDisplay)
    go = go === "circle" ? "cross" : "circle"
    // if (go === "circle") {
    //      go === "cross"
    // } else {
    //      go === "circle"
    // }
    infoDisplay.textContent = "It is now " + go + "'s go."
    i.target.removeEventListener("click", addGo)
    checkScore ()
}

function checkScore() {
    const allSquares = document.querySelector(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6] 
    ]

    console.log(allSquares[0])

    winningCombos.forEach(array => {
       let circleWins = array.every(cell => 
            allSquares[cell].firstChild?.classList.contains("circle"))
    
        if (circleWins) {
            infoDisplay.textContent = "Circle Wins!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
         }    
    })

     winningCombos.forEach(array => {
     let crossWins = array.every(cell => 
          allSquares[cell].firstChild?.classList.contains("cross"))
 
      if (crossWins) {
          infoDisplay.textContent = "Cross Wins!"
         allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
         return
     }    
  })
}