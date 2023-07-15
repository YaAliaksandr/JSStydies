const banner = document.querySelector(".ban");
console.dir(banner);
function getClassInfo(element) {

	let className = element.className;
	let classArr = className.split(' ');
	return classArr;
}
console.log(getClassInfo(banner));