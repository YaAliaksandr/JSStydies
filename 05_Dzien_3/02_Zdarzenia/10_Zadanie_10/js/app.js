const a = document.getElementById("a");
const b = document.getElementById("b");

// Tutaj this wskazuje na obiekt window

console.log("obiekt document: ", this);

a.addEventListener("click", function (event) {
	// addEventListener to właśnie document)
	// Tutaj this wskazuje na element DOM o id a
	console.log("a: ", this);
});

b.addEventListener("click", function (event) {
	// Tutaj this wskazuje na element DOM o id b
	console.log("b: ", this);


	function innerFuncOne() {
		// Tutaj this wskazuje na element Window, bo funkcja została
		//wywołana bez żadnego kontekstu.
		console.log("innerFuncOne: ", this);
		// b.style.backgroundColor = "red";
	}

	innerFuncOne();


	// 1sposob arrow function
	const if1 = () => {
		console.log("if1", this)
	}
	// 2 sposob
	function if2() {
		console.log("if1", this)
	}
	if2.call(this);
	if2.apply(this);

	const if3 = function () {
		console.log("if1", this)
	}
	const if4 = if3.bind(this);
	if4();
});


























