export function keys(obj) {
    let keysArr = Object.keys(obj);
    let nameArr = [];
    for (let i = 0; i < keysArr.length; i++) {
        const names = keysArr[i];
        nameArr.push(names);
        
    }
    return nameArr;
}

