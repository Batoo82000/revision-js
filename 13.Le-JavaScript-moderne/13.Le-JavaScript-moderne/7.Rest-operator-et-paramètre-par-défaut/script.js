/* 
    1. Rest operator
    Le paramètre du reste permet d'accepter un nombre indéfini d'arguments sous forme d'un tableau.
*/
function concatanation(...strings) {
    console.log(strings);
    let fullString= "";
    for(const string of strings){
        fullString += string
    }
    return fullString
}
concatanation(99,"salut","le","monde")

console.log(
    concatanation("salut ","le ","monde ")
);
/* 
    2. Les paramètres par défaut.

    Ils permettent de définir une valeur par défaut si un argument correspondant au paramètre en question n'est pas fourni.
*/

function welcoming(userName = "visiteur") {
    return `Bienvenue ${userName}`
}
console.log(welcoming());
console.log(welcoming("Sara"));
console.log(welcoming("Paul"));