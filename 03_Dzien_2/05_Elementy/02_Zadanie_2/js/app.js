const home = document.getElementById("home");
const children = document.querySelector(".offers").querySelectorAll("div, h2, p");
const ban = document.querySelector(".ban");
const someBlocks = document.querySelectorAll(".block");
const listElements = document.querySelector(".links").querySelectorAll("li");
console.log(children);
function check(...args) {
	for (let i = 0; i < args.length; i++) {

		if (args[i].length > 0) {
			let str = `Zmienna № ${i + 1} jest pseudoTablicą i zaviera:`;

			for (let el of args[i]) {
				let strPlus;
				if (el.className !== "") {
					strPlus += `
					tagName = ${el.tagName} with class ${el.className}`
				}
				else {
					strPlus += `
					tagName = ${el.tagName} without class`
				}
				str += strPlus
			}
			console.log(str);
		}
	}
}

check(home, children, ban, someBlocks, listElements);