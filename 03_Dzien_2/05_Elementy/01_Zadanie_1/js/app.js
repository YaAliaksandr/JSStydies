const links = document.querySelector(".links").querySelectorAll("li");
function getDataInfo(elements) {
	let arr = [];
	for (let val of elements) {
		// console.log(val);
		if (val.hasAttribute("data-color")) {
			arr.push(val.getAttribute("data-color"))
		}
	}
	return arr;
}
console.log(getDataInfo(links));