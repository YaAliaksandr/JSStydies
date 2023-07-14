function Calculator() {
	this.history = [];
}
Calculator.prototype.add = function (num1, num2) {
	let res = num1 + num2;
	this.history.push(`added ${num1} to ${num2} got ${res}`);
	return res;
}
Calculator.prototype.multiply = function (num1, num2) {
	let res = num1 * num2;
	this.history.push(`multiplied ${num1} with ${num2} got ${res}`);
	return res;
}
Calculator.prototype.substract = function (num1, num2) {
	let res = num2 - num1;
	this.history.push(`substracted ${num1} from ${num2} got ${res}`);
	return res;
}
Calculator.prototype.divide = function (num1, num2) {
	let res = num1 / num2;
	this.history.push(`divied ${num2} from ${num1} got ${res}`);
	return res;
}
Calculator.prototype.printOperations = function () {
	for (let val of this.history) {
		console.log(val);
	}
}
Calculator.prototype.clearOperations = function () {
	this.history = [];
}
let calc1 = new Calculator();
calc1.add(4, 5);
calc1.substract(5, 2);
calc1.clearOperations();
console.log(calc1["history"]);