// static bir metoddur.

/*
class MathUtil{
    static PI = 3.14159;

    static getDiameter(radius){
        return radius*2;
    }
    static getCirculumFerence(radius){
        return 2*this.PI * radius;
    }
    static getArea(radius){
        return this.PI * (Math.pow(radius, 2));
    }
}

//const MathUtil1 = new MathUtil();

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCirculumFerence(10));
console.log(MathUtil.getArea(10));
*/

class Kullanici{
    static kullaniciSayisi = 0;

    constructor(kullaniciAdi){
        this.kullaniciAdi = kullaniciAdi;
        Kullanici.kullaniciSayisi ++;
    }

    static getKullaniciHesapla(){
        console.log(`Burada şu anda ${Kullanici.kullaniciSayisi} kadar kişi var.`)
    }

    soyleMerhaba(){
        console.log(`Merhaba benim adım ${this.kullaniciAdi}`);
    }
}

const kullanici1 = new Kullanici("Zeyna");
const kullanici2 = new Kullanici("Seda");
const kullanici3 = new Kullanici("Annish");

console.log(kullanici1.kullaniciAdi);
console.log(kullanici2.kullaniciAdi);
console.log(kullanici3.kullaniciAdi);
console.log(Kullanici.kullaniciSayisi);

kullanici1.soyleMerhaba();
kullanici2.soyleMerhaba();
kullanici3.soyleMerhaba();

Kullanici.getKullaniciHesapla();