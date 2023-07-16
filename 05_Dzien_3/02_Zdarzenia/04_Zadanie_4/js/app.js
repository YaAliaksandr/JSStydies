let btnArr = document.querySelectorAll("button");
let counterSpan = document.querySelector("span");


let btnCounterFunc = function () {
	console.log(counterSpan)
	let numOfCounterSpan = Number(counterSpan.textContent);
	numOfCounterSpan++;
	counterSpan.textContent = numOfCounterSpan;
}



for (let btn of btnArr) {
	btn.addEventListener('click', btnCounterFunc);
}

console.log(counterSpan);