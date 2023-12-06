/* 
    Les getters et les setters permettent d'effectuer des actions supplémentaires lorsqu'on veut lire une propriété(getter) ou mettre en place une nouvelle valeur pour une propriété(setter).

    Sous le capot, c'est comme si une fonction était exécutée.
*/
const fruitsShop = {
    shopName: "Fruits Paradise",
    fruits: ["🥭","🍇","🥥"],
    get fruitsLength() {
        console.log("getter");
        if(this.fruits.length <= 3 ){
            console.log("We are running out of fruits");
        }
        return this.fruits.length
    },
    /**
     * @param {string} value
     */
    set setName(value) {
        if(!/fruits/i.test(value)){
            console.log("Name must contain 'fruits'");
            return
        }
        this.shopName = value
    }
}
fruitsShop.fruitsLength;
fruitsShop.setName = "Fruits Heaven";
console.log(fruitsShop);
fruitsShop.setName = "Fruit Heaven";
