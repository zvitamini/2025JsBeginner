//super kısmı class yapılarında kullanılan özel bir metoddur adının hakkını verir superdir.

console.log("super");

class Animal {
    constructor(name, age){
       this.name = name;
        this.age= age; 
    }
    move(speed){
        console.log(`The ${this.name} moves at a speed of ${speed}km/h`);
    }
}
class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name,age);
        
        this.runSpeed= runSpeed;
    }
    run(){
        console.log(`This ${this.name} can run`);
        super.move(this.runSpeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        
        this.swimSpeed= swimSpeed;
    }
    swim(){
        console.log(`This ${this.name} can swim`);
        super.move(this.swimSpeed);
    }
}
class Eagle extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        
        this.flySpeed= flySpeed;
    }
    fly(){
        console.log(`This ${this.name} can swim`);
        super.move(this.flySpeed);
    }

}

const rabbit = new Rabbit("Bamsı", 4, 25 );
const fish = new Fish("Nemo", 2, 30 );
const eagle = new Eagle("Iro", 21, 250 );

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);
console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);
console.log(eagle.name);
console.log(eagle.age);
console.log(eagle.flySpeed);

rabbit.run();
fish.swim();
eagle.fly();