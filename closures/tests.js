import { counterFactory, limitFunctionCallCount } from "./solutions.js";

const counter = counterFactory();

// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.increment());
// console.log(counter.decrement());
// console.log(counter.decrement());

const printing = limitFunctionCallCount((ele) => {
    return ele;
}, 3);

console.log(printing("shubham"));    //shubham
console.log(printing("tulshidas"));  //tulshidas
console.log(printing("bodalkar"));   //bodalkar
console.log(printing("mul"));        //null
console.log(printing("chandrapur")); //null
