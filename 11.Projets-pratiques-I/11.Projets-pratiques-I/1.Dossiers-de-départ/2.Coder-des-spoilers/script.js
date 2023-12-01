const jsSpoilers = document.querySelectorAll(".js-spoiler")

jsSpoilers.forEach(jsSpoiler => addEventListener("click", handleClick))

function handleClick(e) {
    e.target.classList.toggle("js-spoiler-revealed")
}