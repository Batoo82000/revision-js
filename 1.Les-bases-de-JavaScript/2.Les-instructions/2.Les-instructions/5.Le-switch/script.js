/* 
    1. L'instruction Switch

    Un Switch permet de créer une série de conditions vérifiant une expression.
    C'est une alternative aux [if...else if() ... else if() etc...].
    Elle est cependant moins utilisée en général.

*/

const tShirtSize = "XL";


switch (tShirtSize) {
    case "XL":
        console.log("Prix : 19.99€");
        break;
    case "L":
        console.log("Prix : 15.99€");
        break;
    case "M":
        console.log("Prix : 12.99€");
        break;
    case "S":
        console.log("Prix : 9.99€");
        break;

    default:
        console.log("taille incorrecte")
        break;
}