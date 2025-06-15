// inheritances kısmına birlikte göz atalım


class Hayvan{
    alive = true;

    eat(){
        console.log(this.name == "Tavşan"? `Bu hayvan ${this.name}, havuç yiyor`:(this.name == "Balık"? `Bu hayvan ${this.name}, yem yiyor` :`Bu hayvan ${this.name}, et yiyor` ));
    }
    sleep(){
        console.log(`Bu hayvan ${this.name}, uyuyor`);
    }
}

class Tavsan extends Hayvan{
    name = "Tavşan";
    run(){
        console.log("Koşuyor!");
    }
}

class Fish extends Hayvan{
    name = "Balık";
    swim(){
        console.log("Yüzüyor");
    }
}

class Kartal extends Hayvan{
    name = "Kartal";
    fly(){
        console.log("Uçuyor!");
    }
}

const tavsan = new Tavsan();
const fish = new Fish();
const kartal = new Kartal();

console.log(tavsan.alive);
tavsan.eat();
tavsan.sleep();
tavsan.run();

console.log(kartal.alive);
kartal.eat();
kartal.sleep();
kartal.fly();

console.log(fish.alive);
fish.eat();
fish.sleep();
fish.swim();