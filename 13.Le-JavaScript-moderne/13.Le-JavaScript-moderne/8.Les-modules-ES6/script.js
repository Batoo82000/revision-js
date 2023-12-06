/* 
    Les modules ES6 permettent de découper son code en plusieurs morceaux.

    Avant, on devait mettre des <script> les uns au-dessus des autres, mais c'était difficilement maintenable.
*/

// import userName from "./module1.js";
// console.log(userName);

// import { userName as name, age } from "./module1.js";
// console.log(name);
// console.log(age);

import {add, multiply} from "./module2.js"

console.log(add(2,2));
console.log(multiply(6,8));