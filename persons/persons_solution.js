function accessEmail(arr) {
    let mailArr = [];
    for (let i = 0; i < arr.length; i++){
        const mail = arr[i].email;
        
        mailArr.push(mail);
              
    }
    if(mailArr.length === 0){
	    return "Not Found";
    }
    return mailArr;
    
}

function personHobbies(arr, age) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]['age'] == age) {
            return arr[i];
        }
        
    }
    return "Not Found";
}

function studentName(arr) {
	let names = []
    	for (let i = 0; i < arr.length; i++) {
        	if (arr[i].isStudent && arr[i].country === 'Australia') {
            	names.push(arr[i].name);
        	}	
	}
    	if( names.length === 0){
		return "Not Found";
    	}
    	return names;
}


function indexLogs(arr, index) {
	if (arr[index]){
		const logs = {
        	name: arr[index].name,
        	city: arr[index].city
   	 	}
		return logs;
	}
	return "Not Found";

}

function accessAge(arr) {
	let ages = [];

    	for (let i = 0; i < arr.length; i++) {
        	ages.push(arr[i].name);
       	}
    	if (ages.length === 0){
	    return "Not Found"
	}
    	return ages;
}

function firstHobby(arr){
	let getHobbies = [];
	for (let i = 0; i < arr.length; i++){
		getHobbies.push(arr[i].hobbies[0]);
	}

	if(getHobbies.length === 0){
		return "Not Found";
	}

	return getHobbies;
}

function nameAndEmail(arr, age){
	let logs = {};
	for (let i = 0; i < arr.length; i++){
		if (arr[i].age === age){
			logs = {
				name: arr[i].name,
				email: arr[i].email
			}
		}
	}
	if (Object.keys(logs).length === 0){
		return "Not Found";
	}
	return logs;
}

function logInfo(arr){
	let cityAndCountry = [];

	for (let i = 0; i < arr.length; i++){
		const log = {
			city : arr[i].city,
			country: arr[i].country
		}

		cityAndCountry.push(log);
	}
	if ( cityAndCountry.length === 0 ){
		return "Not Found";
	}

	return cityAndCountry;
}

module.exports = { logInfo };


//module.exports = { nameAndEmail };

//module.exports = { firstHobby };

//module.exports = { accessAge };

// module.exports = { indexLogs };

// module.exports = { studentName };

// module.exports = { personHobbies };

// module.exports = { accessEmail };
