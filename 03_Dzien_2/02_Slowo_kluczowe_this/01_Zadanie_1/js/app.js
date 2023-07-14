let car = {
	brand: "Mers",
	color: "Black",
	numberOfkilometers: 0,
	// printCarInfo: function () {
	// 	return `${this.color} ${this.brand}, ${this.numberOfkilometers} ${this.watchDate}`;
	// },
	drive: function (km) { this.numberOfkilometers = km; },
	watchDate: [],
	addWatchDate: function (dateVal) {
		this.watchDate.push(dateVal);
	},
	printCarInfo: function () {
		return `${this.color} ${this.brand}, ${this.numberOfkilometers} ${this.watchDate}`;
	},
};

car.drive(20);
console.log(car.printCarInfo());
car.addWatchDate('12.03.2024');
car.addWatchDate('12.03.2023');

console.log(car.printCarInfo());
