
function Basket() {
	this.products = [];
	this.sum = 0;
};

Basket.prototype.addProduct = function (name, price, quantity) {
	this.products.push({ "nazwa towaru": name, "cena": price, "ilosc": quantity });
}
Basket.prototype.showBasket = function () {
	let str = `Twoje zamówienie : `;
	let userSumm = 0;
	this.products.forEach(element => {
		let productName = element["nazwa towaru"];
		let productPrice = element["cena"];
		let productQuantity = element["ilosc"];
		let productSumm = element["cena"] * parseFloat(element["ilosc"]);
		let productSummZl = parseInt(productSumm);
		let productSummGrStr = `${Math.round(productSumm * 100) / 100}`.slice(-2);
		str += `
		${productName} cena ${productPrice} w iłosci ${productQuantity} summa do zapłaty ${productSummZl} zl. ${productSummGrStr} gr.`;
		userSumm += Math.round(parseFloat(`${productSummZl}.${productSummGrStr}`) * 100) / 100;
	});
	this.sum = +userSumm.toFixed(2);
	return str;
};



let user1 = new Basket();
user1.addProduct("apple", 40, "1.5344 kg");
user1.addProduct("pencil", 12, "1 rzecz");
console.log(user1);
console.log(user1.showBasket());
console.log(user1.sum);
