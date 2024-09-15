import { keys, values, mapObject, pairs, invert, defaults } from './solutions.js';

import testObject from './objects.js';

// console.log(keys(testObject));

// console.log(values(testObject));

// const mapValues = mapObject(testObject, (element) => `Value: ${element}`);
// console.log(mapValues);

// console.log(pairs(testObject));

// console.log(invert(testObject));

const defaultProps = {
    name : "Wonder Woman",
    age : 39,
    location: "Gotham",
    organization : "Justice League",
    
}

const sol = defaults(testObject, defaultProps);

console.log(sol);



