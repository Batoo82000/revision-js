/*
    1. Faites-en sorte que le premier bouton nous ramène tout en haut du site lorsqu'on clique dessus.
*/

const toTheTopBtn = document.querySelector(".push-top-button")

toTheTopBtn.addEventListener("click", handleScrollTop)

// Méthode 1
// function handleScrollTop() { 
//     document.documentElement.scrollTop = 0
//  }
// Méthode 2
function handleScrollTop() { 
    window.scrollTo({
        top : 0,
        behavior: "smooth"
    })
 }
// Méthode 3
// function handleScrollTop() { 
//     document.documentElement.scrollIntoView({
//         behavior: "smooth",
//         block : "start"
//     })
//  }


/*
    2. Utilisez la méthode .scrollTo() pour scroller jusqu'au milieu de la section newsletter lorsqu'on clique sur le bouton .scroll-to-newsletter.

    C'est simplement pour s'exercer, le rendu ne va pas être optimal en termes d'UX mais ce n'est pas ce qui compte ici. 👍
*/

const scrollToNewsletterBtn = document.querySelector(".scroll-to-newsletter")

scrollToNewsletterBtn.addEventListener("click", slideToMidNewsletter)

function slideToMidNewsletter() {
    const newsletterDimension = document.querySelector(".newsletter").getBoundingClientRect()
    const newsletterTopPosition = window.scrollY + newsletterDimension.top

    window.scrollTo({
        top: newsletterTopPosition + (newsletterDimension.height /2),
        behavior: "smooth"
    })
    
}