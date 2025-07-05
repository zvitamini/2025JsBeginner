// Date Object kullanımında zamanı kullanıccağız
//Date(yıl, ay, gün, saat, dakika, saniye, milisaniye)

const date = new Date();
/*
const year = date.getFullYear();
const month = date.getMonth();
const day = date.getDate();
const hour = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const dayOfWeek = date.getDay();

console.log(year);
console.log(month);
console.log(day);
console.log(hour + ":" + minute + "." + second);
console.log(dayOfWeek);
*/

date.setFullYear(2025);
date.setMonth(6);
date.setDate(3);
date.setHours(22);
date.setMinutes(50);
date.setSeconds(11);


console.log(date);

const date1 = new Date("2024-12-31");
const date2 = new Date("2025-01-01");

if (date2 > date1) {
    console.log("HAPPY NEW YEAR!");
    
}