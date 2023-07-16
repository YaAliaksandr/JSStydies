/*
  Poniżej napisz kod rozwiązujący zadania
 */
let exerciseLi = document.querySelector(".exercise").querySelectorAll("li");

let funcForExerciseLi = function (elemArr) {
	let counter = 0;
	elemArr.forEach((item) => {
		counter++;
		item.setAttribute("data-id", counter)

	});
}

funcForExerciseLi(exerciseLi);
