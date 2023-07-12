

let arr = [1, 2, 3, 4, 5, 6, 7];
function middle(someArr) {
	let zero = 0;
	for (let val of someArr) {
		zero += val;

	}
	let midd = Math.round(zero / someArr.length);
	console.log(midd);
	let arrMap = someArr.map(function (item) {
		item = midd - item;
		if (item < 0) {
			item *= -1;
		}
		return item;
	});
	console.log(arrMap);
}
middle(arr);
