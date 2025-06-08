//REDUCE komutu, array ve liste işlemlerinde kullanılır.

/*
const prices =[5, 30, 10, 25, 15, 20];

const total = prices.reduce(sum);

console.log(`${prices} tutarının toplamı ${total.toFixed(2)}$ olur`);

function sum(accumulator, element) { // burada şunu yaparız acumulator dediğimiz array ilk element, element ise bir sonraki
    return accumulator + element; // burada her defasında toplama bir sonraki eklenerek ilerleniyor.
}
*/

const grades = [75,50,90,80,65,95,5,100];

const maximum = grades.reduce(getMax);
const minimum = grades.reduce(getMin);

console.log(`${grades} sayılarındaki en yüksek değer ${maximum}, en düşük değer ${minimum} olacaktır!`)

function getMax(accumulator, element) {
    return Math.max(accumulator, element);
}

function getMin(acumulator, element) {
    return Math.min(acumulator, element);
}