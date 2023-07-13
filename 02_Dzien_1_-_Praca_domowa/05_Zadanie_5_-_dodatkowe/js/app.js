function getMissingElement(arr) {
	let missingValArr = [];
	for (let i = 0; i < arr.length; i++) {
		if (i != arr.length - 1) {
			let nextVal = arr[i + 1];
			if (nextVal - 1 !== arr[i]) {
				missingValArr.push(arr[i] + 1);
			}
		}

	}
	if (missingValArr.length > 0) {
		return missingValArr;
	}
	else {
		return null;
	}
}
console.log(getMissingElement([1, 2, 3, 4, 5, 6, 7]));
console.log(getMissingElement([6, 7, 8, 10, 11, 12, 13, 14, 15, 20, 22]));