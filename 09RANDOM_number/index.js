//? random sayı üretirken max ve min değer arasında bir hesaplama yapmak gerekmektedir

//* bu gereklilik örneğin 10 ile 30 arasında sayı tahmini olsun, Math.random()* 30 + 10; olunca şu sorun olur
/*
    30 a kadar bir değer var diyelim 21 olsun, min olan sayı 0 olmazsa +10 kısmı ile sayı random 31 olacaktır
    bunu engellemek için şunu yapmalısınız
    let randomSayi = Math.floor(Math.random()*(30-10)+10);

    aralıklı değeri birbirinden çıkartıp her seferinde min değer ekleyerek doğru algoritma kurulur.
*/
const randombtn = document.getElementById("btnRandom");

randombtn.onclick=function(){
    let altLimitNumber =Number( document.getElementById("altLimitNumber").value);
    let ustLimitNumber = Number(document.getElementById("ustLimitNumber").value);
    
    if (isNaN(altLimitNumber) || isNaN(ustLimitNumber) ||altLimitNumber >= ustLimitNumber ) {
        document.getElementById("randomNumber").textContent = "Lütfen geçerli bir değer giriniz";
        return;
    }

    let randomNumber= Math.floor(Math.random() *(ustLimitNumber - altLimitNumber +1)) +altLimitNumber;
    document.getElementById("randomNumber").textContent =randomNumber;
    console.log(`elde edilen rastgele değer için max sayi ${ustLimitNumber} ve min değer ${altLimitNumber} sonuç olarak rastgele üretilen sayı değeri de ${randomNumber} olarak hesaplandı`);
    

}



