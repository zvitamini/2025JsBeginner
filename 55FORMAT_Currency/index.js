// .toLocalString() yapısına bakacağız örneğimiz için bir alta bak canım benin
//                  bir tane dah alta düzgün gözüksün
//                      yine alta bak
//                              aşağıda
//                                  bir altta
//                                      tamam şimdi bir altta ↓
//                                          ↓↓↓↓↓
//number.localString("locale", {options});

let number = 123456.789;
let number1 = 123456.789;
let number2 = 123456.789;
let number3 = 123456.789;
let number4 = 123456.789;

let sayi= 123456.789;

number = number.toLocaleString("tr-TR"); //Türkçe formatı
console.log(number + " Tük usulü sayılar");

number1 = number1.toLocaleString("en-US"); //ingiliz formatı
console.log(number1 + " Amerikan vari sayılar");

number2 = number2.toLocaleString("hi-IN"); //Hint formatı
console.log(number2+ " amir khan sayıları");

number3 = number3.toLocaleString("de-DE"); //Germn formatı
console.log(number3+ " Alman sayısı");

number4 = number4.toLocaleString(undefined); //belirtilmemiş format
console.log(number4+ " belirlenmemiş format");

sayi= sayi.toLocaleString("tr-TR", {style: "currency", currency: "TRY"});
console.log(sayi);
