const emojis = ["😠","🙁","😐","🙂","😁"]
const emojiText = document.querySelector(".emoji-value")
const range = document.querySelector(".range-input")

range.addEventListener("input", handleRange)

function handleRange(e) {
    // 1ere méthode
    // emojiText.textContent = emojis[e.target.value -1]
    // 2eme méthode
    emojiText.textContent = `${emojis[e.target.value -1]}`
}