
function Func(name, age) {
	this.name = name;
	this.age = age;
	this.sayHello = function () {
		return "hello";
	}
};
let person = new Func("Alex", 37);
console.log(person.name, person.age, person.sayHello());