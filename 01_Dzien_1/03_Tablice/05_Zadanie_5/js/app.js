function multiply(arr) {
	if (Array.isArray(arr) && arr.length > 0) {
		let arrReduce = arr.reduce(function (accum, item) {
			return item * accum;
		}, 1);
		return arrReduce;
	}

}
console.log(multiply([1, 2, 3]));