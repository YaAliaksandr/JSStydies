const planets = [
	{
		name: "Merkury",
		numberOfMoons: 0
	},
	{
		name: "Wenus",
		numberOfMoons: 0
	},
	{
		name: "Ziemia",
		numberOfMoons: 1
	},
	{
		name: "Mars",
		numberOfMoons: 2
	},
	{
		name: "Jowisz",
		numberOfMoons: 63
	},
	{
		name: "Saturn",
		numberOfMoons: 60
	},
	{
		name: "Uran",
		numberOfMoons: 27
	},
	{
		name: "Neptun",
		numberOfMoons: 13
	}
];

let resArr = planets.sort(function (a, b) {
	if (a.numberOfMoons < b.numberOfMoons) {
		return 1;
	}
	else if (a.numberOfMoons == b.numberOfMoons) {
		return 0;
	}
	else {
		return -1;
	}
});

console.log(resArr);