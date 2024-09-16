export function counterFactory() {
    let counter = 0;

    function increment() {
        return counter++;
    }

    function decrement() {
        return counter--;
    }

    return {increment, decrement};
}
// const count = counterFactory();
// console.log(count.increment());
// console.log(count.increment());
// console.log(count.increment());


export function limitFunctionCallCount(callback, n) {
    let startLimit = 0;

    function limit(...args) {
        if (startLimit < n){
            startLimit++;
            return callback(...args)
        }
        else{
            return null;
        }
    }
    return limit;
}

// const printing = limitFunctionCallCount((ele) =>{
//     // console.log("value: ", ele);
//     return ele;
    
// }, 3);

// console.log(printing("shubham"));
// console.log(printing("tulsi"));
// console.log(printing("bodalkar"));
// console.log(printing("mul"));


export function cacheFunction(callback) {
    let cacheMem = {};

    function invoke(params) {
        if (cacheMem[params]) {
            console.log(cacheMem);
            
            return cacheMem[params];
        } else {
            const res = callback(params);
            cacheMem[params] = res;
            console.log(cacheMem);
            
            return res;
        }
    }
    return invoke;
}

// const result = cacheFunction((val) => {
//     console.log("callback function invoked");
    
//     return val*2;
// })

// console.log(result(2));
// console.log(result(3));
// console.log(result(2));
// console.log(result(5));
// console.log(result(2));


