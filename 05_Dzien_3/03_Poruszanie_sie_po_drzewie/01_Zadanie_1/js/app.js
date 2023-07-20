// // Element o klasie first -> jego pierwsze dziecko -> jego trzecie dziecko.
// let classFirst = document.querySelector(".first");
// let firstChildrenClassFirst = classFirst.firstElementChild;
// let thirdChildrenOfFirstChildrenClassFirst = firstChildrenClassFirst.children[2];
// console.log(thirdChildrenOfFirstChildrenClassFirst);

// // Element o id second -> jego rodzic -> jego czwarte dziecko.
// let idSecond = document.querySelector("#second");
// let parentIdSecond = idSecond.parentElement;
// let childrenFourOfParentIdSecond = parentIdSecond.children[3];
// console.log(childrenFourOfParentIdSecond);


// // Element o atrybucie data-ex nastawionym na wartość third -> jego dziadek -> jego ostatnie dziecko -> jego pierwsze dziecko -> jego środkowe dziecko (żeby otrzymać środkowy element, podziel liczbę dzieci przez dwa i zaokrąglij w dół)
// let elDataEx = document.querySelector('[data-ex = "third"]');
// let grandpaOfElDataEx = elDataEx.parentElement.parentElement;
// let lastChildOfGrandpaOfElDataEx = grandpaOfElDataEx.lastElementChild;
// let firstChild_Of_astChildOfGrandpaOfElDataEx = lastChildOfGrandpaOfElDataEx.firstElementChild;
// let Number_middleChild_firstChild_Of_astChildOfGrandpaOfElDataEx = firstChild_Of_astChildOfGrandpaOfElDataEx.children.length;
// let middleChild_firstChild_Of_astChildOfGrandpaOfElDataEx = firstChild_Of_astChildOfGrandpaOfElDataEx.children[Math.floor(Number_middleChild_firstChild_Of_astChildOfGrandpaOfElDataEx / 2)];
// console.log(middleChild_firstChild_Of_astChildOfGrandpaOfElDataEx);
// // Div o klasie forth -> jego rodzic -> jego pierwsze dziecko o tagu article -> jego drugie dziecko o tagu <p>.
// let divFourth = document.querySelector("div.forth");
// let divParent = divFourth.parentElement;
// let divFirstChildArticle = divParent.querySelector('article');
// let article_Second_Child = divFirstChildArticle.querySelectorAll("p")[1];
// console.log(article_Second_Child);

const firstRef = document.querySelector('.first');
console.log(firstRef.children[0]);
console.log(firstRef.children[2]);
const secondRef = document.querySelector('#second');
console.log(secondRef.parentElement);
console.log(secondRef.parentElement.children[3]);
const dataRef = document.querySelector('[data-ex="third"]');
const grandfather = dataRef.parentElement.parentElement;
const lastChild = grandfather.lastElementChild;
const ul = lastChild.firstElementChild;
const midleChil = ul.children[Math.floor(ul.children.length / 2)];


const divRef = document.querySelector('div.forth');
console.log(divRef.parentElement);
console.log(divRef.parentElement.querySelector('article'));
console.log(divRef.parentElement.querySelector('article').querySelector('p:nth-of-type(2)'));






























