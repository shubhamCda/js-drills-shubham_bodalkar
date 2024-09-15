export function keys(obj) {
    let keysArr = Object.keys(obj);
    // console.log(keysArr);
    
    let objKeysArr = [];

    for (let i = 0; i < keysArr.length; i++) {
        const names = keysArr[i];
        nameArr.push(names);
        
    }
    return objKeysArr;
}

