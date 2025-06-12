//class = ES& feature

class Product{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
    displayProduct(){
        console.log(`Product: ${this.name}`);
        console.log(`Price: ${this.price.toFixed(2)}`);
    }

    calculateTotal(salesTax){
        return this.price + (this.price + salesTax);
    }
}
const salesTax= 0.05;


const product1 = new Product("Elbise", 450.99);
const total1 = product1.calculateTotal(salesTax);
product1.displayProduct();
console.log(`Toplam ödeme ${total1}`);


const product2 = new Product("kot pantalon", 350.00);
const total2 = product2.calculateTotal(salesTax);
product2.displayProduct();
console.log(`Toplam ödeme ${total2}`);





class İsim_listesi{
    constructor(isim,cinsiyet,evliMi,yas){
        this.isim= isim;
        this.cinsiyet= cinsiyet;
        this.evliMi= evliMi;
        this.yas= yas;
    }
    isimleriYaz(){
        console.log(`İsim: ${this.isim}`);
        console.log(`Cinsiyet: ${this.cinsiyet}`);
        console.log(`Yaş: ${this.yas}`);
        console.log(this.evliMi == true ? `Evli`: `Bekar`);
    }
}
const kisi1 = new İsim_listesi(`Zeynep`,`Kadın`, false, 27);
const kisi2 = new İsim_listesi(`Seda`,`Kadın`, false, 29);
const kisi3 = new İsim_listesi(`Emre`,`Erkek`, false, 24);
const kisi4 = new İsim_listesi(`Leyla`,`Kadın`, true, 53);
const kisi5 = new İsim_listesi(`Mehmet`,`Erkek`, true, 57);

kisi1.isimleriYaz();
kisi2.isimleriYaz();
kisi3.isimleriYaz();
kisi4.isimleriYaz();
kisi5.isimleriYaz();