// setTimeout() = function in JavaScript that allows you to schedule
//                            the execution of a function after an amount of time 
//                            Times are approximate
//                            setTimeout(callback, delay);

/*
function sayHello(){
    window.alert("Hello Zeyna");
}

setTimeout(sayHello, 3000);
*/

//setTimeout(function () {window.alert("Selam Zeyna")}, 3000);

/*const timeoutId = setTimeout(()=> window.alert("Bu da bir arrow fonksiyonu"), 3000);

clearTimeout(timeoutId);
*/

//Aşağıdaki kısımda HTML kodları ile birlikte kullanım örneği var

let timeoutId;

function startTimer() {
    timeoutId= setTimeout(()=> window.alert("Basma şu düğmeye!"),3000);
    console.log("STARTED");
}
function clearTimer() {
    clearTimeout(timeoutId);
    console.log("STOPED");
}