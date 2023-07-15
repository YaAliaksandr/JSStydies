const blocks = document.querySelectorAll(".block");
for (let val of blocks) {
	console.log(val.innerText);
}
// console.log(blocks);
for (let val of blocks) {
	val.innerText = "Nowa wartość diva o klasie blocks"
	console.log(val.innerText);
}