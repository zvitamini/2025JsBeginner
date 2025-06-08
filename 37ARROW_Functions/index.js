// bazı kod yapılaını daha iyi ve optimize etmek için sırası ile kullanılan bir metoda arrow deniliyormuş
// => şu yapıda gözüküyor.
/*
const hello = (name, age) => {console.log(`Hello ${name}`)
                            age > 18 ? (age > 60 ? console.log(`you are very old`) :console.log(`you are just old`)) : (age > 10 ? console.log(`you are young`) :console.log(`you are chield`) )};



hello("zeyna", 5);*/

//?setTimeout(() => console.log("Selamın aleyküm robotçu dayı"), 3000);

const numbers = [1,2,3,4,5,6,7];

const kareAl = numbers.map((element) => Math.pow(element, 2));
const cubeAl = numbers.map((element) => Math.pow(element, 3));

const ciftSayilar = numbers.filter(( element) => (element % 2 === 0));
const tekSayilar = numbers.filter(( element) => (element % 2 !== 0));

const toplam = numbers.reduce((acculator, element) => acculator + element);

console.log(kareAl);
console.log(cubeAl);
console.log(ciftSayilar);
console.log(tekSayilar);
console.log(toplam);
