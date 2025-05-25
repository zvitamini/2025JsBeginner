// array = yani namı değer listesel şeyler

console.log("Afra Canbulat seni çok seviyorum sen benim ikizimsin çokça kalpppp");

let fruits = ["apple" , "orange", "melon", "greece", "cherry", "srawbery"];
//fruits[3] = "nane"; burada 3. sırada yeni bir eleman eklenişi öeneği var

//fruits.push("rasbery");
//fruits.pop();
//fruits.unshift("mango");
//fruits.shift();
/*
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); 
*/
/*
let numberOfFruits = fruits.length;
let index = fruits.indexOf("orange");

console.log(numberOfFruits + " tane meyveniz bulunmaktadır");
console.log(index);*/

fruits.sort().reverse(); // dizilimini terse çevirmek için kullanılır.

for(let i=0; i < fruits.length; i++){
    console.log(fruits[i]);
}

console.log("tersinden bir liste örneği aşağıda kodları inceleyiniz");
for (let i = fruits.length -1 ; i > -1; i--) {
    console.log(fruits[i]);
    
}
console.log("take a breafe");
for (let fruit of fruits) {
    console.log(fruit);
    
}