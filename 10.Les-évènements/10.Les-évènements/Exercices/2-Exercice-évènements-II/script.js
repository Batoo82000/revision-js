/*
    Faites-en sorte que le cercle suive votre souris.
    Le pointeur de votre souris doit se trouver parfaitement au milieu du cercle.
*/
const mousePosition = document.querySelector(".mousePosition")
const circle = document.querySelector(".circle")
console.log(mousePosition);
document.addEventListener("mousemove", handleMousePosition)

function handleMousePosition(e) {
    console.log(`x : ${e.pageX}px, y : ${e.pageY}px`)
    circle.style.transform = `translate(calc(${e.pageX}px - 50%), calc(${e.pageY}px - 50%))`
}