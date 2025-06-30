// sort() metodunu keşfedelim
// sort ile sıralamalar yaparız önreğin alfabedik olarak yazımları, sayısal ooarak sıralamaları
//veya sembollere göre sıralamaları yaparız

let fruits = ["apple", "orange", "coconut", "banana", "pineapple"];
let numbers = [1,2,55,0,98,-3,96,11];

fruits.sort();
numbers.sort((a,b)=> b-a); //ters sıralamak için bunu yaptık

console.log(fruits);
console.log(numbers);


const people = [{name: "Zeyna", age: 27, gpa: 5.5 },
                {name: "Ela", age: 28, gpa: 1.8 },
                {name: "Emrey", age: 24, gpa: 8.7 },
                {name: "Laila", age: 47, gpa: 0.5 }]



people.sort((a,b) => a.name.localeCompare(b.name)); // isimleri sıralamak için bunu kullan 

console.log(people);