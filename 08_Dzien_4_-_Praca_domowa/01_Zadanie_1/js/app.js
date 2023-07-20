const inputs = document.querySelectorAll(".form-check-input");
const inputsArr = [...inputs];
const btnClearAll = document.querySelectorAll("[type=button]")[1];
const btnOrderAll = document.querySelectorAll("[type=button]")[0];
const btnOrder = document.querySelectorAll("[type=button]")[2];
const additivesSumSpan = document.getElementById('price');
const orderInfo = document.querySelector(".order-info");


const spanResSumm = document.createElement('span');
// spanResSumm.textContent=



// const checkAdditivies = function (el) {
// 	if (el.checked) {
// 		// console.log('this====' + this)
// 		const num = Number(el.dataset.price);
// 		summ = summ.toFixed(2) * 1 + num;

// 	}
// 	else {
// 		// console.log(this);
// 		const num = Number(el.dataset.price);
// 		summ = summ.toFixed(2) * 1 - num;
// 	}

// }

// const priceSpiecess = function (elements) {
// 	const summ = 0;
// 	for (let el of elements) {
// 		el.addEventListener('click', checkAdditivies);
// 	}
// 	additivesSumSpan.textContent = summ;
// }

// priceSpiecess(inputsArr);
// const inputSumm = function(){
// 	inputsArr.forEach((item) => item.addEventListener("click",a.click));
// }


// class AdditivesSumm {
// 	constructor() {
// 		this.counter = 0;

// 	}

// 	click() {
// 		inputsArr.forEach((item) => item.addEventListener("click",function(){
// 			additivesSumSpan.textContent = that.counter;

// 		}))



// 	}
// };
// const a = new AdditivesSumm();

// const inputSumm = function () {
// 	inputsArr.forEach((item) => item.addEventListener("click", a.click));
// }
// inputSumm();


const fun = function () {
	let summ = 0;
	for (let val of inputsArr) {

		val.addEventListener("click", () => {
			if (val.checked) {
				const num = Number(val.dataset.price);
				summ = summ.toFixed(2) * 1 + num;
				additivesSumSpan.textContent = summ;
			}
			else {
				const num = Number(val.dataset.price);
				summ = summ.toFixed(2) * 1 - num;
				additivesSumSpan.textContent = summ;
			}
		})
	}
}
fun();



const allAdditives = function (elements) {

	let summ = 0;
	let resSumm = 35 + summ;
	elements.forEach(element => {
		const num = Number(element.dataset.price);

		summ = summ.toFixed(2) * 1 + num;

		element.checked = true;
	})
	additivesSumSpan.textContent = `${summ} PLN`;
	// console.log(summ);
	spanResSumm.textContent = resSumm;
	spanResSumm.

};

const clearAll = function (elements) {
	additivesSumSpan.textContent = `0 PLN`;
	// summAdditivies = summ;
	return elements.forEach((element) => element.checked = false)
	// additivesSumSpan.textContent = `${summ} PLN`;
};

const summAdditives = function (elements) {
	let summ = 0;
	elements.forEach(element => {
		const num = Number(element.dataset.price);
		if (element.checked) {
			summ = summ.toFixed(2) * 1 + num;
		}
	})
	console.log(this);
	return summ;
};



btnClearAll.addEventListener('click', () => clearAll(inputsArr));

btnOrderAll.addEventListener('click', function () {
	allAdditives(inputsArr);
});















console.log(inputsArr);


