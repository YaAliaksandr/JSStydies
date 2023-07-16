let divParrent = document.querySelectorAll(".parent");
// let divChildren =
let childrenVisiable = function () {
	let divChildren = this.children;
	for (let it of divChildren) {
		it.style.display = "block";
	}
}
let childerDisplayNone = function () {
	let divChildren = this.children;
	for (let it of divChildren) {
		it.style.display = "none";
	}

}
for (let item of divParrent) {
	// console.log(item)

	item.addEventListener("mouseover", childrenVisiable);
	item.addEventListener("mouseout", childerDisplayNone);

}