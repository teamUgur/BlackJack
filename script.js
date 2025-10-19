let firstCard = 2
let secondCard = 7
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(message)

let gameStartEl = document.getElementById("start-game-btn")
function startGame() {
    if (sum <= 20) {
    message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJAck!"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive =  false
    }
    console.log(message)
}



