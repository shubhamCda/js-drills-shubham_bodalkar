import { each, map, reduce
 } from "./solutions.js";
import items from "./arrays.js";

/*
each(items, (ele) =>{
    console.log("Product: " + ele*ele);
    
})

*/

const mapFun = map(items, (ele, ind) =>{
    return `${ind} => ${ele * 2}`;
})

// console.log(mapFun);

let res = reduce(items, (accumulator, curr)=> accumulator + curr, 10);
console.log(`Reduce:  ${res}`);