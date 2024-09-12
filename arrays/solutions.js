export function each(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
        callback(arr[i]);        
    }
}


export function map(arr, callback) {
    let ansArr =  [];

    for (let i = 0; i < arr.length; i++) {
        let element = callback(arr[i],i);
        ansArr.push(element);
    }
    return ansArr;
}

