const hamberguerButton = document.querySelector(".nav-toggler");
const navigation = document.querySelector("nav");

hamberguerButton.addEventListener("click", toggleNav);

function toggleNav(){
    hamberguerButton.classList.toggle("active")
    navigation.classList.toggle("active")
}