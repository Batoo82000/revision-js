/*
  L'event delegation permet d'avoir un code plus propre et de moins surcharger le navigateur d'écouteurs d'évènement.
*/

//solution numéro 1 : non optimsée

// const cells = document.querySelectorAll(".cell")
// const txtInfo = document.querySelector(".txt-info")

// cells.forEach(cell => cell.addEventListener("click", handleClick))

// function handleClick(e){
//   console.log(e);
//   txtInfo.textContent = e.target.textContent
// } 

//solution numéro 2 : optimsée

const grid = document.querySelector(".grid")
const txtInfo = document.querySelector(".txt-info")

grid.addEventListener("click", handleClick)

function handleClick(e) {
  e.stopPropagation()
  console.log(e);
  if(e.target.classList.contains("cell")){
    txtInfo.textContent = e.target.textContent
  }
}
