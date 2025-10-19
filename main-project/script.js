let firstCard = 3
let secondCard = 7
let cards = [firstCard, secondCard]
let sum = firstCard + secondCard
let hasBlackJack = false
let isAlive = true
let message = ""

console.log(message)

let messageEl = document.getElementById("messageEl")
let sumEl = document.querySelector("#sumEl")
let cardEl = document.querySelector("#cardEl")

function startGame() {
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1]
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJAck!"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive =  false
    }
    messageEl.textContent = message
}

function newCard() {
    let thirdCard = 11
    sum += thirdCard
    cards.push(thirdCard)
    console.log("Drawing a new card from the deck")
    cardEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + thirdCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "Wohoo! You've got BlackJAck!"
        hasBlackJack = true
    } else {
        message = "You are out of the game"
        isAlive =  false
    }
    messageEl.textContent = message
}



