/* 
    L'évènement scroll se déclenche quand le contenu de l'élément sur lequel il est attaché subit un scroll.
*/

const info = document.querySelector(".info")
console.log(info);
document.addEventListener("scroll", handleScroll)

function handleScroll(e) {
  console.log(e)
  info.textContent = `Body : ${window.scrollY}`
}


/*
  L'évènement resize est disponible seulement sur l'objet window.
  Il se déclenche quand on réduit la fenêtre.  
*/

window.addEventListener("resize", () => console.log("Resized !"))
console.log(window.innerHeight);
console.log(window.innerWidth);