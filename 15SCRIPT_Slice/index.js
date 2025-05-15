// string dilimleme işlemi string.slice(başlama,bitme)

//const fullName = "Zeynep Yavuz";
/*
let firstName = fullName.slice(0,6);
let lastName= fullName.slice(7);

let firstChar = fullName.slice(0,1);
let laastChar = fullName.slice(-1);

console.log(firstName);
console.log(lastName);
console.log(firstChar);
console.log(laastChar);

if (firstChar.toUpperCase == laastChar.toUpperCase){
    console.log(`Bu çok özel çünkü ismin ve soy ismin ${firstChar} harfi ile başlıyor ve bitiyor!`);
}*/
/*
let firstName = fullName.slice(0, fullName.indexOf(" "));
let lastName = fullName.slice(fullName.indexOf(" ") + 1);
console.log(firstName);
console.log(lastName); */

const email = "zvitamini@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extension = email.slice(email.indexOf("@") + 1, email.indexOf("."));
let dotExtension = email.slice(email.indexOf(".")+1);

console.log(username);
console.log(extension);
console.log(dotExtension);