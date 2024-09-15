import { keys, values, mapObject } from './solutions.js';

import testObject from './objects.js';

// console.log(keys(testObject));

// console.log(values(testObject));

const mapValues = mapObject(testObject, (element) => `Value: ${element}`);
console.log(mapValues);


