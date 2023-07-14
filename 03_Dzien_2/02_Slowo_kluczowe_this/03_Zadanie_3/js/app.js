let stairs = {
	step: 0,
	up: function () {
		return this.step++;
	},
	down: function () {
		return this.step = this.step - 1;
	}
}
stairs.up();
stairs.up();
stairs.down();
stairs.down();
stairs.down();
console.log(stairs);