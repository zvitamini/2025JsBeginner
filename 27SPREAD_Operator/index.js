//* spread için ... ifadesi kullanılıyor listelerle işlem yapmayı sağlıyor kullanışlı.

let numbers = [1,2,3,4,5];

let maximum = Math.max(...numbers);
let minimum = Math.min(...numbers);

console.log(numbers);
console.log(maximum);
console.log(minimum);

let username = "Zeynep Yavuz";
let letters = [...username].join(`-`);
console.log(letters);

let meyveler = [`muz`,`kivi`, `elma` ,`erik`];
let sebzeler = [`marul`, `sogan`,`patates`, `turp`];
let yemekler = [...meyveler, ...sebzeler, `yumurta`, `krema`];

console.log(yemekler);