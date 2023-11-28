/* 
    1. Parfois, on a besoin d'enchaîner plusieurs conditions afin d'exécuter différentes actions en fonction de différentes conditions;

    On peut donc utiliser les instructions else if(condition){} ou else{}.

    else if(condition){}  est utilisée lorsqu'on a besoin de vérifier une autre condition.

    else{} est utilisé à la fin d'une suite de conditions, lorsqu'on veut exécuter une instruction pour l'ensemble des conditions restantes.
*/

let age = 18;

if(age >= 18) {
    console.log("est majeur");
}
else if (age >= 0 && age < 18) {
    console.log("est mineur");
}

let role = ""

if (role === "admin") {
    console.log("Votre rôle est Administrateur.");
}
else if (role === "moderateur") {
    console.log("Votre rôle est Modérateur.");
}
else {
    console.log("Votre rôle est Utilisateur.");
}

let isLogged = true;

if(isLogged) {
    console.log("Welcome");
}
else {
    console.log("Access denied");
}