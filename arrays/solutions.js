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

export function find(arr, callback, searchElement) {
    if (searchElement !== undefined){
        for (let i = 0; i < arr.length; i++) {
            if (callback(arr[i], searchElement)) {
                return arr[i];
            }

        }
    }   
    return undefined;

}

export function filter(arr, callback) {
    let newArr = [];

    for (let i = 0; i < arr.length; i++) {
        const element = callback(arr[i]);
        if (element) {
            newArr.push(arr[i]);
        }
        
    }
    return newArr;
}

export function flatten(arr) {
    const newArr = [];
    extractEle(arr);
    function extractEle(arr) {
        for (let i = 0; i < arr.length; i++) {
            const element = arr[i];
    
            if (Array.isArray(element)) {
                extractEle(element);
            }else{
                newArr.push(element);
            }
            
        }
    }
    return newArr;
    
}
