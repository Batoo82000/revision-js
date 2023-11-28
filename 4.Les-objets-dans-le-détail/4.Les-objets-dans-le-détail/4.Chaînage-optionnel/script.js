/* 
    1. Le chaînage optionnel

    L'opérateur ? permet de lire une propriété ou de retourner undefined si la propriété ou la chaîne de propriétés n'est pas valide.
    Sans cet opérateur, JavaScript retourne normalement une erreur.
*/
const store = {
  dairyProducts: {
    cheeses: ["Camembert", "Roquefort", "Cantal"],
    yogurt: ["Vanilla", "Strawberry", "Peach"],
  },
  pasta: {
    freshPasta: {
      flourPasta: ["Spaghetti", "Ravioli","Fusilli"],
      flourAndPotato: ["Gnocchi"]
    },
  },
  getPrice: () => {
    return 20
  }
}

console.log(store.dairyProducts.cheeses[1]);

//si on est pas sur que l'objet contient bien ce que l'on veux et pour éviter les erreurs, on peut mettre le ? après la valeur dont on n'est pas sur :

// console.log(store.dairyProducts.iceCreams.chocolateCreams.[3]); => provoque une erreur
console.log(store.dairyProducts.iceCreams?.chocolateCreams?.[3]); //ne provoque plus d'erreur

console.log(store.getPrice());
console.log(store.getPrice?.());
// console.log(store.getQuantity()); => provoque une erreur
console.log(store.getQuantity?.()); //ne provoque pas d'erreur
