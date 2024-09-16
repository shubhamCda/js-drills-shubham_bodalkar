import { counterFactory } from "./solutions.js";

const counter = counterFactory();

console.log(counter.increment());
console.log(counter.increment());
console.log(counter.increment());
console.log(counter.decrement());
console.log(counter.decrement());