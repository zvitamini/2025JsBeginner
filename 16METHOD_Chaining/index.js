let userName = window.prompt("Kullanıcı adını gir hergele");

// ------ NO METHOD CHANGE ----------

/*
userName = userName.trim();

let letter = userName.charAt(0);
letter=letter.toUpperCase();

let extraChar = userName.slice(1);
extraChar = extraChar.toLowerCase();
console.log(userName);
console.log(letter);
console.log(extraChar);
userName = letter + extraChar ;

console.log(`kullanıcı adınız artık: ${userName} oldu`);*/

// ------ METHOD CHANGE ----------

userName = userName.trim().charAt(0).toUpperCase() + userName.trim().slice(1).toLowerCase();

console.log(userName);