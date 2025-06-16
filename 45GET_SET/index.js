// getter ve setter gibi etkili kullanılacak bazı temel yapıları göreceğiz
// getter okumak için
//setters içeriği değiştirmek yazmak için kullanılıyor

/*class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }

    set width(newWidth){
        if (newWidth > 0) {
            this._width = newWidth; //burası set için kullanılan özel bir metod üsttekini alırken bunu yapar
        } else {
            console.error("Width must be a possitive number!")
        }
    }
    set height(newHeight){
        if (newHeight > 0) {
            this._height = newHeight; //burası set için kullanılan özel bir metod üsttekini alırken bunu yapar
        } else {
            console.error("Height must be a possitive number!")
        }
    }

    get width(){
        return  `${this._width.toFixed(1)} cm`;
    }
    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._width * this._height).toFixed(1)}cm`;
    }
}


const rectangle = new Rectangle(3, 4);



console.log(rectangle.width);
console.log(rectangle.height);
console.log(rectangle.area);
*/
//* 2. örnek

class Person{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    set firstName(newFirstName){
        if (typeof newFirstName === "string" && newFirstName.length > 0) {
            this._firstName= newFirstName;
        } else {
            console.error("Hatalı bir giriş, kullanıcı adı kelimelerden oluşmalı ve en az 1 harf içermelidir");
        }
    }
    set lastName(newLastName){
        if (typeof newLastName === "string" && newLastName.length > 0) {
            this._lastName= newLastName;
        } else {
            console.error("Hatalı bir giriş, kullanıcı soyadı kelimelerden oluşmalı ve en az 1 harf içermelidir");
        }
    }
    set age(newAge){
        if (typeof newAge === "number" && newAge>= 0) {
            this._age= newAge;
        } else {
            console.error("Kullanıcı yaşı 0 veya 0 dan büyük ve sayı değerinde olmalıdır!")
        }
    }
    get firstName(){
        return this._firstName;
    }
    get lastName(){
        return this._lastName;
    }
    get age(){
        return this._age;
    }
}

const person1 = new Person("Zeynep", "Vitamin", 27);

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);