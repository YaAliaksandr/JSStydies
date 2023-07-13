function factors(num) {
	let arr = [];
	if (num > 0) {
		for (let i = 1; i <= num; i++) {
			let val = num / i;
			if (val % 1 == 0) {
				arr.push(val);
			}
		}
	}
	return arr;
}
console.log(factors(54));/*[54, 27, 18, 9, 6, 3, 2, 1]*/