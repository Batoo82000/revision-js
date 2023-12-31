/* 
    Un objet Math est disponible en JavaScript.

    Math n'est pas un constructeur(qui sert à créer des objets), mais simplement un objet contenant pléthore de méthodes utiles pour réaliser des calculs mathématiques (sinus, puissance, random, min, max, etc ...).

    Le but n'est pas de toutes les connaître par coeur, mais simplement de savoir qu'elles existent et les utiliser en temps voulu.

    Découvrons les méthodes MATH les plus populaires et utiles.
*/
console.log(Math);

/* 
    1. Math.abs(number)

    Retourne la valeur absolue d'un nombre, c'est à la dire la valeur d'un nombre sans son signe.
    La valeur absolue de x est x.
    La valeur absolue de -x est x.
*/
console.log(Math.abs(-10));
console.log(Math.abs(10));


/* 
    2. Math.ceil(number)

    Retourne l'entier suivant un nombre à virgule.
*/

console.log(Math.ceil(4.01)); 
console.log(Math.ceil(445.1)); 


/* 
    3. Math.floor(number)

    Inverse de .ceil().
    Retourne l'entier inférieur d'un nombre à virgule.
*/

console.log(Math.floor(4.01));
console.log(Math.floor(44.99));

    

/* 
    4. Math.round(number)

    Mélange de .ceil et .floor().
    Si le dernier chiffre d'un nombre à virgule est supérieur ou égal à 5, on arrondit à l'entier supérieur, sinon à l'entier inférieur. 
*/

console.log(Math.round(45.3));
console.log(Math.round(45.6));

/* 
    5. Math.cos(numberInRadians)

    Retourne le cosinus d'un angle.
*/

console.log(Math.cos(0.6));

/* 
    6. Math.max(x,y,...)

    Cette méthode retourne le nombre le plus grand parmi les arguments qu'on lui passe.
*/

console.log(Math.max(654,648,7894,4567,1354,87564));

/* 
7. Math.min(x,y,...)

Cette méthode retourne le nombre le plus petit parmi les arguments qu'on lui passe.
*/

console.log(Math.min(654,648,7894,4567,1354,87564));

/* 
    8. Math.pow(x,y)

    Retourne le premier argument exposant[second argument].
*/

console.log(Math.pow(2,5));

/* 
    9. Math.random()

    Retourne un nombre "au hasard" entre 0 inclus et 1 non inclus.
*/
    console.log(Math.random());
    console.log(Math.random());
    console.log(Math.random());


/* 
    10. Math.trunc(number)

    Retour la partie entière d'un nombre à virgule.
*/

    console.log(Math.trunc(9.446864)); // 9

/* 
    Etc etc ...
    Encore une fois, le but n'est pas de toutes les retenir par coeur, mais de savoir que si vous avez besoin de faire un calcul mathématique en particulier, il existe surement une méthode pour vous aider à le réaliser.
*/