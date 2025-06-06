/*
let numbers = [1,2,3,4,5];

numbers.forEach(kubunuAl); // burada önemli olan bir önceki fonksiyondan önce yazmak bunu unutma
numbers.forEach(display);


function double (element, index, array) {
    array [index] = element * 2 ;
}

function uckati (element, index, array) {
    array [index] = element * 3 ;
}

function karesiniAl(element, index , array) {
    array[index] = Math.pow(element,2);
}

function kubunuAl(element, index , array) {
    array[index] = Math.pow(element,3);
}
function display(element) {
    console.log(element);
}
*/

let meyveler =["Elma", "muz", "erik", "Kivi", "kiraz", "Karpuz"];

meyveler.forEach(capitalize);
meyveler.forEach(display); //! Bu fonksiyonla ekrana gösteririz, display kısmı kafanı karıştırmasın.

function upperCase (element, index, array) {
    array[index] = element.toUpperCase();
}
function lowerCase(element, index, array) {
    array[index] = element.toLowerCase();
}

function capitalize (element, index, array) {
    array[index]= element.charAt(0).toUpperCase() + element.slice(1);
}

function display(element) {
    console.log(element);
}