/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est très pratique pour effectuer une copie superficielle ou afficher une liste.
*/

// const array = [1,2,3]
// console.log(...array);

// const shallowArrayCopy = [...array, 4, 5, 6]
// console.log(shallowArrayCopy);

// const obj = { 
//   name : "Laura",
//   age: 26}
// console.log(obj);

// const shallowObjCopy = {...obj, dogName : "Rex"}
// console.log(shallowObjCopy);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.


// Fonctionne également avec les chaînes de caractères

const str = "Bonjour tout le monde"

const strCopy = [...str]
console.log(strCopy);

/* 
    2. Destructuring.
  
    L'affectation par décomposition consiste à créer des variables à partir des propriétés d'un objet ou des éléments d'un tableau.

*/

/* A. Affecter les propriétés d'un objet. */

// const userObj = {
//   userName: "Karl",
//   age: 44,
//   country: "Germany"
// }
// const {userName, age, country} = userObj;
// console.log(userName);
// console.log(age);


// Donner un nom différent aux constantes

// const {userName: mainName, age: exactAge, country: Origin} = userObj;
// console.log(exactAge);

// Donner des valeurs par défaut, au cas où les props n'existent pas.

// const {country, sport = "Football", beverage="Beer"} = {country: "Germany"}
// console.log(country, sport, beverage);

// Combiner un nom différent et des valeurs par défaut.

// const {userName: mainName = "Hanz"} = {userName: "Ana", height: 180}
// console.log(mainName);

// Affecter les props d'un objet attendu en paramètre

// const numbers = {
//   num1: 50,
//   num2: 100
// }
// function fuu({num1, num2}) {
//   return num1 + num2
// }
// console.log(fuu(numbers));

/* B. Affecter les valeurs d'un tableau. */

// const animals = ["cat","dog","mouse","lion"];
// const [cat, dog] = animals
// console.log(cat,dog);

// valeur par défaut et ignorer des valeurs
// const fruits = ["strawberry","grapes","banana","apple"];
// const [strawberry="pink", grapes="violet",,apple] = fruits;
// console.log(strawberry);

// affecter le reste d'un tableau
const [student, ...marks] = ["Adrien", 10,10,12,14,15,17];
console.log(student);
console.log(marks);