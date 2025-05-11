// * variable için verilerini oluşturduğun gibi onları da oluşturmalısın
//? bir değişken oluşturmanın iki yolu vardır sana bunları aşağıda  göstereceğim;

/* İlki;
    Declaratioan (var, let, const)
    ? Assignmet (= assignment opetation)
    her ikisini de kullanarak variable yaratabilirsin
*/

let age;
// * bunu şu şekilde de deneyebilirsin ' let age = 27';
age = 27; //numbers

let firstName = "Zeyna"; //string
let student = true; //boolean

console.log("Merhaba", firstName , "seni burada görmek güzel");
console.log("sen şu anda" , age , "yaşındasın" );

console.log(student , "Yüksek lisansa devam ediyorsun");

document.getElementById("p1").innerHTML = "Merhaba " + firstName + " biz de seni bekliyorduk";
document.getElementById("p2").innerHTML = "Şu anda tam olarak " + age + "  yaşına basmış olmalısın ";
document.getElementById("p3").innerHTML = "evet, hala öğrenci olduğun " + student ;
