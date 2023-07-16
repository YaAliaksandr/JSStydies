let btnArr = document.querySelectorAll("button");
let counterSpan = document.querySelector("span");


let btnCounterFunc = function (e) {
	let numOfCounterSpan = Number(counterSpan.textContent);
	numOfCounterSpan++;
	counterSpan.textContent = numOfCounterSpan;
}



for (let btn of btnArr) {
	btn.addEventListener('click', btnCounterFunc);
}

