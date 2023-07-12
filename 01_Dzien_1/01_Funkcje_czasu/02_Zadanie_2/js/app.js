function countHello(val) {
	if ((val == 1 || val > 1) && val <= 10) {
		let counter = 0;
		let clockInt = setInterval(function h() {
			counter++;
			console.log(`Hello${counter}`);
			if (counter >= val) {
				clearInterval(clockInt);
			}
		}, 500);
	}

}
countHello(8);
