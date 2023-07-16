let divIdBox = document.querySelector("#box");

let boxFunc = function (e) {
	console.log(`element X = ${e.offsetX} element Y=${e.offsetY}`);
	console.log(`okno X = ${e.clientX} okno Y = ${e.clientY}`);
};
divIdBox.addEventListener("mousemove", boxFunc);