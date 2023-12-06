const grid = document.querySelector(".grid")

function getPost(url) {
    fetch(url)
    .then (response => {
        if(!response.ok) throw Error (`${response.status}`)
        return response.json()
    })
    .then(data => {
        console.log(data);
        createPost(data)
    })
    .catch (error => {
        const p = document.createElement("p");
        p.textContent = error.message;
        grid.appendChild(p)
    })
}

getPost("https://jsonplaceholder.typicode.com/posts")

function createPost (posts){

posts.forEach(post => {
    const item = document.createElement("div")
    item.className = "item"
    item.innerHTML = `<h2></h2>
    <a href="#">Lire l'article</a>`
    item.querySelector("h2").textContent = post.title
    grid.appendChild(item)
});
}