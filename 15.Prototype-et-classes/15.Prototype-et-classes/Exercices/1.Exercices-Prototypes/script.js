/*
    1. Que va retourner honk() dans la console ?
*/

function Car(model, price){
  this.model = model 
  this.price = price 
}
Car.prototype.honk = function(){
  console.log("Honk Honk")
}

const fiat = new Car("500", 20000)

Car.prototype = {}

fiat.honk() // ? Honk Honk


/*
    2. Voici deux fonctions constructeur, faites en sorte que Piano hérite du prototype d'Instrument.

    Puis créez une constante 'yamaha' contenant un nouvel objet piano.
    
    Enfin, exécutez play() à partir de yamaha afin de vérifier que l'héritage fonctionne correctement.
*/

function Instrument(){

}
Instrument.prototype.play = function(){
  console.log("Play music")
}

Object.setPrototypeOf(Piano.prototype, Instrument.prototype)

function Piano(type, price){
  this.type = type;
  this.price = price;
}

const yamaha = new Piano("long", 12000)
yamaha.play()
