const customMenu = document.querySelector(".custom-menu");
const customMenuBtns = document.querySelectorAll(".custom-menu button")

document.addEventListener("contextmenu", handleCustomMenu);

function handleCustomMenu(e) {
    e.preventDefault()
    customMenu.style.display = "block"
    customMenu.style.transform = `translate(${e.pageX}px, ${e.pageY}px)`
}

document.addEventListener("click", handleClick);

function handleClick() {
    customMenu.style.display = "none"
}

customMenuBtns.forEach(btn => btn.addEventListener("click", handleCustomMenuFeature))

function handleCustomMenuFeature(e) {
    e.stopPropagation()
    document.body.style.backgroundColor = `${e.target.dataset.color}`
}