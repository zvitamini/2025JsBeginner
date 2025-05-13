/* tenary operator = a shortcut to if{} and else{} ifadelerinde kullanılıyor.
        condition ? codeIfTrue : codeIfFalse
        aslında excel de eger yazmak gibi geldi bana
*/

//let yas= 3;

//let message = yas >= 18 ? "yetiskin" : "Yeterince büyük değil";

//console.log(message);

/*let time = 16;

let greeting = time < 12 ? "good morning" : "goog afternoon mr Freeman";

console.log(greeting);*/

let isStudent = true;

let mesaj = isStudent ? "Bir öğrenci var burada hoş geldin" : "Mezun musun yoksa ter mi?";

document.getElementById("myP").textContent = mesaj;

let kiraBedeli = 250;

let harcama = kiraBedeli <= 100 ? "Çok ucuzmuş" : (kiraBedeli <= 200 ? "biraz pahallıymış" : ( kiraBedeli <= 300 ? "çok pahallı!" : "Dostum çıldırdın mı bu parayı ödemen çok saçma!"));

document.getElementById("myH4").textContent = harcama;
