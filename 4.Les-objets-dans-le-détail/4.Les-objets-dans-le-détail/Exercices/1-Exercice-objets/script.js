/* 
    1. Création d'objet.

    Créez un objet restaurant contenant une méthode fléchée waiter qui exécute un console.log("Que desirez-vous ?") lorsqu'elle est appelée.

    Créez également les propriétés theme(thème du restaurant(Japonais, Italien, Libanais, ...)) et name avec les valeurs que vous souhaitez.
*/

const restaurant = {
    waiter: () => console.log("Que desirez-vous ?"),
    theme: "thaïlandais",
    name: "Mokosap"
}

restaurant.waiter();

console.log(restaurant.theme);
console.log(restaurant.name);


/* 
    2. Liste des props.

    Trouvez deux moyens de créer un tableau contenant toutes les props de l'objet ci-dessous.
  
*/

const dam = {
    name: "Grand Coulee Dam",
    capacity: 6.809,
    height: 168,
    length: 1592,
    volume: 9155942
  };

  const arrayFromProps =Object.keys(dam);
  const arrayFromValues =Object.values(dam);
  console.log(arrayFromProps);
  console.log(arrayFromValues);
  
  const arrayFromProps2 = [];
    for(const value in dam){
        arrayFromProps2.push(value);
    };

 console.log(arrayFromProps2);
  /* 
      3. Copie
  
      Copiez, à l'aide du spread operator, les valeurs du tableau names dans un nouveau tableau namesCopy.
      Changez la valeur du dernier prénom du tableau names en "Tom".
  
      Sans utiliser la console, est-ce qu'il y a un problème de réfèrence, ou pas ?
  */
  
  const names = ["Jack", "Paul", "Lucas"];
  

const names2 = [...names]

names[2] = "Pollux";

console.log(names2);
console.log(names);