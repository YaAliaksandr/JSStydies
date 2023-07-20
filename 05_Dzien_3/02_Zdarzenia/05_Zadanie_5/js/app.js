//  Another variant
// let btn = document.querySelector("button");
// let btnArr = document.querySelectorAll("button");

// let btnCounter = function () {
// 	let spanBtn = this.previousElementSibling.querySelector("span");
// 	let numOfSpanBtn = Number(spanBtn.textContent);
// 	numOfSpanBtn++;
// 	spanBtn.textContent = numOfSpanBtn;
// }

// for (let btn of btnArr) {
// 	btn.addEventListener('click', btnCounter);
// }


const btnRefs = document.querySelectorAll(".btn");
const counterRefs = document.querySelectorAll('.counter');


btnRefs.forEach((btn, id) => {
	btn.addEventListener("click", () => {
		counterRefs[id].innerText = parseInt(counterRefs[id].innerText) + 1;
	})
})




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















