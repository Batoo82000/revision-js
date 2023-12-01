/*
    Prévenez le comportement par défaut du formulaire afin de récupérer les données écrites dans les inputs et les afficher dans les paragraphes correspondants.
*/
const form = document.querySelector("form")

const inputs = document.querySelectorAll("form input")

const firstNameText = document.querySelector(".firstname")
const lastNameText = document.querySelector(".lastname")

form.addEventListener("submit", handleSubmit)

console.log(inputs);

function handleSubmit(e){
    e.preventDefault()

    firstNameText.textContent = `Votre prénom : ${inputs[0].value}`
    lastNameText.textContent = `Votre nom : ${inputs[1].value}`

    // form.reset()
    // ou
    inputs.forEach(input => input.value = "")
}
