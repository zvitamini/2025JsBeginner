// fonksiyonlar için yapılan değişkenler burada yer alıyor
// yapılan her şeyi console kısmında yer alacak

//* Aşağıda en basit hali ile function yapısıı bulunuyor, incelemen için silmiyorum.

/*
function happyBirthday (username, age){
    if (username == "Zeyna" || username == "Zvitamini" || username ==  "Zeynep") {
        console.log(`11 Mayıs doğum günüm kutlu olsun bennnn ${username}` );
        console.log(`Şu yaşındayımmm${age}` );
    } else {
        console.log("happy birthday to you!");
        console.log(`happy birthday to ${username}` );
        console.log("iyi ki doğdun annnemmmmm");
        console.log(`Yeni yaşın kutlu olsun ${age}` );
    }    
}
happyBirthday("Zeyna", 27);
happyBirthday("Anniş", 49);
happyBirthday("Seda", 29);
*/

function add(x,y){
    //let result = x + y;
    return x + y;
}
function subtrack(x,y) {
    return x-y;
}
function multiply(x,y) {
    return x * y;
}
function divide(x,y) {
    return x/ y;
}
function isEven(number) {
    return number %2 === 0 ? "çift": (number %2 === 1 ? "tek": "Bu bir sayı değeri değil");
}

function isValidEmail(email){

    if (email.includes("@")) {
        if (email.includes("zvitamini")) {
            return "Mailinde adım geçiyor";
        } else {
            return "mail girişi sağlanıyor";
        }
        
    } 
    else {
        return false;
    }
}

console.log(add(10, 5));
console.log(subtrack(10,5));
console.log(multiply(10,5));
console.log(divide(10,5));

console.log(isEven(11));
console.log(isValidEmail("zvitamini@mewmail.com"));
console.log(isValidEmail("anne@mewmail.com"));
console.log(isValidEmail("nicolaTesla.com"));
