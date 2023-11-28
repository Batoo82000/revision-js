/*  
    Les élément imbriqués de notre page HTML deviennent des objets imbriqués du DOM après analyse d'un navigateur.

    <div>
        <p>Hello</p>
    </div>
    
    =>

    {
        tag: "div",
        content: "",
        children: [
            {
                tag: "p",
                content: "Hello"
            },
            ...
        ]
    }
    // 🔼 Ceci est une image pour vous aider à comprendre, ça ne représente pas les propriétés exactes utilisées.

    Découvrons les propriétés pratiques liées aux relations parents / enfants.
*/

// const card = document.querySelector(".card")

// console.log(card.childNodes);
// console.log(card.children);
// console.log(card.children[1]);
// console.log(card.firstChild);
// console.log(card.firstElementChild);
// console.log(card.lastChild);
// console.log(card.lastElementChild);

const title = document.querySelector("h2")

console.log(title);
// console.log(title.nextSibling);
// console.log(title.nextElementSibling);
// console.log(title.previousSibling);
// console.log(title.previousElementSibling);

console.log(title.parentNode);
console.log(title.parentElement);
console.log(title.parentElement.parentElement);