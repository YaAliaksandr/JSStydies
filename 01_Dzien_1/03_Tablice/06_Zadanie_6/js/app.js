
function getEvenAverage(arr) {
	if (Array.isArray(arr) && arr.length > 0) {
		let counter = 0;
		let arrReduce = arr.reduce(function (accum, item) {
			if (item % 2 === 0) {
				accum += item;
				counter++
			}
			return accum;
		}, 0);
		if (counter > 0) {
			let res = arrReduce / counter;
			if (res % 1 !== 0) {
				res = res.toFixed(3);
			}
			return res;
		}
		else {
			return null;
		}
	}
}
console.log(getEvenAverage([1, 2, 3, 4, 5, 6, 7]));
console.log(getEvenAverage([1, 1, 1, 1, 1, 1]));
console.log(getEvenAverage([2, 8, 3, 7, 4]));


