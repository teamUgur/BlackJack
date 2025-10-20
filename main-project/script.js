let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("messageEl")
let sumEl = document.querySelector("#sumEl")
let cardEl = document.querySelector("#cardEl")

let player = {
    name: "Ugur",
    chips: 145
}

let playerNameEl = document.querySelector("#player-el")
playerNameEl.textContent = player.name + ": $" + player.chips

function getRandom() {
    let randomNumber = Math.floor(Math.random() * 13) + 1
    if (randomNumber === 1) {
        return 11
    } else if (randomNumber > 10) {
        return 10
    } else {
        return randomNumber
    }
}

function startGame() {
    let firstCard = getRandom()
    let secondCard = getRandom()
    sum = firstCard + secondCard
    isAlive = true
    cards.push(firstCard, secondCard)
    renderGame()
}

function renderGame() {
    cardEl.textContent = "Cards: "
    for (let i = 0; i < cards.length; i++) {
        cardEl.textContent += cards[i] + " "
    }
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
    if (hasBlackJack === false && isAlive) {
        let thirdCard = getRandom()
        sum += thirdCard
        cards.push(thirdCard)
        renderGame()
    } else {
        let len = cards.length - 1
        cards.splice(0, len)
    }
}



