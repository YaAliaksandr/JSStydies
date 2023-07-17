let links = document.querySelectorAll("a.btn");
const randomColor = () => ("#" + Math.floor(Math.random() * 16777215).toString(16));
let parentLink = function () {
	this.parentElement.style.backgroundColor = randomColor()
}
for (let link of links) {
	link.addEventListener("click", parentLink);
}