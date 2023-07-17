let divsWithUl = document.querySelectorAll("div.listContainer");
let changeColorLi = function (e) {
	let ul = this.querySelector("ul");
	for (let li of ul.children) {
		li.style.backgroundColor = "green";
	}
	ul.firstElementChild.style.backgroundColor = "red";
	ul.lastElementChild.style.backgroundColor = "blue";
}

let originalColor = function (e) {
	let ul = this.querySelector("ul");


	for (let li of ul.children) {
		li.style.backgroundColor = "";
	}

	// that's ok too
	// [...ul.children].forEach((item) => {
	// 	item.style.backgroundColor = "";
	// });


}
for (let div of divsWithUl) {
	div.addEventListener("mouseover", changeColorLi);
	div.addEventListener("mouseout", originalColor);
}