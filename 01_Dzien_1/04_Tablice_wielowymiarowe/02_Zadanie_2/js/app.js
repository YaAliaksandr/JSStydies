function print2DArray(arr2d) {
	let resArr = arr2d.reduce(function (accum, item) {
		return accum.concat(item);
	}, []);
	return resArr;
}
function print2DArrayVersion2(arr2d) {
	let str = "";
	let str1 = arr2d.join()
	return str1;
}
console.log(print2DArray([[1, 2], [3, 4]]));
console.log(print2DArrayVersion2([[1, 2], [3, 4]]));