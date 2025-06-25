// nested object

const persons ={
    fullName: "Zeyna",
    age: 27,
    isStudent : true,
    hobies: ["resim çizmek", "enstruman çalmak", "yürümek", "hayal kurmak", "arkadaşları","merak"],
    adress:{
        street: "herhangi bir sokak",
        city: "Kuzey Şehri",
        country: "NORTH"

    }
}

console.log(persons.fullName);
console.log(persons.age);
console.log(persons.isStudent);

for (let index = 0; index < persons.hobies.length; index++) {
    console.log(persons.hobies[index]);
    
}

for( const property in persons.adress){
    console.log(persons.adress[property]);
}

class Person {
    constructor(name, age, ...address) {
        this.name = name;
        this.age= age;
        this.address = new Address(...address);
    }
}

class Address {
    constructor(street,city,country) {
        this.street = street;
        this.city = city;
        this.country= country;
    }
}


const person1 = new Person("Eran",25, "Andarun Castel",
                                      "Hiddums WEST",
                                      "HIDDUM");
const person2 = new Person("Amenia", 23, "Honor st",
                                         "Beyaz şehir",
                                         "HERRUM"
)
const person3 = new Person("Iro", 15, "Fısıltı Ormanı Sol geçidi",
                                         "Andarun",
                                         "HIDDUM"
)

//eran
console.log(person1.name);
console.log(person1.age);

for( const i in person1.address){
    console.log(person1.address[i]);
}
//amenia
console.log(person2.name);
console.log(person2.age);

for( const i in person2.address){
    console.log(person2.address[i]);
}
//iro
console.log(person3.name);
console.log(person3.age);

for(const j in person3.address){
    console.log(person3.address[j]);
}