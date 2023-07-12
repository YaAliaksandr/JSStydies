function printTable(array) {
	if (Array.isArray(array) && array.length > 0) {
		array.forEach((item) => console.log(item));
	}
}
printTable([1, 2, 3, 4]);
