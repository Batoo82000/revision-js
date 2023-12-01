/*
    Les "touch events" permettent de prendre en compte le "clic" d'un doigt sur un écran tactile.
*/

document.addEventListener("touchstart", ()=> console.log("touchstart"))
document.addEventListener("touchend", ()=> console.log("touchend"))
document.addEventListener("touchmove", ()=> console.log("touchmove"))
document.addEventListener("click", ()=> console.log("click"))