let sentence = ["Hello ", "my ", "name ", "is ", "Ugur"]
let greetingEl = document.querySelector("#greeting-el")

for (let i = 0; i <= sentence.length - 1; i++) {
    greetingEl.textContent += sentence[i]
}