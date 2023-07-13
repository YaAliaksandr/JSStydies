function addTheSameNumbers(num, arr) {
	let arrReduce;
	if (arr.includes(num)) {
		arrReduce = arr.reduce((accum, item) => {
			if (item == num) {
				// console.log(`item ==${item}`);
				accum += item;
				// console.log(`accum ==${accum}`);
			}
			return accum;

		}, 0);
	}
	else {
		arrReduce = null;
	}
	return arrReduce;
}
console.log(addTheSameNumbers(7, [4, 7, 24, 7, 0, 10]));
console.log(addTheSameNumbers(9, [33, 54, 2, 1, 9, 100]));
console.log(addTheSameNumbers(0, [33, 0, 2, 0, 9, 0]));
console.log(addTheSameNumbers(43, [6, 0, 2, 2, 3, 46]));