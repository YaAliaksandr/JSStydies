let timeMachine = {};
timeMachine["shape"] = "fd";
timeMachine["model"] = "kbk";
timeMachine.run = function (date, place) {
	return `We are at ${place} in date ${date}`;
}
console.log(timeMachine);
console.log(timeMachine.run("Polland", "13.07.2023"));