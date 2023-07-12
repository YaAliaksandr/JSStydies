let tclock = setTimeout(function () { console.log("JavaScript Rules") }, 4000);
let clockInterval = setInterval(() => console.log("Wygenerowano z setInterval"), 10000);
clockInterval();
tclock();

