function carInfoById(arr, ID){
	for (let i = 0; i < arr.length; i++){
		const carId = arr[i]['id'];

		if (carId === ID){
			return `Car ${ID} is a ${arr[i]['car_year']} ${arr[i]['car_make']} ${arr[i]['car_model']}`;
		}
	}
	return "Not Found";
}

module.exports = { carInfoById };
