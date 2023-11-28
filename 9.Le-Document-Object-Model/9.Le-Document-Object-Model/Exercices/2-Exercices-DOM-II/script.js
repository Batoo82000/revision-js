const data = [
    {
        content: "Lait",
        category: "Diary"
    },
    {
        content: "Fromage",
        category: "Diary"
    },
    {
        content: "Savon",
        category: "Wellness"
    },
    {
        content: "Pommes",
        category: "Fruits"
    },
    {
        content: "Poulet",
        category: "Meat"
    },
]

/*
    1. Écrivez une fonction fillList(list, data) qui transforme les données data en <li>.

    Un <li> par objet doit être créé.

    Chaque <li> contiendra un <p> avec le contenu de la propriété .content et un autre <p> avec le contenu de la propriété .category.

    Ajoutez ensuite chaque <li> dans la liste <ul>
*/
const shoppingList = document.querySelector(".list");
// data.forEach(data=> {
//     const li = document.createElement("li");
//     const liContent = `
//     <h2></h2>
//     <p></p>
//     `
//     li.innerHTML =liContent
//     li.querySelector("h2").textContent = ` ${data.content} `
//     li.querySelector("p").textContent = ` ${data.category} `
//     liste.appendChild(li)
// })

function fillList(list, data) {
    data.forEach(product => {
        const li = document.createElement("li");
        const liContent = `
        <p class="content"></p>
        <p class="category"></p>
        `
        li.innerHTML =liContent
        li.querySelector("p:nth-child(1)").textContent = product.content
        li.querySelector("p:nth-child(2)").textContent = product.category
        list.appendChild(li)
    });
}

fillList(shoppingList, data)



/*
    2. Supprimez maintenant le premier et dernier élément de la liste.
*/

document.querySelector(".list li:first-child").remove()
document.querySelector(".list li:last-child").remove()