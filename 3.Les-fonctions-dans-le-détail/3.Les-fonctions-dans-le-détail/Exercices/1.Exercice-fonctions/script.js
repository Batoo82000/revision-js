/* 
    Exercices : Les fonctions
*/

/* 
    1. Pure ou pas.

    Écrivez une fonction pure "dividedBy10" qui sert à diviser un nombre par 10.
    Écrivez cette fonction sous la forme d'une fonction fléchée puis commentez-là et écrivez-là sous la forme d'une fonction classique.  
*/

const dividedBy10 = num => num / 10;
console.log(dividedBy10(200));

const dividedBy10Bis = a => a/10;
console.log(dividedBy10Bis(50));

function dividedBy10Ter(a) {
  return a/10;
};
console.log(dividedBy10Ter(100));
/* 
    2. this weather

    Créez une méthode getFahrenheit () permettant de retourner la température de l'objet weather ci-dessous en utilisant le mot clé this.

    Formule celsius - fahrenheit  :  (celsius * 1.8) + 32
*/

const weather = {
  city: "London",
  temp: 16,
  getFahrenheit(){
    return (this.temp * 1.8) +32
  }
}
console.log(weather.getFahrenheit());


/* 
  3. Ordre supérieur.

  Écrivez une fonction d'ordre supérieur "areFromNationality" permettant de tester si toutes les personnes d'un groupe sont d'une certaine nationnalité.
  Cette fonction retournera true ou false.
  On doit pouvoir réutiliser la même fonction pour tester autant de nationalités qu'on veut.
*/

const travelers = [
{
  name: "Jean",
  nationality: "FR"
},
{
  name: "Victor",
  nationality: "FR"
},
{
  name: "Paul",
  nationality: "FR"
},
{
  name: "Jack",
  nationality: "IT"
},
{
  name: "Giulia",
  nationality: "EN"
},
]


function areFromNationality(arr, callback) {
  for(const value of arr){
    if(!callback(value)){
      return false;
    }
  }
  return true;
}

console.log(areFromNationality(travelers, (traveler) => traveler.nationality === "FR"));