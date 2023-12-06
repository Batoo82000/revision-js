async function getCATImg(url) {
    
    let imgData;
    
    try {
        const response = await fetch(url)
    
        if(!response.ok) throw Error(`${response.status}`) // Permet de récupérer les erreurs entre 400 et 499, car le catch ne le peux pas

        imgData = await response.json()
    }
    catch(error) {
        document.querySelector(".error-msg").textContent = `Error : ${error.message}`
        console.dir(error);
    }
    if(imgData){
        createImg(imgData)
    }
}

getCATImg("https://api.thecatapi.com/v1/images/serch")

function createImg(imgData) {
    console.log(imgData);
    const img = document.createElement("img")
    img.src = imgData[0].url
    document.body.appendChild(img)
}