// function accessEmail(arr) {
//     let mailArr = [];
//     for (let i = 0; i < arr.length; i++){
//         const mail = arr[i].email;
        
//         mailArr.push(mail);
//         // console.log("I'm here");
        
//     }
//     return mailArr;
    
// }

function personHobbies(arr, age) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['age'] == age) {
            return arr[i];
        }
        
    }
}



module.exports = { personHobbies };

// module.exports = { accessEmail };
