let superFooterClass = document.querySelector(".superFooter");

function idName(ell) {
	let idName = "Element have no Id"
	if (ell.id != "") {
		idName = `Element have id = ${ell.id}`;
	}
	return idName;
}
console.log(idName(superFooterClass));