/* rest parameters = (..rest) şeklinde kullanılıyor
Abla bu arada onun adı saaaaki büfe değil saki büfe buradan Seda ablama sesleniyorum lütfen öğren de gel ♥
*/

function openFridge(...foods) {
    console.log(...foods);
}
function getFoods(...foods) {
    return foods;
}

const yemekler1 = "pizza";
const yemekler2 = "hamburger";
const yemekler3 = "sosisli";
const yemekler4 = "spagetti";
const yemekler5 = "iskender";

//openFridge(yemekler1,yemekler2,yemekler3,yemekler4, yemekler5);

const foods = getFoods(yemekler1,yemekler2,yemekler3,yemekler4,yemekler5);

console.log(foods);

console.log("    ");

function sum(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result;
}
function getAverage(...numbers) {
    let result = 0;
    for (let number of numbers) {
        result += number;
    }
    return result / numbers.length;
}
const total1 = sum(10,4,8);

const total2 = getAverage(5,12,13);
console.log(total1);
console.log(total2);

function combineString(...strings){
    return strings.join(" ");
}

const fulName = combineString("Mr.", "Robot", "Elliot", "Jr");

console.log(fulName);