/* 
    Voici les évènements de pointage : click, dblclick, mouseup, mousedown.

    L'objet d'évènement fourni à la callback nous donnera donc des informations spécifiques au pointage.
*/

// document.addEventListener("click", handleClick) // réagit à l'évènement click de la souris
document.addEventListener("dblclick", handleClick) // réagit à l'évènement doucle click de la souris
// document.addEventListener("mousedown", handleClick) // réagit au moment ou l'on enfonce le bouton de la souris
// document.addEventListener("mouseup", handleClick) // réagit à quand on lève le doigt du bonton après avoir cliqué.

function handleClick(e){
    console.log(e);
    document.querySelector(".clic-info").textContent = `Event : ${e.type}, X : ${e.pageX}, Y : ${e.pageY}`
}


/* 
    Il existe également d'autres évenements en rapport avec la souris, sans le clic.

    Notamment : mouseover, mousemove, mouseout, mouseenter, mouseleave, wheel 
*/
    
const box = document.querySelector(".box")

// box.addEventListener("mousemove", ()=> console.log("mouse move")) 
// réagit au mouvement de la souris
// box.addEventListener("mouseenter", ()=> console.log("mouse enter"))
// réagit au moment ou la souris pénètre dans l'élément écouté.
// box.addEventListener("mouseleave", ()=> console.log("mouse leave"))
// réagit au moment ou la souris sort de l'élément écouté.
// box.addEventListener("mouseover", ()=> console.log("mouse over"))
// réagit au moment ou la souris passe sur l'élément ou un de ses enfant
box.addEventListener("mouseout", ()=> console.log("mouse out"))
// réagit au moment ou la souris de l'élément ou un de ses enfant