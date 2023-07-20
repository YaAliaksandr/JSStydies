let elem = document.querySelector(".exercise");
let elemLi = elem.querySelectorAll("li");
let style = function (elemArr) {
	let elemCounter = 0;
	for (let i = 0; i < elemArr.length; i++) {
		elemCounter++;
		if (elemCounter % 2 === 0) {
			elemArr[i].style.backgroundColor = "#9e9e9e";
		}
		if (elemCounter === 5) {
			elemArr[i].classList.add('big');
		}
		if (elemCounter % 3 === 0) {
			elemArr[i].style.textDecoration = "underline";
		}
	}
}
style(elemLi);