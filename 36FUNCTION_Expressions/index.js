// function expressions = a way to define functions as
//                                 values or variables
//  1. Callbacks in asynchronous operations
//  2. Higher-Order Functions
//  3. Closures
//  4. Event Listeners

const firstText= "Merhaba Dünya";
const mainText= "JS öğrenimine hoş geldiniz!";
const animatedText = document.getElementById("animatedText");
let index = 0;

function typeWriter(text, callback) {
    if (index < text.length){
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(() => typeWriter(text, callback), 100);
    }else if (callback) {
        setTimeout(callback, 1000);
    }
}

function clearWriter(callback) {
    if (index > 0) {
        animatedText.innerHTML = animatedText.innerHTML.slice(0,-1);
        index --;
        setTimeout(() => clearWriter(callback), 70);
    }else if (callback) {
        setTimeout( callback, 500);
    }
}

//* Animasyon aşağıda başlıyor;
typeWriter(firstText, () => {
    clearWriter(() =>{
        index = 0;
        typeWriter(mainText);
    });
});

/*
function hello() {
    console.log("hello");
}

/*
const hello= function hello() {
    console.log("Hello");
}
hello();

setTimeout(hello, 3000);
*/

const numbers = [1,2,3,4,5,6];
const squeres = numbers.map(function (element) {
    return Math.pow(element,2);
});

const cubes= numbers.map(function (element) {
    return Math.pow(element, 3);
}
);

const ciftSayilar = numbers.filter(function (element) {
    return element % 2 === 0;
})
const tekSayilar = numbers.filter(function (element) {
    return element % 2 !== 0;
})

const toplam = numbers.reduce(function (accumulator, element) {
    return accumulator + element;
})

console.log(squeres);
console.log(cubes);
console.log(ciftSayilar);
console.log(tekSayilar);
console.log(toplam);

const hello = function () {
    console.log("hello");
}
hello();
setTimeout(function () {
    console.log("Goodbye everyone...");
}, 5000);

