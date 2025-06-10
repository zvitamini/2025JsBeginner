// This komtundan bahsedelim, bir objeden referans çekek için kullanıyoruz 
// this komutu arrow fonksiyonda çalışmıyor
//      () => {console.log("Merhaba this.name")}, yazınca undifined hatası verecektir.
const person1= {
    name: "Seda",
    favFood: "Sarma",
    eat: "Elmali pasta",
    sayHello: function(){console.log(`Merhaba ben ${this.name}`)}, //this kullanarak obje içindeki nesneyi çağırabiliriz
    sayEat: function(){console.log(`${this.eat}`)}, 
}

const person2= {
    name: "Zeyna",
    favFood: "Et",
    eat: "Pirzola",
    sayHello: function(){console.log(`Merhaba ben ${this.name}`)}, //this kullanarak obje içindeki nesneyi çağırabiliriz
    sayEat: function(){console.log(`${this.eat}`)}, 
}

person1.sayHello();
person1.sayEat();

person2.sayHello();
person2.sayEat();

//console.log(this); bunu denersen window özelliklerini göreceksin
