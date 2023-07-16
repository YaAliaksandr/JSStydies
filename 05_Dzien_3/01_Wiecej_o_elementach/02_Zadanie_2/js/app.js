/*
  Poniżej napisz kod rozwiązujący zadania
 */
let divChrome = document.querySelector(".chrome");
let aChrome = document.querySelector(".chrome + a");
let divEdge = document.querySelector(".edge");
let aMicrosoftEdge = document.querySelector(".edge + a");
let divFirefox = document.querySelector('.firefox');
let aFirefox = document.querySelector(".firefox + a")

divChrome.style.width = "100px";
aChrome.setAttribute('href', "https://www.google.pl/chrome/?brand=YTUH&gclid=Cj0KCQjwqs6lBhCxARIsAG8YcDjGkd-jbTqek5CxvhVbAsvfLBjf4ut21_1w49lne0ZZiaMM2lkP3B4aAtVCEALw_wcB&gclsrc=aw.ds");
aChrome.textContent = "Chrome";


aMicrosoftEdge.setAttribute("href", "https://www.microsoft.com/en-us/edge?form=MA13FJ&exp=e00");
divEdge.classList.add('firefox');
divEdge.classList.remove('edge');


aFirefox.setAttribute('href', 'https://www.mozilla.org/pl/firefox/new/');

divFirefox.classList.add('edge');
divFirefox.classList.remove("firefox");
aFirefox.textContent = "Firefox";


//
// let


