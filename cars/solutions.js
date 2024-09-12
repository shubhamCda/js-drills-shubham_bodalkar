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


function sortCarModel(arr){
	let carModelArr = [];
	for (let i = 0; i < arr.length; i++){
		const carModel = arr[i]['car_model'];
		carModelArr.push(carModel);
	}
	return carModelArr.sort();
}


function carYear(arr){
	let carYearArr = [];
	for (let i = 0; i < arr.length; i++){
		const year = arr[i]['car_year'];
		carYearArr.push(year);
	}
	return carYearArr;
}


function vintageCar(arr){
	let count = 0;
	let oldCarArr = [];
	const carArr = carYear(arr);
	for (let i = 0; i < carArr.length; i++) {
		if (carArr[i] < 2000) {
			count++;
			oldCarArr.push(carArr[i])
		}
		
	}
	return `Older Cars: [${oldCarArr}], Count: ${count}`;
}


function audiAndBmw(arr) {
	let carArr = [];

	for (let i = 0; i < arr.length; i++) {
		const carMake = arr[i]['car_make'];
		if (carMake === 'Audi' || carMake === 'BMW') {
			carArr.push(carMake);	
		}
			
	}
	return JSON.stringify(carArr);
}

// module.exports = { audiAndBmw ,vintageCar};

// // module.exports = {  };

// //module.exports = { carYear };

// //module.exports = { sortCarModel };

// //module.exports = { lastCarInfo };

// // module.exports = { carInfoById };

export {
	audiAndBmw,
	vintageCar
}
