let articles = document.querySelectorAll("article");
[0].nextElementSibling;

let divVisible = function (e) {
	this.nextElementSibling.classList.remove('d-none');
}
for (let art of articles) {
	art.querySelector("a").addEventListener('click', divVisible);
}