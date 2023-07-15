let idMenu = document.querySelector("#menu");
console.log(idMenu);
function getDataInfo(element) {
	let resArr = [];
	let elChildren = element.querySelectorAll("li");
	for (let el of elChildren) {
		if (el.hasAttribute("data-info")) {
			resArr.push(el.getAttribute('data-info'))
		}
	}
	return resArr;
}
console.log(getDataInfo(idMenu));
let idMainContainer = document.querySelector("#main-container");
function getElementClass(element) {
	let str = element.className;
	// next code will be right if i need to find All classes from all elements for this tag deepSearching by recurtion;
	// children(element);

	// function children(child) {

	// 	for (let val of child.children) {
	// 		str += " " + val.className;
	// 		if (val.children.length > 0) {
	// 			children(val);
	// 		}
	// 	}
	// }
	// let classArr = str.split(" ");
	// let filterArr = classArr.filter((item) => {
	// 	if (item.length > 0) {
	// 		return item;
	// 	}
	// })

	// return filterArr;	
	return str.split(' ');
}
let claspinkColor = document.querySelector('.pink-color');
console.log(claspinkColor);
function getElementText(element) {
	return element.textContent;
}
console.log(getElementText(claspinkColor));
let classImages = document.querySelectorAll(".images");
function getElementAlt(element) {
	let altArr = [];
	for (let val of element) {
		if (val.hasAttribute("alt")) {
			altArr.push(val.getAttribute("alt"));
		}
	}
	return altArr;
}
console.log(getElementAlt(classImages));

let classMyLink = document.querySelectorAll(".my-link");
console.log(classMyLink)
function getElementHref(element, attr) {
	let arr = [];
	for (let val of element) {
		if (val.hasAttribute(`${attr}`)) {
			arr.push(val.getAttribute(`${attr}`))
		}

	}
	return arr;
}
console.log(getElementHref(classMyLink, "href"));






