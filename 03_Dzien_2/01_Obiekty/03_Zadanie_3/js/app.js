let book = {};
book.title = "kj";
book.autor = "dfkj";
book.numberOfPages = function () {
	return 44;
}
console.log(book.title, book["autor"], book["numberOfPages"]());