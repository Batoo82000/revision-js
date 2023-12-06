/*  
    1. On peut comparer plusieurs expressions dans une condition, cela peut mener à des comparaisons assez complexes, mais parfois indispensables.
*/

const user1 = {
  name: "Victor",
  age: 35,
  admin: true,
  position: "CEO"
}
const user2 = {
  name: "Paul",
  age: 25,
  admin: false,
  position: "Employee"
}
const user3 = {
  name: "Bruno",
  age: 54,
  admin: true,
  position: "Director"
}

// function checkPermission(user) {
//   if(user.age >=30 && user.admin && user.position === "CEO" || user.position === "Director"){
//   return "Accés autorisé";
//  }
//  else {
//   return "Accès refusé."
//  }
// }
// console.log(checkPermission(user3));

function checkPermission(user) {
  if(!user.admin  || user.age < 30 ) return "Accés refusé";
   
  if(user.position === "CEO" || user.position ==="Director") return "Accès autorisé";
}

console.log(checkPermission(user1));