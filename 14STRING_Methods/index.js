// ! String kısmında yapılan manipulasyon işlemleri

let phoneNumber = "555-444-11-11";

let userName = "Zvitamini";

let result = userName.startsWith(" ");
let endText = userName.endsWith(" ");
let includeSpace = userName.includes(" ");
/*
console.log(userName.charAt(0));
console.log(userName.charAt(1));
console.log(userName.charAt(2));
console.log(userName.charAt(3));
console.log(userName.charAt(4));
console.log(userName.charAt(5));
console.log(userName.charAt(6));
console.log(userName.charAt(7));
console.log(userName.charAt(8)); // Bak mesela buradan sonrası boş çünkü harf yok
console.log(userName.charAt(9));
console.log(userName.charAt(10));
*/

console.log(userName.indexOf("i"));
console.log(userName.lastIndexOf("i"));

console.log(userName.length);
console.log(userName);

console.log(userName.trim()); // başındaki gereksiz boşluğu siler.

console.log(userName.toUpperCase()); // bir yazılım klasiği hepsini büyük yazar
console.log(userName.toLowerCase()); //bu da bir başka klaik tarzda her şeyi küçük yazar.

console.log(userName.repeat(11));

console.log(result);
if (result || endText) {
    console.log("kullanıcı adı ' ' (boşluk) ile başlayamaz veya bitemez!");
}
else if (includeSpace) {
    console.log("kullanıcı adı ' ' (boşluk) içeremez!");

}
else{
    console.log(`kullanıcı ismi ${userName} seçildi`);
}

console.log(phoneNumber);
phoneNumber = phoneNumber.replaceAll("-", ""); // içinde tire geçen yerleri sil, bunu eski sevgilim ismi yerine oç yazmak için kullanacağım :)
phoneNumber = phoneNumber.padStart (10 , "0"); //uzunluğu istenilen sayı olana kadar başına tırnak içinde yazılandan ekler
userName = userName.padEnd( 20, " a ");
console.log(phoneNumber);
console.log(userName);
