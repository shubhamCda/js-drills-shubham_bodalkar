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

/*
export function reduce(arr, callback, startingValue) {
    let startingIndex = 0;
    if(startingValue === undefined){
        startingValue = arr[startingIndex];
        startingIndex++;
    }
    let result = startingValue;
    for(let index=startingIndex; index < arr.length; index++){
        let res = callback(result, arr[index]);
        result = res;
    }
    return result;
}
*/

export function reduce(arr, callback, startingValue) {
    let start_Idx = 0;

    if (startingValue === undefined) {
        startingValue = arr[start_Idx];
        start_Idx++;
    }

    let result = startingValue;

    for (let i = start_Idx; i < arr.length; i++) {
        let element = callback(result, arr[i]);
        result = element;
    }
    return result;
}
