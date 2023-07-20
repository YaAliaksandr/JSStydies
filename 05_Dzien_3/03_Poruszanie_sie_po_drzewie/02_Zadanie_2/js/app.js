
// let btns = document.querySelectorAll('.btn');
// let hj = btns[0].previousElementSibling.classList.toggle
// for (let btn of btns) {
// 	btn.addEventListener("click", function (e) {
// 		if (this.previousElementSibling !== null) {
// 			this.previousElementSibling.classList.toggle("hidden");
// 		}
// 	})
// }


const btns = document.querySelectorAll('.btn');

btns.forEach((btn) => btn.addEventListener('click', function () {
	if (this.previousElementSibling !== null) {
		this.previousElementSibling.classList.toggle("hidden");
	};
}))