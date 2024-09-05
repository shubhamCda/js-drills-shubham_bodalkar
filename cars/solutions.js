function carInfoById(arr, ID){
	for (let i = 0; i < arr.length; i++){
		const carId = arr[i]['id'];

		if (carId === ID){
			return `Car ${ID} is a *${arr[i]['car_year']}* * ${arr[i]['car_make']}* * ${arr[i]['car_model']}*.`;
		}
	}
	return "Not Found";
}


function lastCarInfo(arr){
	const endIndex = arr.length - 1;
	return `Last car is a *${arr[endIndex]['car_make']}* *${arr[endIndex]['car_model']}*.`;
}


module.exports = { lastCarInfo };

// module.exports = { carInfoById };
