// let btn = document.querySelector("button");
let btnArr = document.querySelectorAll("button");

let btnCounter = function () {
	let spanBtn = this.previousElementSibling.querySelector("span");
	let numOfSpanBtn = Number(spanBtn.textContent);
	numOfSpanBtn++;
	spanBtn.textContent = numOfSpanBtn;
}

for (let btn of btnArr) {
	btn.addEventListener('click', btnCounter);
}



//  Another variant with using CLOSUR FUNction!!!
// function anotherBtnCounter() {
// 	let counter = 0;

// 	return function () {
// 		counter++;
// 		return counter;
// 	}
// }

// let btn1 = anotherBtnCounter();
// let btn2 = anotherBtnCounter();
// let btn3 = anotherBtnCounter();

// let btnCounterBtn1 = function () {
// 	let spanBtn = this.previousElementSibling.querySelector("span");
// 	spanBtn.textContent = btn1();
// }

// let btnCounterBtn2 = function () {
// 	let spanBtn = this.previousElementSibling.querySelector("span");
// 	spanBtn.textContent = btn2();
// }
// let btnCounterBtn3 = function () {
// 	let spanBtn = this.previousElementSibling.querySelector("span");
// 	spanBtn.textContent = btn3();
// }


// btnArr.forEach(function (item, index) {
// 	if (index == 0) {
// 		item.addEventListener('click', btnCounterBtn1)
// 	}
// 	if (index == 1) {
// 		item.addEventListener('click', btnCounterBtn2)
// 	}
// 	if (index == 2) {
// 		item.addEventListener('click', btnCounterBtn3)
// 	}
// });















