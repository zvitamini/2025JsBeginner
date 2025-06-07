// .map() vallback ve foreach gibi bir yapıya sahiptir.
/*
const numbers =[1,2,3,4,5];

const squeres = numbers.map(squere);
const cubes = numbers.map(cube);

console.log(squeres);
console.log("squeres");
console.log(cubes);

function squere(element) {
    return Math.pow(element, 2);
    
}

function cube(element) {
    return Math.pow(element, 3);
    
}
    */
/*

const ogrenciler =["Zeyna", "Afra", "Hatice", "Rabia", "Kerem", "Emre", "Seda", "Faruk"];

const ogrencilerBuyuk = ogrenciler.map(upperCase);
const ogrencilerKucuk = ogrenciler.map(lowerCase);
const ogrencilerTersten = ogrenciler.map(reverseString);

console.log(ogrencilerBuyuk);
console.log(ogrencilerKucuk);
console.log(ogrencilerTersten);

function upperCase(element) {
    return element.toUpperCase();
}

function lowerCase(element) {
    return element.toLowerCase();
}

function reverseString(element) {
    return element.split("").reverse().join("");
}*/

const dates =["2025-06-7", "1998-05-11", "2025-10-10", "2029-1-19"];

const formatedDates = dates.map(formatDates);

console.log(formatedDates);

function formatDates(element) {
    const parts = element.split("-");
    return `${parts[2]} / ${parts[1]} / ${parts[0]}`;

}