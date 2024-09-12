import { each, map } from "./solutions.js";
import items from "./arrays.js";

/*
each(items, (ele) =>{
    console.log("Product: " + ele*ele);
    
})

*/

const mapFun = map(items, (ele, ind) =>{
    return `${ind} => ${ele}`;
})

console.log(mapFun);
