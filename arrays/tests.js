import { each, map, reduce, find, filter, flatten } from "./solutions.js";
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

const res = reduce(items, (accumulator, curr)=> accumulator + curr, 10);
// console.log(`Reduce:  ${res}`);

const search = find(items, (ele, foundEle) =>(ele === foundEle));
// console.log(search);

const fill = filter(items, (ele) =>(ele > 2));
// console.log(fill);

const mixedArr = [1, [2], [3, [[4]]]];

const extract = flatten(mixedArr);
console.log(extract);



