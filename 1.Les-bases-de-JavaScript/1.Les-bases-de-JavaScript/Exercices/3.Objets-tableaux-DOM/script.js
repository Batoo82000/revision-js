/* 
    1. Déclarer un objet "car" et inventez trois propriétés - valeurs de votre choix.
    Ex: name, price, doors, kilometers, maxSpeed, year, etc ...
*/

const car = {
    model : "peugeot",
    color : "blue",
    year : 2022,
    motor : "essence"
}

/* 
    2. Vous disposez d'un tableau de fruits ci-dessous.
    A - Loggez le troisième fruit dans la console.
    B - Loggez le dernier fruit dans la console.
    C - Retournez la longueur du tableau.
*/

const fruits = ["🍇","🍓","🍌"]

console.log(fruits[1]);
console.log(fruits[fruits.length-1])
console.log(fruits.length)

/* 
    3. Loggez l'objet global BOM.
*/

console.log(window);