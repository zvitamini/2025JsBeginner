//Mantık operatörleri ve kullanımları= Used to combine or manipulate boolean values

// true or false sonuçlar için bunu kullanıyoruz.

// AND= && 
// * OR = ||
//? NOT = !

const sicaklik= 20;
/*
if (sicaklik > 0 && sicaklik <= 30) {
    console.log("Hava sıcaklığı sıfırın üstündedir ve iyidir");
} else if(sicaklik > 30) {
    console.log("Hava sicaktir");    
}else{
    console.log("Hava çok iyi değildir");
}*/

/*
if (sicaklik <=0 || sicaklik > 30) {
    console.log("hava pek iyi değildir");
} else {
    console.log("hava iyidir");
} */

const isSunny = true;

if (!isSunny) {
    console.log("Hava kapalı");
} else {
    console.log("Hava güneşlidir");
}