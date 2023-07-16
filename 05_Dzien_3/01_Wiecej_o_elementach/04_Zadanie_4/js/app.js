/*
  Poniżej napisz kod rozwiązujący zadania
 */

let excerciseUl = document.querySelector(".exercise").querySelector("ul");
excerciseUl.classList.add("menu");
let liExcerciseUl = excerciseUl.querySelectorAll('li');
console.log(liExcerciseUl);
liExcerciseUl.forEach(el => {
	el.classList.add('menuElement');
	let arr = el.className.split(" ");
	if (arr.includes('error')) {
		el.classList.remove("error");
	}
});