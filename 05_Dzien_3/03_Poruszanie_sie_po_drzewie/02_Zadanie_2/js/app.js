
let btns = document.querySelectorAll('.btn');
let hj = btns[0].previousElementSibling.classList.toggle
for (let btn of btns) {
	btn.addEventListener("click", function (e) {
		if (this.previousElementSibling !== null) {
			this.previousElementSibling.classList.toggle("hidden");
		}
	})
}

// let btnNotExist = btns[0].nextElementSibling;
// console.log(btnNotExist)