function getLastNumbers(...args) {
	let arr = [];
	if (args.length < 2 || !Number.isFinite(args[0])) {
		return arr;
	}
	else {
		let arr1 = args[1].slice(-args[0]);
		return arr1;
	}



}

console.log(getLastNumbers(2, [1, 2, 3, 4, 5, 6, 7]));
console.log(getLastNumbers(4, [6, 7, 8, 10, 11, 12, 13, 14, 15]));
console.log(getLastNumbers([-4, -3, -2, 0, 1, 2, 3, 4]));
console.log(getLastNumbers('ala', [-4, -3, -2, 0, 1, 2, 3, 4]));
