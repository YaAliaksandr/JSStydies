
let someArr = [145, 11, 3, 64, 4, 6, 10];

function sortArray(arr) {
	return arr.sort((a, b) => {
		if (a > b) { return 1; }
		else if (a == b) { return 0; }
		else { return -1; }
	});
}
console.log(sortArray(someArr));