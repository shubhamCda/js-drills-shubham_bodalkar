export function keys(obj) {
    let keysArr = Object.keys(obj);
    // console.log(keysArr);
    
    let objKeysArr = [];

    for (let index = 0; index < keysArr.length; index++) {
        const names = keysArr[i];
        nameArr.push(names);
        
    }
    return objKeysArr;
}

export function values(obj) {
    let objValues = Object.values(obj);

    // console.log(objValues);

    
    let valueArr = [];

    for (let index = 0; index < objValues.length; index++) {
        const values = objValues[index];

        // console.log(values);
        

        valueArr.push(values);
        
    }
    return valueArr;
}


export function mapObject(obj, callback) {
    let objValues = Object.values(obj);

    let valuesArr = [];

    for (let index = 0; index < objValues.length; index++) {
        const values = callback(objValues[index]);
        console.log(values);
        
        valuesArr.push(values);
        
    }
    return valuesArr;
}