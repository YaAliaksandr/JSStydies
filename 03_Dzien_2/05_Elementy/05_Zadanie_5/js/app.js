const childElements = document.querySelector(".offers").querySelectorAll("div, h2, p");
console.log(childElements);
function getTags(elements) {
	let elArr = [];
	for (let val of elements) {
		elArr.push(val.tagName);
	}
	return elArr;
}
console.log(getTags(childElements));