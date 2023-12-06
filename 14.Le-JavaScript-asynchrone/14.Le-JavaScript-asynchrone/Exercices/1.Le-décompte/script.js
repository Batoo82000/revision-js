const displayedDate = document.querySelector('h2');


function countDown () {
    
    let now = new Date()
    const countDown = new Date("December 20, 2023")
    const distance = countDown - now;

    const days = Math.floor(distance/(1000*60*60*24))
    const hours = Math.floor((distance%(1000*60*60*24))/(1000*60*60))
    const minutes = Math.floor((distance%(1000*60*60))/(1000*60))
    const seconds = Math.floor((distance%(1000*60))/(1000))
    displayedDate.textContent = `Days : ${days}, Hours : ${hours}, Minutes : ${minutes}, Seconds : ${seconds}`
}

setInterval(
    countDown, 1000
) 