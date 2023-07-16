
let spanWindowWidth = document.querySelector("#windowWidth");
let spanWindowHeight = document.querySelector("#windowHeight");
spanWindowWidth.textContent = window.innerWidth + " px";
spanWindowHeight.textContent = window.innerHeight + " px";

window.addEventListener("resize", function (e) {
	spanWindowWidth.textContent = window.innerWidth + " px";
	spanWindowHeight.textContent = window.innerHeight + " px";
})