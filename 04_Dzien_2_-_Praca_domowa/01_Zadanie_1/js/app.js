function Tree(type) {
	this.type = type;
}

Tree.prototype.bloom = function () {
	return "I am blooming";
}
let tree1 = new Tree("tree1 type");
let tree2 = new Tree("tree2 type");
console.log(tree1.type);
console.log(tree1.bloom());