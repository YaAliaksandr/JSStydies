let divBox = document.querySelectorAll("div.box");
let randomColor;
let randomColorDiv = function () {
	randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
	this.style.backgroundColor = randomColor;
};
for (let div of divBox) {

	div.addEventListener("click", randomColorDiv);
}