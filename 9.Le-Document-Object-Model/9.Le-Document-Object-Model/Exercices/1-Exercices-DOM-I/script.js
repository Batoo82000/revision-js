/*
    1. Sélectionnez et changez la couleur du <h1> en "plum" en JavaScript.
*/
const title = document.querySelector("h1")

title.style.color = "plum"


/*
    2. Sélectionnez le paragraphe sous le titre à l'aide de son ID.

    Deux façons de faire sont possibles.
*/

const paragraph = document.querySelector("#subtitle")
const paragraphById = document.getElementById("subtitle")
console.log(paragraph.textContent);
console.log(paragraphById.textContent);

/*
    3. Loggez le texte du troisième <li> dans la console.
*/

console.log(document.querySelector("ul li:nth-child(3)").textContent);
console.log(document.querySelector("ul li:nth-child(3)").innerHTML);
console.log(document.querySelector("ul li:nth-child(3)").innerText);

/*  
    4. Loggez le contenu de l'attribut "src" de l'image dans la console.
*/
const img = document.querySelector("img")
console.log(img.src);
console.log(img.getAttribute("src"));

/*
    5. Rajoutez un <li> contenant le texte "Nouveau LI !" à la liste. 
*/
const liste = document.querySelector("ul")

const li = document.createElement("li");
li.textContent = "Nouveau li"
liste.appendChild(li)