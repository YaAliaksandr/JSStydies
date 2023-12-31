const Robot = function (name) {
	this.name = name;
	this.isFunctional = false;
};

Robot.prototype.sayHi = function (toWho) {
	if (isFunctional === true) {
		console.log("Robot " + this.name + " greets " + toWho);
	} else {
		console.log("Robot " + this.name + " is broken");
	}
};

Robot.prototype.changeName = function (newname) {
	console.log("Robot " + this.name + " changes name to " + newname);
	this.name = newname;
};

Robot.prototype.fixIt = function () {
	this.isFunctional = true;
	console.log("Robot " + this.name + " was fixed");
};

let robot1 = new Robot("Albert");
robot1.fixIt();
robot1.changeName("new Albert2");
console.log(robot1);