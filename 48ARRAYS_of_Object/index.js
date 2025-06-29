const fruits = [{name: "apple", color:"red", calories: 95},
                {name: "orange", color:"orange", calories: 45},
                {name: "banana", color:"yellow", calories: 105},
                {name: "coconat", color:"white", calories: 159},
                {name: "pineaple", color:"yellow", calories: 37}];

// fruits.push({name: "grapes", color:"purple", calories: 62}) bir ekleme için bunu yazarsın

//fruits.pop();  son sıradakini silmek için pop kullanabilirsiniz

//fruits.splice(1,2); liste objelerini yoketmek için bu yöntem kullanılır

/*

for (let index = 0; index < fruits.length; index++) {
    console.log(`${fruits[index].name} meyvesi ${fruits[index].color} renginde ve ${fruits[index].calories} kaloridir`);    
}

for(const fruit of fruits){
    console.log(fruit.color);
}
    */

//----------forEach---------------

fruits.forEach(fruit => console.log(fruit.name, fruit.color, fruit.calories ));

//-----------map()----------------

const fruitNames= fruits.map( fruit => fruit.name);
const fruitColors= fruits.map( fruit => fruit.color);
const fruitCalories= fruits.map( fruit => fruit.calories);

console.log(fruitNames);
console.log(fruitColors);
console.log(fruitCalories);

//--------filter()-----------
const yellowFruits = fruits.filter(fruit => fruit.color === "yellow");
const lowCalFruits = fruits.filter(fruit => fruit.calories <= 100);
const highCalFruits = fruits.filter(fruit => fruit.calories >= 100);

console.log(yellowFruits);
console.log(lowCalFruits);
console.log(highCalFruits);

//------reduce()-----------

const maxFruits = fruits.reduce((max, fruit) => 
                                fruit.calories> max.calories?
                                fruit: max);
const minFruits = fruits.reduce((min, fruit) => 
                                fruit.calories< min.calories?
                                fruit: min);

console.log(maxFruits.calories);
console.log(minFruits.calories);